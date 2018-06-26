
    /** Auto generated module */
    class MetaTagUtil {
      constructor() {
        this.metaMap = new Map();
        this.metaMap.set("/post/20180626", {title:'2018/06/26',subtitle:'今日のやつ',imgsrc:''});this.metaMap.set("/post/20180623", {title:'2018/06/23',subtitle:'今日のやつ',imgsrc:''});this.metaMap.set("/post/20180621", {title:'2018/06/21',subtitle:'今日のやつ',imgsrc:'/img/dist/20180621-02.jpg'});this.metaMap.set("/post/20180614", {title:'2018/06/14',subtitle:'今日のやつ',imgsrc:'/img/dist/20180614-01.jpg'});this.metaMap.set("/post/20180613", {title:'2018/06/13',subtitle:'今日のやつ',imgsrc:'/img/dist/20180613-01.png'});this.metaMap.set("/post/20180610", {title:'2018/06/10',subtitle:'今日のやつ',imgsrc:'/img/dist/20180610-01.jpg'});this.metaMap.set("/post/20180609", {title:'2018/06/09',subtitle:'今日のやつ',imgsrc:'/img/dist/20180609-03.png'});this.metaMap.set("/post/20180608", {title:'2018/06/08',subtitle:'今日のやつ',imgsrc:'/img/noimg.jpg'});this.metaMap.set("/post/20180607", {title:'2018/06/07',subtitle:'今日のやつ',imgsrc:'/img/dist/20180607.jpg'});this.metaMap.set("/post/20180606", {title:'preact-cli でポートフォリオサイトを作った',subtitle:'あとで書く',imgsrc:'/img/dist/20180606-02.png'});this.metaMap.set("/post/20180605", {title:'hello, world!',subtitle:'はじめのごあいさつ',imgsrc:'/img/dist/20180605.jpg'});
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
        <meta name="twitter:image" content="https://archive.hrfmmymt.com${
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
  