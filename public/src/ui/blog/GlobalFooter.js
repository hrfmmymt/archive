import { App } from './App.js'

const COMPONENT_NAME = 'global-footer'
export class GlobalFooter extends App {
  getComponentName() {
    return COMPONENT_NAME
  }

  connectedCallback() {
    const data = {
      name: 'hrfmmymt',
      img: '/img/profile.jpg',
      twSrc: '/img/twitter.svg',
      twAlt: 'twitter',
      ghSrc: '/img/github.svg',
      ghAlt: 'GitHub',
      mlSrc: '/img/mail.svg',
      mlAlt: 'mail'
    }
    super.render(data)
  }

  getStyle() {
    return `
      :host {
        display: block;
        background-color: #f8f9fa;
        padding: 2%;
        margin-top: 4%;
      }

      :host footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1280px;
        margin: 0 auto;
      }

      :host .link-top li {
        margin-left: 1rem;
      }

      :host .link-top li:first-child {
        margin-left: 0;
      }

      :host .link-top a {
        width: 2.5rem;
      }

      :host ul {
        margin: 0;
        padding: 0;
      }

      :host li {
        list-style-type: none;
      }

      :host section {
        color: #333;
        text-align: center;
      }

      :host h2 {
        margin: 0;
        font-size: 3rem;
        font-family: 'Give You Glory', cursive;
        cursor: default;
      }

      :host .link-top li {
        display: inline-block;
        vertical-align: middle;
      }

      :host a {
        display: block;
        text-decoration: none;
        color: #000;
      }

      :host .link-bottom {
        display: flex;
        justify-content: space-around;
      }

      :host .link-bottom ul li {
        margin-left: 2rem;
      }

      /* for mobile */
      @media (max-width: 414px) {
        :host footer {
          display: block;
        }

        :host section {
          margin-bottom: 1rem;
        }

        :host .link {
          text-align: center;
        }

        :host .link-top {
          margin-bottom: .5rem;
        }

        :host .link-bottom {
          display: block;
        }

        :host .link-bottom li {
          display: inline-block;
        }
      }
    `
  }

  getTemplate(data) {
    return `<footer>
              <section>
                <h2># archive</h2>
                <small>by hrfmmymt</small>
              </section>
              <div class="link">
                <ul class="link-top">
                  <li>
                    <a href="https://twitter.com/hrfmmymt" target="_blank" rel="noopener noreferrer">
                      <archive-img
                        data-src="${data.twSrc}",
                        data-alt="image ${data.twAlt}"
                      ></archive-img>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/hrfmmymt" target="_blank" rel="noopener noreferrer">
                      <archive-img
                        data-src="${data.ghSrc}",
                        data-alt="image ${data.ghAlt}"
                      ></archive-img>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hrfmmymt@gmail.com">
                      <archive-img
                        data-src="${data.mlSrc}",
                        data-alt="image ${data.mlAlt}"
                      ></archive-img>
                    </a>
                  </li>
                </ul>
                <ul class="link-bottom">
                  <li>
                    <a href="https://hrfmmymt.github.io" target="_blank" rel="noopener noreferrer">website</a>
                  </li>
                  <li>
                    <a href="https://hrfmmymt.com" target="_blank" rel="noopener noreferrer">portfolio</a>
                  </li>
                </ul>
              </div>
            </footer>`
  }
}
customElements.define(COMPONENT_NAME, GlobalFooter)
