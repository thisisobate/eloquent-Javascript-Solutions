// callback functions
setTimeout(() => {
    console.log("Tick")
}, 500);

// promise and failure
new Promise((_, reject) => reject(new Error("Fail")))
.then(value => console.log("Handler 1"))
.catch(reason => { 
    console.log("caught failure "+ reason);
    return "nothing";
})
.then( value => console.log("Handler 2" , value));