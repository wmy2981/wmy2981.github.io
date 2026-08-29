export default function labelPlugin(md) {
  const labelRegex = /#([a-zA-Z0-9一-龥_-]+)#/g

  function tokenize(state, silent) {
    const start = state.pos
    const max = state.posMax
    const src = state.src

    if (silent) return false
    if (start + 2 >= max) return false
    if (src[start] !== '#') return false

    let end = start + 1
    while (end < max && src[end] !== '#') {
      end++
    }

    if (end >= max || end === start + 1) return false

    const content = src.slice(start + 1, end)
    if (!content.match(/^[a-zA-Z0-9一-龥_-]+$/)) return false

    state.pos = end + 1
    state.posMax = max

    const token = state.push('label', '', 0)
    token.content = content
    token.markup = '#'

    return true
  }

  md.inline.ruler.before('emphasis', 'label', tokenize)

  md.renderer.rules.label = function (tokens, idx) {
    const content = tokens[idx].content
    return `<span class="vp-label">${content}</span>`
  }
}
