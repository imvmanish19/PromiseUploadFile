let resizeFile = (file) => {
    return new Promise((resolve,reject) => {
        if(!file.endsWith('png')){
            reject(new Error("file must be png"))
        } else {
            console.log("Resizing The File:",file)
            setTimeout(() => {
                let fileName = file.split('.')[0] + '-resized.png';
                resolve(fileName)
            },1500)
        }
    });
}

module.exports.resizeFile = resizeFile;
// resizeFile('logo.png')
// .then((data) => console.log(data))