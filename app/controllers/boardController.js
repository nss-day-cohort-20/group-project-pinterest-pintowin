'use strict';

app.controller("BoardController", function($scope, $window, BoardFactory, UserFactory) {

    let currentUser = null;

    UserFactory.isAuthenticated()
        .then((user) => {
            console.log("isAuthenticated called in board Controller logged user", user);
            currentUser = UserFactory.getUser();
            fetchBoards();
        });

    function fetchBoards() {
        console.log("fetchBoards called");
        BoardFactory.getBoardList(currentUser)
            .then((boardList) => {
                // console.log("board Data from fetchBoards", boardList);
                $scope.boardData = boardList.data;
                // console.log("boardData", boardData);
                console.log("objectkey", Object.keys($scope.boardData));
                Object.keys($scope.boardData).forEach((key) => {
                    $scope.boardData[key].id = key;
                    console.log("boardDataKey", $scope.boardData[key].id);
                    console.log("boardData", $scope.boardData);
                });
            })
            .catch((err) => {
                console.log("error!", err);
            });

    }
    
    $scope.addPin = (pinObj) => {
        //takes the pin object and relates it to the parentboard
    };

    $scope.deleteBoard = (boardId) => {
    console.log("delete called", boardId);
    BoardFactory.deleteBoardItem(boardId)
    .then( (data) => {
      console.log("removed item", data);
      fetchBoards(currentUser);
    });
  };

});
