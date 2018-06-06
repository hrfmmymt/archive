
    /** Auto generated module */
    class MetaTagUtil {
      constructor() {
        this.metaMap = new Map();
        this.metaMap.set("/post/20180606", {title:'preact-cli でポートフォリオサイトを作った',subtitle:'あとで書く',imgsrc:'/img/dist/20180606.png'});this.metaMap.set("/post/20180605", {title:'hello, world!',subtitle:'はじめのごあいさつ',imgsrc:'/img/dist/20180605.jpg'});
      }

      getMetaTag(path) {
        return `
        <meta name="description" content="${
          this.metaMap.get(path).subtitle
        }">
        <meta property="og:title" content="${this.metaMap.get(path).title}">
        <meta property="og:description" content="${
          this.metaMap.get(path).subtitle
        }">
        <meta property="og:url" content="${path}">
        <meta property="og:type" content="website">
        <meta property="og:locale" content="ja_JP">
        <meta property="og:image" content="${
          this.metaMap.get(path).imgsrc
        }">
        <meta name="twitter:title" content="${
          this.metaMap.get(path).title
        } | archive">
        <meta name="twitter:description" content="${
          this.metaMap.get(path).subtitle
        } | archive">
        <meta name="twitter:image" content="${
          this.metaMap.get(path).imgsrc
        }">
        <meta name="twitter:card" content="summary">
        <meta name="twitter:site" content="@hrfmmymt">
        <title>${
          this.metaMap.get(path).title
        } | archive - hrfmmymt&#39;s blog</title>
        `
      }
    }
    module.exports = MetaTagUtil
  