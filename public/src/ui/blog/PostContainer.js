import { _PostList } from './PostList.js'
import { App } from './App.js'

const COMPONENT_NAME = 'post-container'
export class PostContainer extends App {
  getComponentName() {
    return COMPONENT_NAME
  }

  connectedCallback() {
    super.render()
  }

  getStyle() {
    return `
      :host {
      }
    `
  }

  getTemplate() {
    return this.fetchPostContainer()
  }

  fetchPostContainer() {
    return new Promise(resolve => {
      fetch('/json/posts.json', { credentials: 'include' }).then(res => {
        res.json().then(json => {
          const postList = []
          json.posts.forEach(post => {
            const template = `<post-list
              data-format="${
                post.format
              }"
              data-title="${
                post.title
              }"
              data-subtitle="${
                post.subtitle
              }"
              data-date="${post.date}"
              data-link="${post.link}"
              data-imgsrc="${
                post.imgsrc
              }">
            </post-list>`
            postList.push(template)
          })
          const dummy = document.getElementById('dummyBody')
          if (dummy) dummy.style.display = 'none'
          resolve(`
            <section>
              <h2>posts</h2>
              <div class="list">
                ${postList.join('')}
              </div>
            </section>
          `)
        })
      })
    })
  }
}

customElements.define(COMPONENT_NAME, PostContainer)
