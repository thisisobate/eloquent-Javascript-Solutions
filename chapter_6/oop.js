// illustration of how 'this' keyword works
function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

console.log(whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting"));

// example of a object prototype 
let protoRabbit = {
    speak(line){
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "Killer";
console.log(killerRabbit.speak("SKREEEE!"));

//example of a class with respect to class prototypes...
//inotherwords, this is an example of a constructor function
function Rabbit(type) {
    this.type = type;
}
Rabbit.prototype.speak = function (line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
};
let weirdRabbit = new Rabbit("weird");

//illustration of a class notation...made creation of constructors easier
class Rabbit {
    constructor(type){
        this.type = type;
    }
    speak(line){
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let dumbRabbit = new Rabbit("dumb");
let blueRabbit = new Rabbit("blue");

//Illustration of a class called Map
let ages = new Map();
ages.set("Boris", 39);
ages.set("jarvis", 24);
ages.set("kelv", 43);
ages.set("kent", 20);
console.log(`Julia is ${ages.get("jarvis")}`);
//Illustration of an instanceof binary operator
console.log([3] instanceof Object);