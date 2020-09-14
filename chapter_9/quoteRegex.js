let text = "This 'Door', said 'Gana', isn't good enough";
let newText = text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2');
console.log(newText);