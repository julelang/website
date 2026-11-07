import { ref } from 'vue'
import { getRepo, getReleases } from './github.js'

// Shared reactive state so navbar, hero and downloads reuse one request.
export const repo = ref(null)
export const releases = ref(null)
export const releasesError = ref(null)
export const repoFailed = ref(false)
let repoStarted = false
let relStarted = false

export function loadRepo() {
  if (repoStarted) return
  repoStarted = true
  getRepo()
    .then((r) => (repo.value = r))
    .catch(() => (repoFailed.value = true))
}

export function loadReleases() {
  if (relStarted) return
  relStarted = true
  getReleases()
    .then((r) => (releases.value = Array.isArray(r) ? r : []))
    .catch((e) => {
      releasesError.value = e.message
      relStarted = false
    })
}

export function retryReleases() {
  releasesError.value = null
  releases.value = null
  relStarted = false
  try {
    sessionStorage.removeItem('jule:releases')
  } catch { }
  loadReleases()
}
