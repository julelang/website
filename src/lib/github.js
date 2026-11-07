// Small cached GitHub API client. Unauthenticated calls are limited to
// 60/hour per IP, so every response is cached in sessionStorage.
const TTL = 10 * 60 * 1000
const API = 'https://api.github.com/repos/julelang/jule'

async function cached(key, url) {
  try {
    const raw = sessionStorage.getItem(key)
    if (raw) {
      const { t, v } = JSON.parse(raw)
      if (Date.now() - t < TTL) return v
    }
  } catch { }
  const res = await fetch(url, { headers: { Accept: 'application/vnd.github+json' } })
  if (!res.ok) throw new Error(`GitHub API responded with ${res.status}`)
  const v = await res.json()
  try {
    sessionStorage.setItem(key, JSON.stringify({ t: Date.now(), v }))
  } catch { }
  return v
}

export const getRepo = () => cached('jule:repo', API)
export const getReleases = () => cached('jule:releases', `${API}/releases`)
export const getRelease = (id) => cached(`jule:release:${id}`, `${API}/releases/${id}`)

export function formatCount(n) {
  if (n == null) return ''
  return n >= 1000 ? (n / 1000).toFixed(n >= 10000 ? 0 : 1).replace(/\.0$/, '') + 'k' : String(n)
}

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

export function detectOS() {
  const p = (navigator.userAgentData?.platform || navigator.platform || navigator.userAgent || '').toLowerCase()
  if (p.includes('mac') || p.includes('darwin')) return 'macos'
  if (p.includes('win')) return 'windows'
  return 'linux'
}

export function parseAsset(a) {
  const n = a.name.toLowerCase()
  const os = n.includes('darwin') || n.includes('macos') ? 'macos' : n.includes('windows') ? 'windows' : n.includes('linux') ? 'linux' : 'other'
  const arch = n.includes('i386') ? '386' : n.includes('arm64') ? 'arm64' : n.includes('amd64') ? 'amd64' : 'other'
  return { ...a, os, arch, mb: (a.size / 1024 ** 2).toFixed(1) }
}

export const OS_LABEL = { windows: 'Windows', macos: 'macOS', linux: 'Linux', other: 'Other' }
export const ARCH_LABEL = { amd64: 'x86-64 (amd64)', arm64: 'ARM64', 386: 'Intel 386', other: 'Other' }
