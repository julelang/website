import { ref } from 'vue'

export const theme = ref(document.documentElement.getAttribute('data-theme') || 'dark')

export function setTheme(t) {
  theme.value = t
  document.documentElement.setAttribute('data-theme', t)
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', t === 'dark' ? '#0f1318' : '#f5f7f9')
  try {
    localStorage.setItem('jule-theme', t)
  } catch { }
}

export const toggleTheme = () => setTheme(theme.value === 'dark' ? 'light' : 'dark')
