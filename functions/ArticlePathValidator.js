
      /** Auto generated module */
      class ArticlePathValidator {
        constructor(path) {
          this.urlSet = new Set()
          this.urlSet.add('/post/20180523'); this.urlSet.add('/post/0');
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
    