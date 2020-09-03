let journal = [];

// let's create function for adding entry to the journal
function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}
addEntry(["eat", "drink", "sleep"], true);
console.log(journal);
// loop through all entry in journal and count individual events
for (let entry of journal) {
    console.log(`${entry.events.length} events.`)
}
// testing how the for..of loop construct works.
// this can only iterate over the values of an iterable object e.g array, string, NodeLists
let val = "hjfdhfd";
for (let iterator of val) {
    console.log(iterator);
}