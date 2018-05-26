import { App } from './App.js'

const COMPONENT_NAME = 'post-list'
export class _PostList extends App {
  getComponentName() {
    return COMPONENT_NAME
  }

  connectedCallback() {
    const data = {
      format: this.getAttribute('data-format'),
      title: this.getAttribute('data-title'),
      subtitle: this.getAttribute('data-subtitle'),
      date: this.getAttribute('data-date'),
      imgsrc: this.getAttribute('data-imgsrc')
    }
    this.dataLink = this.getAttribute('data-link')
    super.render(data)
  }

  getStyle() {
    return `
      :host {
        margin:0 auto;
        margin-top:10px;
        cursor: pointer;
      }

      :host a {
        display: block;
      }

      :host li {
        list-style-type: none;
      }
    `
  }

  getTemplate(data) {
    return `
      <a href=${this.dataLink}>
        <section class="${
          data.format === 'large' ? 'img-wrapper-large' : 'img-wrapper-small'
        }">
          <h3>${data.title}</h3>
          ${data.imgsrc && `
            <archive-img
              data-src="${data.imgsrc}",
              data-alt="image ${data.title}",
              data-width="${data.format === 'large' ? '2' : '1'}",
              data-height="${data.format === 'large' ? '1' : '1'}",
              data-layout="${data.format === 'large' ? '' : 'fixed-layout'}"
            ></archive-img>`
          }
          <h4>${data.subtitle}</h4>
          <time>${data.date}</time>
        </section>
      </a>
    `
  }
}

customElements.define(COMPONENT_NAME, _PostList)
