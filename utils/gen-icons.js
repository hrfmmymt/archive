const Jimp = require('jimp')
const target = 'public/img/icon_512x512.png'
const ext = target.match(/(.*)(?:\.([^.]+$))/)[2]
;[16, 192].map(size => {
  Jimp.read(target)
    .then(image => {
      image.resize(size, size).write(`public/img/icon_${size}x${size}.${ext}`)
    })
    .catch(err => {
      console.error(err)
    })
})
