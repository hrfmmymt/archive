const fs = require('fs')

const version = `v${Date.now()}`
const scriptTemplate = `
    /** Auto generated module */
    class BuildVersion {
      getVersion() {
        return '${version}'
      }
    }
    module.exports = BuildVersion
  `
fs.writeFileSync('./functions/BuildVersion.js', scriptTemplate)
