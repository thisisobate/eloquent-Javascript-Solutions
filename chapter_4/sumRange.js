// print range of numbers
function range(numA, numB, step = numA < numB ? 1 : -1) {
    let rangeBox = [];
    if (step > 0){
        for (numA; numA <= numB; numA+=step) {
            rangeBox.push(numA);
        }
    } else {
        for (numA; numA >= numB; numA+=step) {
            rangeBox.push(numA);
        }
    }
    return rangeBox;
}

console.log(range(30, 10, -2));
// sum all numbers in array
function sum(array) {
    let newSum = 0;
    for (let i = 0; i < array.length; i++) {
        newSum += array[i];    
    }
    return newSum;
}

console.log(sum(range(1, 10)));