// Fizzbuzz solution
let count = 100;
for (let index = 0; index <= count; index++) {
    console.log((index%3 == 0 && index%5 == 0) ? "fizzbuzz" : (index%3 == 0) ? "fizz" : (index%5 == 0) ? "buzz" : index);   
}