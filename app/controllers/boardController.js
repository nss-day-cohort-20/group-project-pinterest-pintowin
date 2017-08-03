'use strict';

app.controller("BoardController", function($scope.RouteParams, BoardFactory, PinFactory) {
  let boardId = $routeParams.boardId;

  BoardFactory.getSingleBoard(boardId)
    .then(oneBoardId) {
      $http.get(`${FirebaseUrl}pins?orderBy="boardId"&equalTo="${oneBoardId}"`)
    };
    PinFactory.getPins(pins);

    $scope. = (boardId) => {
        PinFactory.setBoardId(boardId);
        console.log("boardId in addPin", boardId);
    }
});
