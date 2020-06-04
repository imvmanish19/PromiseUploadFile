const download = require('./download')
const resize = require('./resize')
const upload = require('./upload')


Promise.all([
    download.downloadFile('https://hello.com/logo.png'),
    download.downloadFile('https://hello.com/cblk.png'),
    download.downloadFile('https://hello.com/codingblocks.png')
]).then((values) => {
    return Promise.all(values.map(resize.resizeFile))
})
.then((uploadValues) => {
    return Promise.all(uploadValues.map(upload.uploadFile))
})
.then((data) => {
    console.log(data)
})