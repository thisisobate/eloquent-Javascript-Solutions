// my solution: I don't even know what I was doing...
// function Promise_all(promises) {
//     return new Promise((resolve, reject) => {
//         reject(new Error("Fail"))
//   .then(result => resolve(result))
//   .catch(reason => {
//     console.log("Caught failure " + reason);
//   })
// });    
// }

function Promise_all(promises) {
    return new Promise((resolve, reject) => {
      let results = [];
      let pending = promises.length;
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(result => {
          results[i] = result;
          pending--;
          if (pending == 0) resolve(results);
        }).catch(reject);
      }
      if (promises.length == 0) resolve(results);
    });
}

// Test code.
Promise_all([]).then(array => {
    console.log("This should be []:", array);
  });