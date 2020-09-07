// My solution...got some inspiration from the code below inorder to make it work well

// function loop(value, test, update, body) {
//     for (let i = value; i > 0; i = update(i)) {
//             if (test(i) == "false") {
//                 break;
//             } else {
//             body(i);
//             } 
//     }  
// }

// I copied this solution from eloquentjavascript.net/code
function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
        body(value);    
    }
}

console.log(loop(3, n => n > 0, n => n - 1, console.log));
