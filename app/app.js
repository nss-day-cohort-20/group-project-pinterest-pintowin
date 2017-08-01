'use strict';

let app = angular.module("app", ["ngRoute"])
.constant("FirebaseUrl", "https://pinittowinit-96ebc.firebaseio.com/");

let isAuth = (UserFactory) => {
  return new Promise ( (resolve, reject) => {
    UserFactory.isAuthenticated()
    .then( (userBoolean) => {
      if (userBoolean) {
      resolve();
        } else {
          reject();
        }
    });
  });
};

app.config( ($routeProvider) => {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/login.html',
    controller: 'UserController'
  })
  .when('/boards/view', {
    templateUrl: 'partials/board-list.html',
    controller: 'BoardFactory',
    resolve: {isAuth}
  })
  .otherwise('/');
});

