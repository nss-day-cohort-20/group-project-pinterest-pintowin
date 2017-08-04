"use strict";

app.factory('PinFactory', function($q, $http, FirebaseUrl) {

  let currentBoardId;

  let postNewPin = (newPin) => {
    return $q((resolve, reject) => {
      $http.post(`${FirebaseUrl}pins.json`, JSON.stringify(newPin))
        .then((objFb) => {
          resolve(objFb);
          // console('objFb', objFb);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  let setBoardId = (boardId) => {
    currentBoardId = boardId;
    console.log("?", currentBoardId);
  };

  let getBoardId = () => {
    return currentBoardId;
  };

  let getPins = (boardId) => {
    let pins = [];
    console.log("boardId", boardId);
    return $q((resolve, reject) => {
      $http.get(`${FirebaseUrl}pins.json?orderBy="boardId"&equalTo="${boardId}"`)
        .then((objFb) => {
          resolve(objFb.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  let deletePin = (pinId) => {
    return $q((resolve, reject) => {
      $http.delete(`${FirebaseUrl}pins/${pinId}.json`)
        .then(() => {
          resolve();
        })
        .error((err) => {
          console.log('pin delete fail:', err);
          reject(err);
        });
    });
  };
  let getSinglePin = (pinId) => {
        console.log("PinId for getSinglePin", pinId);
        return $q((resolve, reject) => {
            $http.get(`${FirebaseUrl}pins/${pinId}.json`)
            .then((onePin) => {
                resolve(onePin);
            })
            .catch((err) => {
                console.log("errorGetSinglePin", err);
                reject(err);
            });
        });

    };

  return {
    postNewPin,
    getPins,
    deletePin,
    setBoardId,
    getBoardId,
    getSinglePin
  };
});