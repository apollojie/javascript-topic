sku组合算法
const sku = 'ABCDEF12'
var specList = [
    ['red', 'blue',],
    ['XL', 'S'],
    ['a1', 'a2'],
    ['b1', 'b2']
]

实现输出：
/*** 
sku-red-xl-a1-b1
sku-red-xl-a1-b2
sku-red-xl-a2-b1
sku-red-xl-a2-b2

sku-red-s-a1-b1
sku-red-s-a1-b2
sku-red-s-a2-b1
sku-red-s-a2-b2

sku-blue-xl-a1-b1
sku-blue-xl-a1-b2
sku-blue-xl-a2-b1
sku-blue-xl-a2-b2

sku-blue-s-a1-b1
sku-blue-s-a1-b2
sku-blue-s-a2-b1
sku-blue-s-a2-b2

 */
const sku = 'ABCDEF12'
var specList = [
    ['red', 'blue'],
    ['XL', 'S'],
    ['a1', 'a2'],
    ['b1', 'b2']
]
function compose(sku1, sku2) {
    let [arr1, ...arr2] = sku1.map(sku => sku2.map(ssku => `${sku}-${ssku}`))
    return arr1.concat(...arr2)
}

function generateSku(skuList, sku) {
    let [colorSku, sizeSku] = skuList.slice(0,2)
    let [codeSku1, codeSku2] = skuList.slice(2,4)
    return compose(compose(colorSku, sizeSku),compose(codeSku1, codeSku2)).map(skus => `${sku}-${skus}`)
}
generateSku(specList, sku)