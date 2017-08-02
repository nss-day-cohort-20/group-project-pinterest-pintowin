'use strict';

app.controller("PinAddController", function($scope, $window, PinFactory, UserFactory) {

  $scope.title = "Create ";
  $scope.pin = {
    name: "pintowin.FBKey",
  	image: "",
  	description: "",
  };

  $scope.saveNewPin = () => {
   PinFactory.postNewPin($scope.pin)
    .then( (data) => {
      console.log("new pin data", data);
      $window.location.href = '#!/pins/view';
    });
  };
});
