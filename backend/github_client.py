import os
import google.generativeai as genai

def generate_content_with_fallback(prompt: str, model_name: str = "gemini-2.5-flash", system_instruction: str = None):
    """
    Tries calling Gemini API using configured keys (GEMINI_API_KEY_1 to 5) one-by-one.
    If a key fails (due to quota or auth), it automatically falls back to the next key.
    """
    keys = []
    
    # Check numbered keys first
    for i in range(1, 6):
        key = os.getenv(f"GEMINI_API_KEY_{i}")
        if key and key.strip() and "your_gemini_api_key" not in key:
            keys.append(key.strip())
            
    # Also support default GEMINI_API_KEY as final fallback
    default_key = os.getenv("GEMINI_API_KEY")
    if default_key and default_key.strip():
        keys.append(default_key.strip())
        
    # Remove duplicates while preserving list order
    unique_keys = []
    for k in keys:
        if k not in unique_keys:
            unique_keys.append(k)
            
    if not unique_keys:
        raise ValueError("No valid Gemini API keys found. Please set GEMINI_API_KEY_1 in your .env file.")
        
    last_err = None
    for idx, key in enumerate(unique_keys, 1):
        try:
            # Mask key for printing
            masked_key = f"{key[:6]}...{key[-4:]}" if len(key) > 10 else "..."
            print(f"[Gemini Client] Attempting request using Key #{idx} ({masked_key})")
            
            genai.configure(api_key=key)
            model = genai.GenerativeModel(
                model_name=model_name,
                system_instruction=system_instruction
            )
            response = model.generate_content(prompt)
            # Accessing response.text throws an exception if the response was blocked or invalid
            _ = response.text
            print(f"[Gemini Client] Request succeeded with Key #{idx} ✓")
            return response
        except Exception as e:
            print(f"[Gemini Client] Key #{idx} failed: {e}")
            last_err = e
            
    # If all keys failed, raise the last exception
    raise last_err
