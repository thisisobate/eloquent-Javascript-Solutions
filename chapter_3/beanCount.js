// function countBs(word) {
//     let bCount = 0;
//     for (let index = 0; index < word.length; index++) {
//         if (word[index] == "B") {
//             bCount ++;   
//         }
//     }
//     return bCount; 
// }

// console.log(countBs("BaBon"));

function countChar(word, char) {
    let charCount = 0;
    for (let index = 0; index < word.length; index++) {
        if (word[index] == char) {
            charCount ++;   
        }
    }
    return charCount; 
}

console.log(countChar("BanBon", "n"));