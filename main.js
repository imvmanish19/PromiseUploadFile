const download = require('./download')
const resize = require('./resize')

download.downloadFile('http://hello.com/elephant.png')
.then((fileName) => {
    console.log("Downloaded File:",fileName)
    resize.resizeFile(fileName)
    .then((data) => {
        console.log("Resized Image:",data)
    })
})