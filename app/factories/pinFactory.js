"use strict";

app.factory('PinFactory', function ($q, $http, FirebaseURL) {

  let postPin = (newPin) => {
    return $q((resolve, reject) => {
      $http.post(`${FirebaseURL}/pins.json`, JSON.stringify(newPin))
        .success((objFb) => {
          resolve(objFb);
        })
        .error((err) => {
          reject(err);
        });
    });
  };


  let getPins = (boardId) => {
    let pins = [];
    return $q((resolve, reject) => {
      $http.get(`${FirebaseURL}pins.json?orderBy="boardId"&equalTo="${boardId}"`)
        .success((objFb) => {
          Object.keys(objFb).forEach((key)=>{
            objFb[key].id = key;
            pins.push(objFb[key]);
          });
          // Sorting the pins by inde x
          // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
          pins.sort(function (a, b) {
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
      $http.delete(`${FirebaseURL}pins/${pinId}.json`)
        .success(() => {
          resolve();
        })
        .error((err)=> {
          console.log('pin delete fail:', err);
          reject(err);
        });
    });
  };


  return {
    postPin,
    getPins,
    deletePin
  };
});