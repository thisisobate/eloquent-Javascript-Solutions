// Attempted but failed
// function fastRobot({place, parcels}, route) {
//     let index = parcels.findIndex((a, b) => a < b ? a : b);
//     if (route.length == 0) {
//         let parcel = parcels[index];
//         if (parcel.place != place) {
//           route = findRoute(roadGraph, place, parcel.place);
//         } else {
//           route = findRoute(roadGraph, place, parcel.address);
//         }
//       }
//       return {direction: route[0], memory: route.slice(1)};
// }

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