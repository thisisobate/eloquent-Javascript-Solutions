/* 
    Write a loop that makes seven calls to console.log to output the following triangle:
                        #
                        ##
                        ###
                        ####
                        #####
                        ######
                        #######
*/

let symbol = "#";
let symbolDuplicate = "#";
var newBlock; 
function createTriangle (block){
    for (let count = 0; count < 7; count++) {
        console.log(block);
        block = block + symbolDuplicate;      
    }
}
createTriangle(symbol);