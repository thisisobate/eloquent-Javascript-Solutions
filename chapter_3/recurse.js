// function isEven (num){
//     if ((num - 2) == 0) {
//         return "true";
//     } else {
//         return isEven();
//     }
// }

// isEven(2);

function isEven (num){
    if ((num - 2) == 0) {
        return "true";
    } else if ((num -1) == 0){
return "false"; 
    } else {
return isEven(num - 2);
    }
}

console.log(isEven(39));