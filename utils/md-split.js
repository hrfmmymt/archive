const fs = require('fs')
const glob = require('glob')
const path = require('path')

glob('public/posts/*.md', (err, files) => {
  const outDir = './public/posts/dist'
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir)
  files.forEach((node, index) => {
    fs.readFile(
      node,
      {
        encoding: 'utf-8'
      },
      (err, data) => {
        const splitData = data.toString().split('---\n')
        const outFileName = path.basename(files[index]).match(/(.+)\.md/)[1]
        fs.writeFile(
          `${outDir}/${outFileName}-1.md`,
          `${splitData[0]}---`,
          'utf8',
          error => {
            if (error) {
              console.log(error)
            }
          }
        )
        fs.writeFile(
          `${outDir}/${outFileName}-2.md`,
          `${splitData[1]}`,
          'utf8',
          error => {
            if (error) {
              console.log(error)
            }
          }
        )
      }
    )
  })
})
