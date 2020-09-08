class Vec {
    constructor (x, y){
        this.x = x;
        this.y = y;
    }
    plus (newVec){
        return `x: ${this.x + newVec.x}, y: ${this.y + newVec.y}`;
    }
    minus (newVec){
        return `x: ${this.x - newVec.x}, y: ${this.y - newVec.y}`;
    }
    get length (){
        return Math.sqrt((this.x**2) + (this.y**2));
    }
}
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
