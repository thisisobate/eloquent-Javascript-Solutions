// Using strict
function canYouSpotTheError (){
    "use strict";
    for (let i = 0; i < 100; i++) {
        console.log(i);    
    }
}
console.log(canYouSpotTheError());
// error propagation
function lastElement(array) {
    if (array.length == 0) {
        return {failed: true};
    } else {
        return {element: array[array.length - 1]};
    }
}
console.log(lastElement([]));
// exceptions
function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error ("invalid direction: " + result); 
}
function look() {
    if (promptDirection("Which way?") == "L") {
        return "a house";
    } else {
        return "two angry birds";
    }
}
try {
    console.log("You see", look());
} catch (error) {
    console.log("something went wrong: " + error);
}
// cleaning up after exceptions...use case:bank transaction example
const accounts = {
    a: 3,
    b: 9,
    c: 5
};
function getAccount() {
    let accountName = prompt("Enter an account name");
    if (!accounts.hasOwnProperty(accountName)) {
        throw new Error(`No such account: ${accountName}`);
    }
    return accountName;
}
function transfer(from, amount) {
    if (accounts[from] < amount) return;
        accounts[from] -= amount;
        accounts[getAccount()] += amount;
} 