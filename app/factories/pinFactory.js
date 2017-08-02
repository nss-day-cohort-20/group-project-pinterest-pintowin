"use strict";

app.factory('PinFactory', function($q, $http, FirebaseUrl) {

  let postNewPin = (newPin) => {
    return $q((resolve, reject) => {
      $http.post(`${FirebaseUrl}/pins.json`, JSON.stringify(newPin))
        .then((objFb) => {
          resolve(objFb);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  let getPins = (boardId) => {
    let pins = [];
    return $q((resolve, reject) => {
      $http.get(`${FirebaseUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
        .then((objFb) => {
          Object.keys(objFb).forEach((key) => {
            objFb[key].id = key;
            pins.push(objFb[key]);
          });
          // Sorting the pins by inde x
          // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
          pins.sort(function(a, b) {
            return a.index - b.index;
          });
          resolve(pins);
        })
        .error((err) => {
          reject(err);
        });
    });
  };

  let deletePin = (pinId) => {
    return $q((resolve, reject) => {
      $http.delete(`${FirebaseUrl}/pins/${pinId}.json`)
        .then(() => {
          resolve();
        })
        .error((err) => {
          console.log('pin delete fail:', err);
          reject(err);
        });
    });
  };

  return {
    postNewPin,
    getPins,
    deletePin
  };
});