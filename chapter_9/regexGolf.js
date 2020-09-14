// writing regex to test few edge cases

// regex test for cat, car, prop, pop, ferret, ferry, ferrari
console.log(/\w+/.test("ferrari"));
// Any word ending in ious
console.log(/(ious)\b/.test("carious"));
// A whitespace character followed by a period, comma, colon, or semicolon
console.log(/\s|\.|\,|\:|\;/.test(";"));
// A word longer than six words
console.log(/\w{6,}/.test("carusu"));
// A word without letter e
console.log(/\b[^\We]+\b/i.test("hhsd"));