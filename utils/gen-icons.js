const Jimp = require('jimp')
const target = 'public/img/icon_1024x1024.jpg'
const ext = target.match(/(.*)(?:\.([^.]+$))/)[2]
;[16, 96, 128, 192, 384, 512].map(size => {
  Jimp.read(target)
    .then(image => {
      image.resize(size, size).write(`public/img/icon_${size}x${size}.${ext}`)
    })
    .catch(err => {
      console.error(err)
    })
})
