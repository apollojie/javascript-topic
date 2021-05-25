/**
 *题意：现有如下三个函数，实现红绿灯三个函数按顺序循环输出。红灯三秒  绿灯一秒 黄灯两秒
 *
 * 考察 promise的链式调用
 * */ 

1. async/await

function red(){
    console.log('red')
}
function green(){
    console.log('green')
}
function yellow(){
    console.log('yellow')
}

function sleep(time){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time)
    })
}

async function walk(){
    await sleep(3000).then(res => red(res))
    // red()
    await sleep(1000).then(res => green(res))
    // green()
    await sleep(2000).then(res => yellow(res))
    // yellow()
    walk()

}
walk()


2. promise链式调用

function red(){
    console.log('red')
}
function green(){
    console.log('green')
}
function yellow(){
    console.log('yellow')
}

function light(time, cb=function(){}){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cb()
            resolve()
        }, time)
    })
}

let queue = [
    { time: 3000, cb: red },
    { time: 1000, cb: green },
    { time: 2000, cb: yellow },
    { time: 0, cb: run }
]

function run(){
    // let sequence = Promise.resolve();
    // let i = 0, len = queue.length, item = null;
    // while(i < len) {
    //     item = queue[i]
    //     i = (++i) % len
    //     sequence = sequence.then(light(item.time, item.cb))
    // }
    // // queue.forEach(item => {
    // //     sequence = sequence.then(light(item.time, item.cb))
    // // })
    queue.reduce((p, n) => {
        return p.then(res => {
            return light(n.time, n.cb)
        })
    }, Promise.resolve())
}
run()