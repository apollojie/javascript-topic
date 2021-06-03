var tree = {
    value: '一级',
    childrens: [
        {
            value: '二级-1',
            childrens: [
                {
                    value:'三级-1',
                    childrens: [
                        { value: '四级-1'},
                        { value: '四级-2'}
                    ]
                },
                {
                    value:'三级-2',
                }
            ]
        },
        {
            value: '二级-2'
        }
    ]
}


// 树的深拷贝
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

/**
 * element-ui中tree树形组件过滤
 */


var value='-1'
function filterMethod(value, source) {
    return source.value.indexOf(value) > -1
}

/**
 * 本题中tree的遍历使用dfs深度优先，执行顺序与koa-compose洋葱模型类似。
 * 如果对dfs执行顺序不理解，可以放开console语句在控制台查看打印结果
 */
function traverse(node) {
    let childrens = node.childrens || [];
    node.visible = filterMethod(value, node)
    let childFilter = []
    //console.log('traverse--执行顺序', node)
    // 树形遍历
    childrens.forEach(child => {
        child.visible = filterMethod(value, child)
        let result = traverse(child)
        if(result) {
            childFilter.push(result);
            node.childrens = childFilter
        }
    })
    // filter返回满足条件的child
    if(!node.visible && !(node.childrens || node.childrens.length)) {
        return false
    } else {
        return node
    }
    
}
// 修改深拷贝树，避免直接对原来的tree数据进行修改
traverse(copyTree(tree))