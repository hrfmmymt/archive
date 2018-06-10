const Jimp = require('jimp')
const glob = require('glob')
const path = require('path')
const dist = path.join(__dirname, '../public/img/dist/')

glob(
  'public/img/raw/*.{jpg,JPG,jpeg,JPEG,png,PNG,gif,GIF}',
  (err, files) => {
    files.map(node => {
      Jimp.read(node)
        .then(image => {
          image
            .exifRotate()
            .resize(700, Jimp.AUTO)
            .quality(80)
            .write(dist + node.match('.+/(.+?)$')[1])
        })
        .catch(err => {
          console.error(err)
        })
    })
  }
)
