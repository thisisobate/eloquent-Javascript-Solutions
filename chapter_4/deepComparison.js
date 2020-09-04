let objA = {
    name: "emma",
    age: 12
};
let objB = {
    name: "emma",
    age: 12
};

let objC = objB

// function deepEqual(numA, numB) {
//     while ( (typeof(numA, numB) == "number") || ( (typeof(numA, numB) == "object") && ((numA, numB) != null) ) ) {
//         if (numA === numB) {
//             return "true";
//         } else if (Object.keys(numA) === Object.keys(numB)) {
//             if (numA.length == numB.length) {
//                 return "true"
//             } else {
//                 return deepEqual(numA, numB);
//             }
//         } else {
//             return "false";
//         }
//     };
// }

// couldn't find an efficient solution so I copied solution from eloquentjavascript.net/code
function deepEqual(a, b) {
    if (a === b) return true;
    
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;
  
    let keysA = Object.keys(a), keysB = Object.keys(b);
  
    if (keysA.length != keysB.length) return false;
  
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
  
    return true;
  }

console.log(deepEqual(objA, objB));
console.log(typeof({}));