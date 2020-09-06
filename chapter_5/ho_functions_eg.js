// Higher Order Function example

// let labels = [];

// function repeat(n, action) {
//     for (let i = 0; i < n; i++) {
//         action (i);    
//     }
// }

// repeat( 5, i => {
//     labels.push(`unit ${i + 1}`)
// });

// console.log(labels);

// Higher order function creates another function
// function greaterThan(n) {
//     return m => m > n;
// }
// let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11));

// create function noise that changes another function by passing an arg to it
function noise(f) {
    return (...args) => {
        console.log("calling", f, "with", args);
        let result = f(...args);
        console.log("called with", args, "and returned", result);
        return result;
    };
}

console.log(noise(Math.min)(7,8,8,2,1));