// Got some insights from eloquentjavascript.net/code
class Group {
    constructor (){
        this.group = [];
    }
    add (value){
        if (!this.group.includes(value)) {
            this.group.push(value); 
        }
    }
    delete(value){
        if (this.group.includes(value)) {
            this.group = this.group.filter(v => v !== value); 
        }
    }
    has (value){
        if (this.group.includes(value)) {
            return true; 
        } else {
            return false;
        }
    }
    static from(collection) {
        let group = new Group;
        for (let value of collection) {
          group.add(value);
        }
        return group;
      }
}
let groupie = Group.from([10, 20]);
console.log(groupie.has(10));