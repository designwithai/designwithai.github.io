const footnoteElList = document.querySelectorAll('.footnote-container__footnote')

document.addEventListener('DOMContentLoaded', () => {
  footnoteElList.forEach(el => {
    const containerEl = el.closest('.footnote-container')
    if (!containerEl) {
      return
    }

    const firstQuoteEl = containerEl.querySelector('.footnote-container__quote')
    if (!firstQuoteEl) {
      return
    }

    el.style.top = `${firstQuoteEl.offsetTop}px`
  })
})
