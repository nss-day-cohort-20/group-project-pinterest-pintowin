'use strict';

app.controller("PinAddController", function($scope, $window, PinFactory, UserFactory) {

  $scope.title = "Create ";
  $scope.pin = {
  	image: "",
  	description: "",
    uid: UserFactory.getUser()
  };

  $scope.saveNewPin = () => {
   PinFactory.postNewPin($scope.pin)
    .then( (data) => {
      console.log("new pin data", data);
      $window.location.href = '#!/pins/view';
    });
  };
});
