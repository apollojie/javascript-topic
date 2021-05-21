一、编程题

1. js判断一组数字是否连续（百词斩笔试题）。例如：
[1,2,3,4,6,8,9,10]; // 期望结果：['1-4', 6, '8-10']

2. 将一个数组，连续重复的字符，分割成若干个数组（腾讯编程题）。例如 ：
[1,1,1,1,2,3,3,3,3,4,4] // 期望结果： [ [1,1,1,1], [3,3,3,3], [4,4] ]


二、解析
题1和2中的关键信息是“连续”条件，不同的是题1判断数组元素连续递增，题2判断数组连续重复，因此对于题1我们的连续条件则是 (i + 1) - i === 1。而题2的连续条件则是（i+ 1）=== i。当出现不连续的元素，如何统计连续元素的头尾？使用gap统计连续个数会避免繁杂的判断。使用（i 和 j 或i 和 i + 1） 两个变量来标记头尾会增加额外的判断以及增大bug的可能性。

题1：

var arr = [2,3,4,7,8,9,10,13,15,16,17,18,1,-1,0,1,2,3,4]
    function arrange(arr){
        let len = arr.length,
            gap = 0,
            str = '',
            res = [];

        for(let i = 0; i < len; i++) {
            if(arr[i+1] - arr[i] === 1) {
                gap++
            } else {
                str = gap ? `${arr[i-gap]}-${arr[i]}` : arr[i]
                gap = 0
                res.push(str)
            }
        }
        return res
    }
    arrange(arr)


题2：

function create(arr){
    let res = [];
    let i = 0, len = arr.length,gap = 0;

    while( i < len) {
        if(arr[i+1] === arr[i]) {
            ++gap
        } else {
            if(gap) {
                let slice = arr.slice(i - gap - 1, i)
                res.push(slice)
                gap = 0
            }
        }
        i++
    }
    return gap
}
create([1,1,1,1,2,3,3,3,3,4,4])


