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
      imgsrc: this.getAttribute('data-imgsrc'),
      className: this.getAttribute('data-class')
    }
    this.dataLink = this.getAttribute('data-link')
    super.render(data)
  }

  getStyle() {
    return `
      :host {
        display: block;
        margin: 0 auto 1%;
        cursor: pointer;
      }

      :host a {
        display: flex;
        color: #000;
        text-decoration: none;
        border-bottom: 1px solid #999;
      }

      :host a.headline {
        margin-bottom: 8%;
        padding: 0;
        border-bottom: none;
      }

      :host a.headline h3 {
        order: 2;
        font-size: 3rem;
      }

      :host a.headline archive-img {
        order: 0;
        align-self: stretch;
        margin-right: 2%;
        max-width: 65%;
      }

      :host a.headline h4 {
        order: 3;
      }

      :host a.headline time {
        order: 1;
        align-self: stretch;
      }

      :host a.headline .data {
        display: block;
        max-width: 35%;
      }

      :host a {
        padding: 2%;
      }

      :host a archive-img {
        order: 1;
        max-width: 20%;
      }

      :host a .data {
        display: flex;
        flex-flow: column wrap;
        width: 80%;
        order: 0;
      }

      :host a h3 {
        order: 1;
        font-size: 2rem;
        font-weight: 400;
        margin: 1rem 0 0;
      }

      :host a time {
        order: 0;
      }

      :host a h4 {
        order: 2;
        font-weight: 400;
        margin: 1rem 0 0;
      }

      /* for mobile */
      @media (max-width: 414px) {
        :host {
          margin-bottom: 2rem;
        }

        :host a {
          display: block;
          margin-bottom: inherit;
          position: relative;
          border-bottom: none;
        }

        :host a.headline archive-img,
        :host a archive-img,
        :host a.headline .data,
        :host a .data {
          max-width: 100%;
          width: 100%;
        }

        :host a.headline h3 {
          font-size: 1.2rem;
        }

        :host a.headline .data,
        :host a .data {
          display: block;
        }

        :host a::after {
          position: absolute;
          content: '';
          left: 50%;
          bottom: -15px;
          display: inline-block;
          width: 50%;
          height: 1px;
          -moz-transform: translateX(-50%);
          -webkit-transform: translateX(-50%);
          -ms-transform: translateX(-50%);
          transform: translateX(-50%);
          background-color: #999;
        }

        :host a.headline::after {
          bottom: -30px;
          width: 100%;
        }

        :host a.last::after {
          display: none;
        }

        :host a.headline {
          margin-bottom: 4rem;
        }

        :host a h3 {
          font-size: 1rem;
        }
      }
    `
  }

  getTemplate(data) {
    return `
      <a href=${this.dataLink} class="${data.className && data.className}">
        ${data.imgsrc && `
          <archive-img
            data-src="${data.imgsrc}",
            data-alt="image ${data.title}",
            data-width="${data.format === 'large' ? '2' : '1'}",
            data-height="${data.format === 'large' ? '1' : '1'}",
            data-layout="${data.format === 'large' ? '' : 'fixed-layout'}"
          ></archive-img>`
        }
        <div class="data">
          <h3>${data.title}</h3>
          <h4>${data.subtitle}</h4>
          <time>${data.date}</time>
        </div>
      </a>
    `
  }
}

customElements.define(COMPONENT_NAME, _PostList)
