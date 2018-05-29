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
      twAlt: "twitter"
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

      :host footer {
        display: flex;
        max-width: 1280px;
        margin: 0 auto;
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
    `;
  }

  getTemplate(data) {
    return `<footer>
              <section>
                <h2>archive</h2>
                <p>by hrfmmymt</p>
              </section>
              <ul>
                <li>
                  <a href="https://hrfmmymt.github.io">website</a>
                </li>
                <li>
                  <a href="https://hrfmmymt.com">portfolio</a>
                </li>
                <li>
                  <archive-img
                    data-src="${data.twSrc}",
                    data-alt="image ${data.twAlt}"
                  ><a href="https://twitter.com/hrfmmymt">Twitter</a></archive-img>
                </li>
                <li>
                  <a href="https://github.com/hrfmmymt">GitHub</a>
                </li>
                <li>
                  <a href="mailto:hrfmmymt@gmail.com">hrfmmymt@gmail.com</a>
                </li>
              </ul>
            </footer>`;
  }
}
customElements.define(COMPONENT_NAME, GlobalFooter);
