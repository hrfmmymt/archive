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
    `
  }

  getTemplate(data) {
    return `
      <a href=${this.dataLink}>
        <dl class="${
          data.format === 'large' ? 'img-wrapper-large' : 'img-wrapper-small'
        }">
          <dt>
            ${data.title}
            ${data.imgsrc && `
              <archive-img
                data-src="${data.imgsrc}",
                data-alt="image ${data.title}",
                data-width="${data.format === 'large' ? '2' : '1'}",
                data-height="${data.format === 'large' ? '1' : '1'}",
                data-layout="${data.format === 'large' ? '' : 'fixed-layout'}"
              ></archive-img>`
            }
          </dt>
          <dd>
            <ul>
              <li class="subtitle">${data.subtitle}</li>
              <li class="date">${data.date}</li>
            </ul>
          </dd>
        </dl>
      </a>
    `
  }
}

customElements.define(COMPONENT_NAME, _PostList)
