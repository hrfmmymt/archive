const Jimp = require('jimp')
const glob = require('glob')

glob('public/img/raw/*.{jpg,png,gif}', (err, files) => {
  files.map(node => {
    Jimp.read(node)
      .then(image => {
        image.resize(700, Jimp.AUTO).write(node)
      })
      .catch(err => {
        console.error(err)
      })
  })
})
