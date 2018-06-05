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
    return `
      :host h3 {
        font-size: inherit;
        font-weight: normal;
        color: #666;
      }

      :host time {
        color: #666;
      }
    `
  }

  getTemplate(data) {
    return `
      <header>
        <h2>${data.title}</h2>
        <h3>${data.subtitle}</h3>
        <time>${data.date}</time>
      </header>
    `
  }
}

customElements.define(COMPONENT_NAME, _PostHeader)
