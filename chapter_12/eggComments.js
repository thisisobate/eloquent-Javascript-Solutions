// gotten from https://eloquentjavascript.net/code
function skipSpace(string) {
    let skippable = string.match(/^(\s|#.*)*/);
    return string.slice(skippable[0].length);
  }
  