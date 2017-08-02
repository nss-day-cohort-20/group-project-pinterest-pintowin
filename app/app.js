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
    controller: 'BoardController',
    resolve: {isAuth}
  })
  .when('/boards/new', {
    templateUrl: 'partials/new-board.html',
    controller: 'BoardAddController',
    resolve: {isAuth}
  })
  .when('/pins/new', {
    templateUrl: 'partials/new-pin.html',
    controller: 'PinAddController',
    resolve: {isAuth}
  })
  .otherwise('/');
});