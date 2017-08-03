// 'use strict';
// app.controller('BoardController', function($scope, $q, $window, PinFactory, BoardFactory) {
//   let fetchPins = () => {
//     return $q((resolve, reject) => {
//       // boardId undefined
//       PinFactory.getPins(boardId)
//         .then((pins) => {
//           // undefined board
//           $scope.boardId = board.id;
//           Object.keys(pins).forEach((key) => {
//             pins[key].id = key;
//             pins.push(pins[key]);
//           });
//           resolve(boardId);
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     });
//   };
// });

// Ok so the board objects have their key after they've been posted to firebase.
// it exists as a property called .id, because of that I think we can loop through
// pins to relate them with an if statement and push them to the dom w/e the user
// switches to the specific board view. Do I use a getter for the pins and loop through
// that? Is there an angular way like through filter or ng-repeat or both?

// Currently the code works via partials essentially. After fetchboards is called in
// Userfactory.isAuthenticated the user's navigation through partials switches the view
// to display the information for each board. We need to add a view pins button to that
// which does the functionality in the first paragraph.