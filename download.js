let downloadFile = (url) => {
    return new Promise((resolve,reject) => {
        if(!url.startsWith('http')){
            reject(new Error("URL must start with http"))
        } else {
            console.log("Downloading The File: ",url)
            setTimeout(() => {
                let fileName = url.split("/").pop();
                resolve(fileName)
            },1500)
        }
    });
}

module.exports.downloadFile = downloadFile;
// downloadFile('http://hello.com/logo.png')
// .then((data) => console.log(data))