import { App } from './App.js'

const COMPONENT_NAME = 'global-footer'
export class GlobalFooter extends App {
  getComponentName() {
    return COMPONENT_NAME
  }

  connectedCallback() {
    const data = {
      name: 'hrfmmymt',
      img: '/img/profile.jpg'
    }
    super.render(data)
  }

  getStyle() {
    return `
      :host {
        display: block;
        background-color: #f8f9fa;
        padding: 2%;
      }

      :host footer {
        display: flex;
      }

      :host .profile-img {
        max-width: 700px;
        margin-right: 2%;
      }
    `
  }

  getTemplate(data) {
    return `<footer>
              <archive-img class="profile-img" data-src="${
                data.img
              }" data-background-color="transparent"></archive-img>
              <section>
                <h3>i'm ${data.name}</h3>
                <ul>
                  <li>
                    <a href="hrfmmymt.github.io">website</a>
                  </li>
                  <li>
                    <a href="hrfmmymt.com">portfolio</a>
                  </li>
                  <li>
                    <a href="https://twitter.com/hrfmmymt">Twitter</a>
                  </li>
                  <li>
                    <a href="https://github.com/hrfmmymt">GitHub</a>
                  </li>
                  <li>
                    <a href="mailto:hrfmmymt@gmail.com">hrfmmymt@gmail.com</a>
                  </li>
                </ul>
              </section>
            </footer>`
  }
}
customElements.define(COMPONENT_NAME, GlobalFooter)
