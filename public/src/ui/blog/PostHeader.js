import { App } from './App.js'

const COMPONENT_NAME = 'post-header'
export class _PostHeader extends App {
  getComponentName() {
    return COMPONENT_NAME
  }

  connectedCallback() {
    const data = {
      title: this.getAttribute('data-title'),
      subtitle: this.getAttribute('data-subtitle'),
      date: this.getAttribute('data-date')
    }
    super.render(data)
  }

  getStyle() {
    return
  }

  getTemplate(data) {
    return `
      <header>
        <h2>${data.title}</h2>
        <div class="subtitle">${data.subtitle}</div>
        <div class="date">${data.date}</div>
      </header>
    `
  }
}

customElements.define(COMPONENT_NAME, _PostHeader)
