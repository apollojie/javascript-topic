/**
 * 实现一个flat函数，数组拍平
 */

Array.prototype.flat = function(depth){
    let res = [], arr = this;
    for(let item of arr) {
        if(depth) {
            Array.isArray(item) ? res.push(...item.flat(depth - 1)) : res.push(item)
        } else {
            res.push(item)
        }
    }
    return res
}