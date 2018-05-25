const fs = require('fs')

fs.readFile('./public/json/posts.json', function(error, data) {
  const postList = JSON.parse(data.toString()).posts
  const render = (strings, postList) => {
    const urlSet = new Set()
    postList.map(data => urlSet.add(data.link))
    const operations = []
    Array.from(urlSet.values()).map(url =>
      operations.push(`this.urlSet.add('${url}');`)
    )
    return `${strings[0]}${operations.join(' ')}${strings[1]}`
  }
  const scriptTemplate = render`
      /** Auto generated module */
      class ArticlePathValidator {
        constructor(path) {
          this.urlSet = new Set()
          ${postList}
          this.path = path
        }
        isValid() {
          return this.urlSet.has(this.path)
        }
        getAllPathSet() {
          return this.urlSet
        }
      }
      module.exports = ArticlePathValidator
    `
  fs.writeFileSync('./functions/ArticlePathValidator.js', scriptTemplate)
})
