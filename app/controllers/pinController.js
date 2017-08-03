'use strict';
app.controller('PinController', function($scope, $q, $window, PinFactory, BoardFactory) {
  let fetchPins = () => {
    return $q((resolve, reject) => {
      // boardId undefined
      PinFactory.postNewPin(objFb)
        .then((pins) => {
          // undefined board
          $scope.boardId = board.id;
          Object.keys(objFb).forEach((key) => {
            objFb[key].id = key;
            pins.push(objFb[key]);
          });
          resolve(boardId);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
});