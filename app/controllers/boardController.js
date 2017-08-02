'use strict';

app.controller("BoardController", function($scope, $q, $window, BoardFactory, UserFactory) {

    let currentUser = null;

  let fetchBoards = () => {
        console.log("fetchBoards called");
        return $q((resolve, reject) => {
            BoardFactory.getBoardList(currentUser)
                .then((boardData) => {
                    // console.log("board Data from fetchBoards", boardList);
                    $scope.boardData = boardData.data;
                    // console.log("boardData", boardData);
                    // console.log("objectkey", Object.keys($scope.boardData));
                    Object.keys($scope.boardData).forEach((key) => {
                        console.log("boardData", $scope.boardData);
                        $scope.boardData[key].id = key;
                        console.log("boardDataKey", $scope.boardData[key].id);
                        // console.log("boardData", $scope.boardData);

                    });
                    resolve(boardData);
                })
                .catch((err) => {
                    console.log("oops", err);
                    reject(err);
                });
                });
        };

    UserFactory.isAuthenticated()
        .then((user) => {
            console.log("isAuthenticated called in board Controller logged user", user);
            currentUser = UserFactory.getUser();
            fetchBoards();
        });

    
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
