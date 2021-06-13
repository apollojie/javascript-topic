1、值穿透

    Promise.resolve(1).then(2).then(console.log).then(res => {
        console.log('eee', res)
    }).catch(err => {
        console.log('catch', err)
    })

2、resolve外放（笔者自己方便理解）。来源于axios取消ajax的实现。

    function CancelToken(excutor) {
        let resolvePromise = null
        this.promise = new Promise((resolve, reject) => {
            resolvePromise = resolve
        })
        excutor(function(){
            resolvePromise()
        })
    }

    CancelToken.source = function(){
        let cancel = null;
        let token = new CancelToken(function excutor(c) {
            cancel = c
        })

        return {
            token,
            cancel
        }
    }



