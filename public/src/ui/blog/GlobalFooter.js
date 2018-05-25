import { App } from './App.js'

const COMPONENT_NAME = 'global-footer'
export class GlobalFooter extends App {
  getComponentName() {
    return COMPONENT_NAME
  }

  connectedCallback() {
    super.render()
  }

  getStyle() {
    return
  }

  getTemplate() {
    return `<footer>global footer</footer>`
  }
}
customElements.define(COMPONENT_NAME, GlobalFooter)
