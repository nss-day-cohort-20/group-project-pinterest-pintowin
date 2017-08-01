'use strict';

// FBCreds info to Here
// Board Creation form data from user input.
// post to firebase

app.factory('BoardFactory', function($q, $http, FirebaseUrl) {

    // let getBoardList = (userId) => {
    //     console.log("userId", userId);
    //     return $q((resolve, reject) => {
    //         $http.get(`${FirebaseUrl}pintowin.json?orderBy="uid"&equalTo="${userId}"`)
    //             .then((boardData) => {
    //                 resolve(boardData);
    //             })
    //             .catch((err) => {
    //                 console.log("oops", err);
    //                 reject(err);
    //             });
    //     });
    // };

    let postNewBoard = (newBoard) => {
        return $q((resolve, reject) => {
            $http.post(`${FirebaseUrl}pintowin.json`,
                    angular.toJson(newBoard))
                .then((newBoardData) => {
                    resolve(newBoardData);
                })
                .catch((err) => {
                    console.log("nope", err);
                    reject(err);
                });
        });
    };

    return {
        // getBoardList,
        postNewBoard
    };

});

