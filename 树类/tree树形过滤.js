
const tree ={
        value: '一级1',
        childrens: [
            {
                value: '二级1-2',
                childrens: [
                    {
                        value: '三级1-2-3'
                    }
                ]
            },
            {
                value: '二级2-2',
                childrens: [
                    {
                        value: '三级2-2-3'
                    }
                ]
            }
        ]
    };


// 树的拷贝
function copyTree(tree) {
    let clone = Array.isArray(tree) ? [] : {};
    if(tree && typeof tree==='object') {
        Object.keys(tree).forEach(key => {
            clone[key] = copyTree(tree)
        })
    } else {
        return tree
    }
}
console.log(copyTree(tree))
console.log(data)