
      /** Auto generated module */
      class MetaTagUtil {
        constructor() {
          this.metaMap = new Map();
          this.metaMap.set("/post/20180526", {title:'preact-cli でポートフォリオサイトを作った',subtitle:'subtitle',imgsrc:'/img/post/any.jpg'});this.metaMap.set("/post/20180523", {title:'バニラ JS でブログを作ろう！',subtitle:'高収入バニラJS！',imgsrc:'/img/post/1-1.jpg'});this.metaMap.set("/post/0", {title:'トンネルポッポー！',subtitle:'大きな声で、ぽっぽー！',imgsrc:''});
        }
        
        getMetaTag(path) {
          return `
            <meta property="og:title" content="${this.metaMap.get(path).title}" />
            <meta property="og:type" content="" />
            <meta property="og:url" content="${path}" />
            <meta property="og:image" content="weiweiwei${this.metaMap.get(path).imgsrc}" />
            <meta property="og:site_name" content="archive" />
            <meta property="og:description" content="${this.metaMap.get(path).subtitle}" />
            <meta property="fb:app_id" content="" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@hrfmmymt" />
            <meta name="twitter:creator" content="@hrfmmymt" />
            `
        }
      }
      module.exports = MetaTagUtil;
    