let resizeFile = (file) => {
    return new Promise((resolve,reject) => {
        if(!file.endsWith('png')){
            reject(new Error("file must be png"))
        } else {
            setTimeout(() => {
                console.log("Resizing The File")
                let fileName = file.split('.')[0] + '-resized.png';
                resolve(fileName)
            },1500)
        }
    });
}

module.exports.resizeFile = resizeFile;
// resizeFile('logo.png')
// .then((data) => console.log(data))