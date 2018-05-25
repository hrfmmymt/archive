import { App } from './App.js'
import { _Img } from './Img.js'

const COMPONENT_NAME = 'global-header'
export class GlobalHeader extends App {
  getComponentName() {
    return COMPONENT_NAME
  }

  connectedCallback() {
    const data = {
      blogTitle: 'archive',
      name: 'hrfmmymt'
    }
    super.render(data)
  }

  getStyle() {
    return `
      :host {
        margin:0 auto;
        cursor: pointer;
      }
    `
  }

  getTemplate(data) {
    const dummy = document.getElementById('dummyHeader')
    if (dummy) dummy.style.display = 'none'
    return `
      <header>
        <h1><a href="/">${data.blogTitle}</a></h1>
        <div class="header-profile">
          <div class="profile-description">
            <div class="name">${data.name}</div>
          </div>
        </div>
      </header>
    `
  }
}

customElements.define(COMPONENT_NAME, GlobalHeader)
