
    /** Auto generated module */
    class PostPathValidator {
      constructor(path) {
        this.urlSet = new Set()
        this.urlSet.add('/post/20180623'); this.urlSet.add('/post/20180621'); this.urlSet.add('/post/20180614'); this.urlSet.add('/post/20180613'); this.urlSet.add('/post/20180610'); this.urlSet.add('/post/20180609'); this.urlSet.add('/post/20180608'); this.urlSet.add('/post/20180607'); this.urlSet.add('/post/20180606'); this.urlSet.add('/post/20180605');
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
  