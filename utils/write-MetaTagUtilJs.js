const fs = require('fs')

fs.readFile('./public/json/posts.json', (error, data) => {
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
        <meta name="description" content="\$\{
          this.metaMap.get(path).subtitle
        \}">
        <meta property="og:title" content="\$\{this.metaMap.get(path).title\}">
        <meta property="og:description" content="\$\{
          this.metaMap.get(path).subtitle
        \}">
        <meta property="og:url" content="\$\{path\}">
        <meta property="og:type" content="website">
        <meta property="og:locale" content="ja_JP">
        <meta property="og:image" content="\$\{
          this.metaMap.get(path).imgsrc
        \}">
        <meta name="twitter:title" content="\$\{
          this.metaMap.get(path).title
        \} \| archive">
        <meta name="twitter:description" content="\$\{
          this.metaMap.get(path).subtitle
        \} | archive">
        <meta name="twitter:image" content="\$\{
          this.metaMap.get(path).imgsrc
        \}">
        <meta name="twitter:card" content="summary">
        <meta name="twitter:site" content="@hrfmmymt">
        <title>\$\{
          this.metaMap.get(path).title
        \} \| archive - hrfmmymt&#39;s blog</title>
        \`
      }
    }
    module.exports = MetaTagUtil
  `
  fs.writeFileSync('./functions/MetaTagUtil.js', scriptTemplate)
})
