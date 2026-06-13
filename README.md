# 🛡️ RepoGuardian — Autonomous AI-Powered Code Auditor & PR Fixer

RepoGuardian is a next-generation **multi-agent fullstack application** designed to audit, explore, and automatically repair software repositories. By chaining together five distinct AI agents, it clones a target repository, runs it in a sandboxed runtime environment to capture live logs/errors (via Playwright), maps runtime issues back to source lines, conducts security/architectural audits, and generates complete, push-ready pull requests for fixes.

---

## 🏗️ System Architecture & Agent Flow

RepoGuardian uses an orchestrator pattern to coordinate **five specialized AI agents** that run in sequence.

```
                  ┌──────────────────────┐
                  │ Target GitHub Repo   │
                  └──────────┬───────────┘
                             │ (Clone)
                             ▼
                    ┌─────────────────┐
                    │  Scanner Agent  │ ──► Framework & dependency analysis
                    └────────┬────────┘
                             ▼
                    ┌─────────────────┐
                    │  Explorer Agent │ ──► Installs dependencies & runs sandboxed app
                    └────────┬────────┘     (Captures console errors via Playwright)
                             ▼
                    ┌─────────────────┐
                    │  Auditor Agent  │ ──► Maps captured console errors to specific
                    └────────┬────────┘     source code files and line numbers
                             ▼
                    ┌─────────────────┐
                    │ Architect Agent │ ──► Audits security & performance anomalies
                    └────────┬────────┘     (Hardcoded keys, API vulnerabilities, etc.)
                             ▼
                    ┌─────────────────┐
                    │  Executor Agent │ ──► Generates precise code diffs & submits
                    └─────────────────┘     GitHub PR (upon user approval)
```

| Agent Name | Primary Role | Core Technologies / Models |
| :--- | :--- | :--- |
| **Scanner Agent** | Inspects repository layouts, readme files, and `package.json` configurations to identify the application framework and launch command. | Gemini API, Python AST |
| **Explorer Agent** | Boots the app in a sandboxed background environment and navigates through the pages using headless browsers. | Playwright, Node Subprocess |
| **Auditor Agent** | Correlates raw front-end or server-side console errors back to structural lines of source code. | Gemini API, Contextual Diffs |
| **Architect Agent** | Analyzes the static codebase for security loopholes (e.g. exposed credentials) and architecture anti-patterns. | Gemini API, Static RegEx Scanner |
| **Executor Agent** | Produces code adjustments and publishes a clean Git branch + Pull Request to the origin repository. | GitPython, PyGithub, Gemini API |

---

## 🛠️ Tech Stack

* **Backend**: FastAPI (Python 3.9+), Uvicorn, Playwright (Headless Browser Automation), PyGithub, GitPython, Google Generative AI (Gemini SDK).
* **Frontend**: Next.js (App Router, v14), TypeScript, Tailwind CSS, Axios, React Diff Viewer.
* **Database (Optional)**: Supabase (PostgreSQL) for job persistence and PR history.

---

## 🚀 Local Setup & Installation

Follow these steps to configure and run RepoGuardian on your local machine.

### Prerequisites
Make sure you have the following software installed:
* **Python 3.9+** (Check with `python --version`)
* **Node.js 18+** (Check with `node --version`)
* **Git** (Check with `git --version`)

---

### 1. Backend Configuration

1. Open your terminal and navigate to the `backend` folder:
   ```bash
   cd backend
   ```

2. Create a Python virtual environment:
   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment:
   * **Windows (Command Prompt)**:
     ```cmd
     venv\Scripts\activate
     ```
   * **Windows (PowerShell)**:
     ```powershell
     .\venv\Scripts\Activate.ps1
     ```
   * **macOS / Linux**:
     ```bash
     source venv/bin/activate
     ```

4. Install python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

5. Install the required Playwright browser binaries:
   ```bash
   playwright install chromium
   ```

6. Configure your environment variables. Copy `.env.example` to `.env`:
   ```bash
   copy .env.example .env
   ```
   *Open backend/.env and populate the following keys:*
   * `GEMINI_API_KEY`: Your Google Gemini API Key.
   * `GITHUB_TOKEN`: A GitHub Personal Access Token (classic or fine-grained) with permissions to clone repos and write Pull Requests.
   * `SUPABASE_URL` / `SUPABASE_SERVICE_KEY`: Optional Supabase config if you wish to run with SQL database persistence.

