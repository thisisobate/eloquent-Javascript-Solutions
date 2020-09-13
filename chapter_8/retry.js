// my solution
// function primitiveMultiply(question) {
//     let value1 = prompt("Enter first value");
//     let value2 = prompt("Enter second value");
//     if (Number.isNaN(value1) && Number.isNaN(value2)){ 
//         throw new Error("multiplicatorUnitFailure");
//     } else {     
//         return value1 * value2;
//     } 
// }
// function keepTrying(q) {
//     for (;;) {
//         try {
//             primitiveMultiply(q);
//             break;
//         } catch (error) {
//             console.log("Not valid. Try again");
//         }
//     }
// }
// console.log(keepTrying(8, 8));
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  // Your code here.
  for (;;) {
            try {
                return primitiveMultiply(a, b);
            } catch (e) {
                if (!(e instanceof MultiplicatorUnitFailure))
                    throw e;    
            }
        }

}

console.log(reliableMultiply(8, 8));