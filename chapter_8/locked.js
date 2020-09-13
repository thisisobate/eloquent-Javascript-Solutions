const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };
// my solution  
// function withBoxUnlocked(fn) {
    //unlocks the box
//     do {
//         box.unlock();
//     } while (fn) {
//         box.lock();
//         return fn;
//     }
// }
function withBoxUnlocked(body) {
    let locked = box.locked;
    if (!locked) return body();
    box.unlock();
    try {
        return body();
    } finally {
        box.lock();
    }
  }
withBoxUnlocked(function() {
    box.content.push("gold piece");
  });
try {
withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
});
} catch (e) {
console.log("Error raised: " + e);
}
console.log(box.locked);