7. Start the FastAPI development server:
   ```bash
   uvicorn main:app --reload --port 8000
   ```
   The backend API will now be live at `http://localhost:8000`.

---

### 2. Frontend Configuration

1. Open a new terminal window and navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```

2. Install the frontend dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables. Copy `.env.local.example` to `.env.local`:
   ```bash
   copy .env.local.example .env.local
   ```
   *Ensure the following variable matches your backend URI:*
   ```env
   NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
   ```

4. Launch the Next.js development server:
   ```bash
   npm run dev
   ```
   The frontend application will now be running at `http://localhost:3000`.

---

### 3. One-Click Running (Windows Only)

If you are on Windows, you can start both servers simultaneously using the utility batch script at the project root:
```cmd
.\run.bat
```
This script will open two separate command prompt windows running the FastAPI server and the Next.js server respectively.

> [!WARNING]
> Ensure you have activated your virtual environment and run `pip install` in `backend`, and `npm install` in `frontend` before invoking the batch file.

---

## 🎯 Testing with a Demo Buggy App

To make testing easier, a demo application (`demo-broken-app`) has been provided at the project root, along with a python utility script (`create_demo_repo.py`) to host it on your own GitHub account.

1. Configure `backend/.env` with your `GITHUB_TOKEN`.
2. Run the creation script:
   ```bash
   python create_demo_repo.py
   ```
3. This script will automatically create a public repository called `demo-broken-app` on your GitHub account and push the demo codebase to it.
4. Copy the URL of your new repository and paste it into the search bar in the RepoGuardian UI to run a full scanning cycle!

---

## 🗄️ Database Setup (Supabase)

If you configure Supabase persistence, deploy the SQL schema by running the script located in `supabase/schema.sql` inside your Supabase SQL Editor:
1. Log in to the Supabase Console and open your project.
2. Go to the **SQL Editor** tab.
3. Click **New Query**, paste the contents of [schema.sql](file:///c:/Users/acer/OneDrive/Desktop/RepoGuardian-main%20(1)/RepoGuardian-main/supabase/schema.sql), and click **Run**.
4. Set `SUPABASE_URL` and `SUPABASE_SERVICE_KEY` in the `backend/.env` file.

---

## 📂 Project Directory Structure

```
RepoGuardian/
├── backend/                  # FastAPI Application
│   ├── agents/               # Multi-Agent implementation modules
│   │   ├── scanner.py        # Framework detection agent
│   │   ├── explorer.py       # Runtime execution & error capture agent
│   │   ├── auditor.py        # Error trace-mapping agent
│   │   ├── architect.py      # Static code & safety review agent
│   │   └── executor.py       # Git Branch & PR creation agent
│   ├── main.py               # REST Endpoints
│   ├── orchestrator.py       # Sequential execution controller
│   ├── db.py                 # Supabase communication layer
│   ├── requirements.txt      # Python dependencies
│   └── .env.example          # Environment placeholder vars
├── frontend/                 # Next.js Application
│   ├── app/                  # App Router views (dashboard, analyze trace, etc.)
│   ├── components/           # UI elements (Agent status cards, inputs)
│   ├── lib/                  # Client connectors (Supabase, API callers)
│   ├── package.json          # Node dependencies
│   └── .env.local.example    # UI config variables
├── supabase/
│   └── schema.sql            # DB SQL table schema definitions
├── run.bat                   # Dual-server startup script
└── README.md                 # Project guide & instructions
```

---

## 💻 Style & Development Guidelines

When contributing to this project, adhere to the following architectural patterns:
1. **UTF-8 Output Stream Safety**: On Windows systems, always ensure CLI streams are reconfigured to support UTF-8 (as done in `main.py` and `run_job.py` via `sys.stdout.reconfigure(encoding='utf-8')`).
2. **State Isolation**: Backend operations are transient and run in a random temporary folder (`tempfile.mkdtemp(prefix="architect_")`) to keep multiple jobs from overriding each other.
3. **Pydantic Validation**: Define request bodies under typed Pydantic models (e.g. `AnalyzeRequest`) in the backend to ensure automatic OpenAPI serialization.
4. **Tailwind Styling**: Components in the frontend use Tailwind classes with modular transitions (like `transition-all duration-300`) to create premium, interactive UI card highlights (see [AgentCard.tsx](file:///c:/Users/acer/OneDrive/Desktop/RepoGuardian-main%20(1)/RepoGuardian-main/frontend/components/AgentCard.tsx)).
