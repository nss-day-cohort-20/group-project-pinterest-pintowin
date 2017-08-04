'use strict';
app.controller('PinController', function($scope, $q, $window, PinFactory, BoardFactory, $routeParams) {
    let boardId = $routeParams.boardId;
    let fetchPins = () => {
        return $q((resolve, reject) => {
            let relevantBoard = BoardFactory.getSingleBoard(boardId);
            console.log("relevantBoard", relevantBoard);
            PinFactory.getPins(relevantBoard.id)
                .then((pins)=>{
                    console.log("pins", pins);
                    resolve(pins);
                })
                .catch((err)=>{
                    console.log("error in pin controller", err);
                    reject(err);
                });
        });

    };
    // console.log("BoardId PinFactory", PinFactory.getBoardId());
    $scope.getPinsByBoard = () => {
      console.log("Hi");
      PinFactory.getPins($routeParams.boardId)
    .then((data) => {
      console.log("data", data);
    });
    };
    // $scope.image = pins.image;
    // $scope.desc = pins.description;
});