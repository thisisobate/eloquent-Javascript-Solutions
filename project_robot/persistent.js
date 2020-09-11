// Got insights from eloquentjavascript.net/code
class PGroup {
    constructor (members){
        this.members = members;
    }
    add (value){
        if (this.has(value)) return this;
        return new PGroup(this.members.concat([value]));
    }
    delete (value){
        if (!this.has(value)) return this;
        return new PGroup(this.members.filter(m => m !== value ));
    }
    has (value){
        return this.members.includes(value);
    }
}

PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));