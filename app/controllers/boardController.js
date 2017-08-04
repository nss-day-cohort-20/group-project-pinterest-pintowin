'use strict';

app.controller("BoardController", function($scope, $q, $http, $routeParams, FirebaseUrl, BoardFactory, PinFactory) {
  let boardId = $routeParams.boardId;

  let fetchPins = () => {
    return $q((resolve, reject) => {
        BoardFactory.getSingleBoard(boardId)
          .then((oneBoardId) => {
            $http.get(`${FirebaseUrl}pins?orderBy="boardId"&equalTo="${oneBoardId}"`);
            resolve(boardId);
          });
      })
      .catch((err) => {
        // console.log("oops", err);
        // reject(err);
      });
  };
});

// 'use strict';
// app.controller('BoardController', function($scope, $q, $window, PinFactory, BoardFactory, $routeParams) {
//     let boardId = $routeParams.boardId;
//     let fetchPins = () => {
//         return $q((resolve, reject) => {
//             let relevantBoard = BoardFactory.getSingleBoard(boardId);
//             PinFactory.getPins(relevantBoard.id)
//                 .then((oneBoardId) => {});
//         });
//     };
// });