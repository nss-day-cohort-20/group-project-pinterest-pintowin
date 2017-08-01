'use strict';

app.controller("PinController", function($scope, $window, PinFactory, UserFactory) {

  $scope.title = "";
  $scope.pin = {
  	image: "",
  	description: "",
    uid: UserFactory.getUser()
  };

  $scope.saveNewPin = () => {
   PinFactory.postNewPin($scope.pin)
    .then( (data) => {
      console.log("new pin data", data);
      // $window.location.href = '#!/pins/view';
    });
  }; 
});