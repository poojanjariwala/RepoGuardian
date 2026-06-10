export async function analyzeRepo(repoUrl: string) {
  // call backend API
  return fetch('/api/analyze', { method: 'POST', body: JSON.stringify({ repoUrl }) })
}
