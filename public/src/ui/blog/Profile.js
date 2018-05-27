import { App } from './App.js'

const COMPONENT_NAME = 'my-profile'
export class Profile extends App {
  getComponentName() {
    return COMPONENT_NAME
  }

  connectedCallback() {
    const data = {
      name: 'hrfmmymt'
    }
    super.render(data)
  }

  getStyle() {
    return `
      :host {
        background-color: #f8f9fa;
      }
    `
  }

  getTemplate(data) {
    return `
      <section>
        <h2>profile</h2>
        i'm ${data.name}
      </section>
    `
  }
}
customElements.define(COMPONENT_NAME, Profile)
