const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('This is my resolved data');   
    },1500);
});

promise.then((res) => {
    console.log('1',res);
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Something else');   
        },1500);
    });
}).then((res) => {
    console.log('does this run?', res);
}).catch((err) => {
    console.log(err);
});
