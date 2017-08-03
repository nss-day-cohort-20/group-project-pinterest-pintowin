'use strict';

app.controller("BoardAddController", function($scope, $window, BoardFactory, UserFactory) {

    $scope.formTitle = "Create board";
    $scope.board = {
        title: "",
        description: "",
        uid: UserFactory.getUser()
    };

    $scope.saveBoard = () => {
                console.log("new board data");
        BoardFactory.postNewBoard($scope.board)
            .then((data) => {
                // console.log("new board data", data);
                $window.location.href = '#!/boards/view';
            });

    };
});
