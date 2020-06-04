let uploadFile = (file) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let uploadedURL = 'https://imgur.com' + file;
            resolve(uploadedURL)
        },1500)
    })
}

module.exports.uploadFile = uploadFile;