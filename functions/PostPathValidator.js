
      /** Auto generated module */
      class PostPathValidator {
        constructor(path) {
          this.urlSet = new Set()
          this.urlSet.add('/post/20180606'); this.urlSet.add('/post/20180605');
          this.path = path
        }
        isValid() {
          return this.urlSet.has(this.path)
        }
        getAllPathSet() {
          return this.urlSet
        }
      }
      module.exports = PostPathValidator
    