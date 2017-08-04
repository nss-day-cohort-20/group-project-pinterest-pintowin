'use strict';
app.controller('PinController', function($scope, $q, $window, PinFactory, BoardFactory, $routeParams) {
    let boardId = $routeParams.boardId;
    let fetchPins = () => {
        return $q((resolve, reject) => {
            let relevantBoard = BoardFactory.getSingleBoard(boardId);
            PinFactory.getPins(relevantBoard.id)
                .then((oneBoardId) => {});
        });
    };
});
