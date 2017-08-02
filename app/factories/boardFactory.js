'use strict';

app.factory('BoardFactory', function($q, $http, FirebaseUrl) {

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

    let deleteBoardItem = (boardId) => {
    console.log("userId", boardId);
    return $q( (resolve, reject) => {
      if (boardId) {
        $http.delete(`${FirebaseUrl}pintowin/${boardId}.json`)
        .then( (data) => {
          resolve(data);
        })
        .catch( (err) => {
          reject(err);
        });
      } else {
        console.log("No id passed in");
      }
    });
  };

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

    let getSingleBoard = (boardId) => {
    return $q( (resolve, reject) => {
      $http.get(`${FirebaseUrl}pintowin/${boardId}.json`)
      .then( (board) => {
        resolve(board.data);
      })
      .catch( (err) => {
        reject(err);
      });
    });
  };
    return {
        getBoardList,
        postNewBoard,
        deleteBoardItem,
        getSingleBoard
    };

});

