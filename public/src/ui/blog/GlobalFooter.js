import { App } from "./App.js";

const COMPONENT_NAME = "global-footer";
export class GlobalFooter extends App {
  getComponentName() {
    return COMPONENT_NAME;
  }

  connectedCallback() {
    const data = {
      name: "hrfmmymt",
      img: "/img/profile.jpg",
      twSrc: "/img/twitter.svg",
      twAlt: "twitter",
      ghSrc: "/img/github.svg",
      ghAlt: "GitHub",
      mlSrc: "/img/mail.svg",
      mlAlt: "mail"
    };
    super.render(data);
  }

  getStyle() {
    return `
      :host {
        display: block;
        background-color: #f8f9fa;
        padding: 2%;
        margin-top: 4%;
      }

      :host .footer-top {
        display: flex;
        justify-content: space-between;
        max-width: 1280px;
        margin: 0 auto;
      }

      :host .footer-top li {
        margin-left: 1rem;
      }

      :host .footer-top a {
        width: 2.5rem;
      }

      :host ul {
        margin: 0;
      }

      :host section {
        color: #333;
      }

      :host h2 {
        margin: 0;
        font-size: 3rem;
        font-family: 'Poiret One', cursive;
        cursor: default;
      }

      :host li {
        display: inline-block;
        vertical-align: middle;
        list-style-type: none;
      }

      :host a {
        display: block;
        text-decoration: none;
        color: #000;
      }

      :host .footer-bottom {
        display: flex;
        justify-content: flex-end;
      }

      :host .footer-bottom li {
        margin-left: 2rem;
      }
    `;
  }

  getTemplate(data) {
    return `<footer>
              <div class="footer-top">
                <section>
                  <h2>archive</h2>
                </section>
                <ul>
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
              </div>
              <ul class="footer-bottom">
                <li>
                  <a href="https://hrfmmymt.github.io">website</a>
                </li>
                <li>
                  <a href="https://hrfmmymt.com">portfolio</a>
                </li>
              </ul>
            </footer>`;
  }
}
customElements.define(COMPONENT_NAME, GlobalFooter);
