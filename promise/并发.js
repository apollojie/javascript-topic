var urls = [
    'https://www.kkkk1000.com/images/getImgData/getImgDatadata.jpg', 
    'https://www.kkkk1000.com/images/getImgData/gray.gif', 
    'https://www.kkkk1000.com/images/getImgData/Particle.gif', 
    'https://www.kkkk1000.com/images/getImgData/arithmetic.png', 
    'https://www.kkkk1000.com/images/getImgData/arithmetic2.gif', 
    'https://www.kkkk1000.com/images/getImgData/getImgDataError.jpg', 
    'https://www.kkkk1000.com/images/getImgData/arithmetic.gif', 
    'https://user-gold-cdn.xitu.io/2018/10/29/166be40ccc434be0?w=600&h=342&f=png&s=122185'
];

function loadImg(url) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = function () {
            console.log('一张图片加载完成',url);
            resolve();
        }
        img.onerror = reject
        img.src = url
    })
};



var loads = function (limit) {
    var sequence = [].concat(urls);
    var promises = sequence.splice(0, limit).map((url, index) => {
        return loadImg(url).then(() => {
            return index
        })
    })
    return sequence.reduce((p,url,curIndex) => {
        return p.then(() => Promise.race(promises)).then(index => {
            // console.log("每一次是什么值", index, url)
            promises[index] = loadImg(url).then(() => {
                return index
            })
        })
    }, Promise.resolve())
}
loads(3)


