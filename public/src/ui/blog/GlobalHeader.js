import { App } from './App.js'
import { _Img } from './Img.js'

const COMPONENT_NAME = 'global-header'
export class GlobalHeader extends App {
  getComponentName() {
    return COMPONENT_NAME
  }

  connectedCallback() {
    const data = {
      blogTitle: 'archive'
    }
    super.render(data)
  }

  getStyle() {
    return `
      :host {
        display: block;
        margin: 2% 0 4%;
      }

      :host h1 {
        font-size: 3rem;
        font-family: 'Give You Glory', cursive;
        font-weight: 800;
      }

      :host a {
        color: #000;
        text-decoration: none;
      }

      /* for mobile */
      @media (max-width: 414px) {
        :host {
          margin-bottom: 6%;
        }

        :host header {
          text-align: center;
        }

        :host h1 {
          margin-bottom: 1rem;
        }
      }
    `
  }

  getTemplate(data) {
    const dummy = document.getElementById('dummyHeader')
    if (dummy) dummy.style.display = 'none'
    return `
      <header>
        <h1><a href="/"># ${data.blogTitle}</a></h1>
      </header>
    `
  }
}

customElements.define(COMPONENT_NAME, GlobalHeader)
