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
      }

      h1 {
        font-size: 3rem;
        font-family: 'Poiret One', cursive;
      }

      a {
        text-decoration: none;
      }
    `
  }

  getTemplate(data) {
    const dummy = document.getElementById('dummyHeader')
    if (dummy) dummy.style.display = 'none'
    return `
      <header>
        <h1><a href="/">${data.blogTitle}</a></h1>
      </header>
    `
  }
}

customElements.define(COMPONENT_NAME, GlobalHeader)
