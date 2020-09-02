//Write a program that creates a string that represents an 8×8 grid, 
//using newline characters to separate lines. At each position of the grid 
//there is either a board or a "#" character.

let symbol = "#";
let board = "";
let size = 8;

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {  
        if ((x + y) % 2 == 0) {
            board += " ";        
        } else {
            board += symbol;
        }
    }
    board += "\n";
}

console.log(board);