// code for flattening an array of arrays
function flatten(array) {
        return array.reduce((a,b) => a.concat(b)); 
}
let arrayContainer = [[1,3,5],[4,5,6],[4,8,0]];
console.log(flatten(arrayContainer));