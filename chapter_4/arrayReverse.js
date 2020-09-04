// function for reverse array
function reverseArray(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.unshift(array[i]);    
    }
    return newArray;
}

console.log(reverseArray([3,2,4,5,5,1,4]));

// Function for reversing array in place
// algo: front index take back index values, back index take front
// index values
function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length/2); i++) {
        let oldIndexValue = array[i];
        array[i] = array[(array.length - 1) - i];
        array[(array.length - 1) - i] = oldIndexValue;
    } 
    return array;
}

console.log(reverseArrayInPlace([2,5,9,9,0,3,4]));