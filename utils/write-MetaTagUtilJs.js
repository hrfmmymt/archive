const fs = require('fs')

fs.readFile('./public/json/posts.json', function(error, data) {
  const postList = JSON.parse(data.toString()).posts
  const render = (strings, postList) => {
    const operations = []
    postList.map(data => {
      operations.push(
        `this.metaMap.set("${data.link}", {title:'${data.title}',subtitle:'${
          data.subtitle
        }',imgsrc:'${data.imgsrc}'});`
      )
    })
    return `${strings[0]}${operations.join('')}${strings[1]}`
  }

  const scriptTemplate = render`
      /** Auto generated module */
      class MetaTagUtil {
        constructor() {
          this.metaMap = new Map();
          ${postList}
        }
        
        getMetaTag(path) {
          return \`
            <meta property="og:title" content="\$\{this.metaMap.get(path).title\}" />
            <meta property="og:type" content="" />
            <meta property="og:url" content="\$\{path\}" />
            <meta property="og:image" content="weiweiwei\$\{this.metaMap.get(path).imgsrc\}" />
            <meta property="og:site_name" content="archive" />
            <meta property="og:description" content="\$\{this.metaMap.get(path).subtitle\}" />
            <meta property="fb:app_id" content="" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@hrfmmymt" />
            <meta name="twitter:creator" content="@hrfmmymt" />
            \`
        }
      }
      module.exports = MetaTagUtil;
    `
  fs.writeFileSync('./functions/MetaTagUtil.js', scriptTemplate)
})
