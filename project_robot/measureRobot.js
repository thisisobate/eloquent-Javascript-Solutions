// my attempt: failed
// function compareRobots(robotsA, memoryA, robotsB, memoryB) {
//     for (let turn = 0;; turn++) {
//         if (state.parcels.length == 0) {
//             return `Done in ${turn} turns`;
//             break;
//         }
//         let actionA = robotsA(stateA, memoryA);
//         let actionB = robotsB(stateB, memoryB);
//         stateA = stateA.move(actionA.direction);
//         stateB = stateB.move(actionB.direction);
//         // memory = action.memory;
//         // console.log(`Moved to ${action.direction}`);
//         if (stateA > stateB) {
//             return `${robotsA} is faster`
//         } else {
//         return `${robotsB} is faster`
//         }
//     }
    
// }
function countSteps(state, robot, memory) {
    for (let steps = 0;; steps++) {
      if (state.parcels.length == 0) return steps;
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
    }
  }
  
  function compareRobots(robot1, memory1, robot2, memory2) {
    let total1 = 0, total2 = 0;
    for (let i = 0; i < 100; i++) {
      let state = VillageState.random();
      total1 += countSteps(state, robot1, memory1);
      total2 += countSteps(state, robot2, memory2);
    }
    console.log(`Robot 1 needed ${total1 / 100} steps per task`)
    console.log(`Robot 2 needed ${total2 / 100}`)
  }
  
  compareRobots(routeRobot, [], goalOrientedRobot, []);