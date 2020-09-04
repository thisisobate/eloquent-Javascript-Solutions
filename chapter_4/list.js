// // illustration of a list using objects.
// let list = {
//     value : 1,
//     rest : {
//         value : 2,
//         rest : {
//             value : 3,
//             rest : null
//         }
//     }
// };

// let value1 = {
//     value : 0,
//     rest : list
// }

// I couldn't solve this problem myself: was a bit tough for me
// I copied this solution from elquentjavascript.net/code

// arrayList function

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
}

console.log(arrayToList([3, 4, 5, 3, 2]));

// List to array function
function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    return array;
  }
  
  // prepend value at top/front 
  function prepend(value, list) {
    return {value, rest: list};
  }
  
  // print index value in list
  function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }
  