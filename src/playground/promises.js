const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('this is my resolved data');
        reject('sum ting wong!');
    }, 1500)
});

console.log('before')

promise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log('error: ', error)
});

// alternative syntax: 
// (then) can have two arguments

promise.then((data) => {
    console.log(data)
}, (error) => {
    console.log('error: ', error)
});

console.log('after')

