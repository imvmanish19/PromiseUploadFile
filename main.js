const download = require('./download')
const resize = require('./resize')
const upload = require('./upload')


download.downloadFile('https://hello.com/elephant.png')
.then(resize.resizeFile)
.then(upload.uploadFile)
.then((fileName) => {
    console.log("Uploaded File at",fileName)
})
.catch(err => {
    console.error(err)
})