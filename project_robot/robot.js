/* 
    An automation, a little program that performs a task in a virtual world.
    Our automation will be a mail delivery robot picking up and dropping off parcels.
*/
// Meadowfield roads (14)
const roads = [
    "Alice's House-Bob's House",    "Alice's House-Cabin",
    "Alice's House-Post Office",    "Bob's House-Town Hall",
    "Daria's House-Ernie's House",    "Daria's House-Town Hall",
    "Ernie's House-Grete's House",    "Grete's House-Farm",
    "Grete's House-Shop",    "Marketplace-Farm",
    "Marketplace-Post Office",    "Marketplace-Shop",
    "Marketplace-Town Hall",    "Shop-Town Hall",
];
// convert list of roads to a  data structure that, for each place. tells us what can be reached from there
function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdges(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdges(from, to);
        addEdges(to, from);
    }
    return graph;
}
const roadGraph = buildGraph(roads);

class VillageState {
    constructor (place, parcels){
        this.place = place;
        this.parcels = parcels;
    }
    move (destination){
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                return {place: destination, address: p.address};
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}
let first = new VillageState(
    "Post Office",
    [{place: "Post Office", address: "Alice's House"}]
);
let next = first.move("Alice's House");
console.log(next.place);

// Out of context...persistent data are data structures that don't change
let object = Object.freeze({value: 9});
object.value = 10;
console.log(object);

// Simulation
function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}
//randompick
function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}
function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
}
VillageState.random = function (parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
}
runRobot(VillageState.random(), randomRobot);
// much better way: mail truck route
const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];
function routeRobot(state, memory) {
    if (memory.length == 0) {
      memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)};
}
function findRoute(graph, from, to) {
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i++) {
      let {at, route} = work[i];
      for (let place of graph[at]) {
        if (place == to) return route.concat(place);
        if (!work.some(w => w.at == place)) {
          work.push({at: place, route: route.concat(place)});
        }
      }
    }
}
function goalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
      let parcel = parcels[0];
      if (parcel.place != place) {
        route = findRoute(roadGraph, place, parcel.place);
      } else {
        route = findRoute(roadGraph, place, parcel.address);
      }
    }
    return {direction: route[0], memory: route.slice(1)};
}
// optimized robot
function lazyRobot({place, parcels}, route) {
    if (route.length == 0) {
      // Describe a route for every parcel
      let routes = parcels.map(parcel => {
        if (parcel.place != place) {
          return {route: findRoute(roadGraph, place, parcel.place),
                  pickUp: true};
        } else {
          return {route: findRoute(roadGraph, place, parcel.address),
                  pickUp: false};
        }
      });
    // This determines the precedence a route gets when choosing.
    // Route length counts negatively, routes that pick up a package
    // get a small bonus.
    function score({route, pickUp}) {
        return (pickUp ? 0.5 : 0) - route.length;
        }
        route = routes.reduce((a, b) => score(a) > score(b) ? a : b).route;
    }

    return {direction: route[0], memory: route.slice(1)};
}

// measuring robot effectiveness by comparing them
function countSteps(state, robot, memory) {
    for (let steps = 0;; steps++) {
      if (state.parcels.length == 0) return steps;
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
    }
}
function compareRobots(robot1, memory1, robot2, memory2) {
    let total1 = 0; let total2 = 0;
    for (let count = 0; count < 100; count++) {
        let state =   VillageState.random();
        total1 += countSteps(state, robot1, memory1);
        total2 += countSteps(state, robot2, memory2);
    }
    console.log(`Robot 1 needed ${total1 / 100} steps per task`);
    console.log(`Robot 2 needed ${total2 / 100}`);
}
//   console.log(compareRobots(routeRobot, [], goalOrientedRobot, []));
  console.log(compareRobots(lazyRobot, [], goalOrientedRobot, []));