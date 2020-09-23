// my solution: I don't even know what I am doing here..
// async function locateScalpel (nest){
//     for (let member of nest) {
//         member.storage.scapel = await member.storage("scapel", value);
//         if (member.storage.scapel == value) return member;
//     }
//     throw new Error("not found!"); 
// }

// function locateScapel2(nest) {
    
// }

// gotten from https://eloquentjavascript.net/code/
async function locateScalpel(nest) {
    let current = nest.name;
    for (;;) {
      let next = await anyStorage(nest, current, "scalpel");
      if (next == current) return current;
      current = next;
    }
  }
  
  function locateScalpel2(nest) {
    function loop(current) {
      return anyStorage(nest, current, "scalpel").then(next => {
        if (next == current) return current;
        else return loop(next);
      });
    }
    return loop(nest.name);
  }

locateScalpel(bigOak).then(console.log);