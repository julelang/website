import hljs from 'highlight.js/lib/core'
import jule from './jule-lang.js'

hljs.registerLanguage('jule', jule.jule)

export function highlight(code) {
  return hljs.highlight(code, { language: 'jule' }).value
}

// Highlight every <code data-lang="jule"> inside a root element
export function highlightAll(root) {
  root?.querySelectorAll('code[data-lang="jule"]').forEach((el) => {
    if (el.dataset.done) return
    el.innerHTML = highlight(el.textContent)
    el.dataset.done = '1'
  })
}
