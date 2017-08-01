'use strict';

// FBCreds info to Here
// Board Creation form data from user input.
// post to firebase

app.factory('BoardFactory', function($q, $http, FirebaseUrl, FBCreds) {

    var config = {
        apiKey: FBCreds.key,
        authDomain: FBCreds.authDomain
    };

    firebase.initializeApp(config);

    let getBoardList = (userId) => {
        console.log("userId", userId);
        return $q((resolve, reject) => {
            $http.get(`${FirebaseUrl}pintowin.json?orderBy="uid"&equalTo="${userId}"`)
                .then((boardData) => {
                    resolve(boardData);
                })
                .catch((err) => {
                    console.log("oops", err);
                    reject(err);
                });
        });
    };

    let postNewBoard = (newBoard) => {
        return $q((resolve, reject) => {
            $http.post(`${FirebaseUrl}boards.json`,
                    angular.toJson(newBoard))
                .then((newBoardData) => {
                    resolve(newBoardData);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };

});

