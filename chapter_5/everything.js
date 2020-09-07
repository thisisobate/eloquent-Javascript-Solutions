// my solution ..refactored using insights from the code below
// function every(array, test) {
//     for (let element of array) {
//         if (!test(element)) return false;      
//     }
//     return true;
// }

// I copied this code from eloquentjavascript.net/code
function every(array, predicate) {
    for (let element of array) {
      if (!predicate(element)) return false;
    }
    return true;
  }
  
  function every2(array, predicate) {
    return !array.some(element => !predicate(element));
  }

console.log(every([11, 112, 15], n => n > 10));

