'use strict';
//will take data from board factory and format the recieved object to be diplayed in the view.
//has button functionality for adding new boards
app.controller("BoardController", function($scope, $window, BoardFactory, UserFactory) {
  let currentUser = null;
  UserFactory.isAuthenticated()
    .then((user) => {
      console.log("isAuthenticated called in board Controller logged user", user);
      currentUser = UserFactory.getUser();
      fetchBoards();
    });

  function fetchBoards() {
    let boardArr = [];
    console.log("fetchBoards called");
    BoardFactory.getBoardList(currentUser)
      .then((boardList) => {
        console.log("board Data from fetchBoards", boardList);
        let boardData = boardList.data;
        Object.keys(boardData).forEach((key) => {
          boardData[key].id = key;
          boardArr.push(boardData[key]);
        });
        $scope.boards = boardArr;
      })
      .catch((err) => {
        console.log("error!", err);
      });
  }
  $scope.formTitle = "Create board";
  $scope.board = {
    title: "",
    description: "",
    FirebaseId: "",
    uid: UserFactory.getUser(),
    uniqueId: `${$scope.board.uid}${$scope.board.FirebaseId}`
  };
  $scope.saveBoard = () => {
    BoardFactory.postNewBoard($scope.boardItem)
      .then((data) => {
        console.log("new board data", data);
        $window.location.href = '#!/boards/view';
      });
  };
});