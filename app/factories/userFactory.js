'use strict';

app.factory("UserFactory", function($q, $http, FirebaseUrl, FBCreds) {

  var config = {
    apiKey: FBCreds.key,
    authDomain: FBCreds.authDomain
  };

  firebase.initializeApp(config);

  let currentUser = null;

  let isAuthenticated = function() {
    console.log("isAuthenticated called");
    return new Promise( (resolve, reject) => {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          currentUser = user.uid;
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  };

  let getUser = () => {
    return currentUser;
  };

  let createUser = (userObj) => {
    return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
    .then((userObj)=>{
      $http.post(`${FirebaseUrl}users.json`, JSON.stringify(userObj));
    })
    .catch( (err) => {
      console.log("error", err.message);
    });
  };
    //   let createUser = (userObj) => {
    //     return $q((resolve, reject) => {
    //         $http.post(`${FirebaseUrl}users.json`, JSON.stringify(userObj))
    //             .then((userObject) => {
    //                 firebase.auth().createUserWithEmailAndPassword(userObject.email, userObject.password)
    //                     .then((data) => {
    //                         resolve(data);
    //                     }).catch((err) => { // TODO: post to firebase the users as they are added
    //                         console.log("error", err.message);
    //                     });
    //             });

    //     });
    // };//experimental
  let loginUser = (userObj) => {
    return $q( (resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
      .then( (user) => {
        currentUser = user.uid;
        resolve(user);
      })
      .catch( (err) => {
        console.log("error", err.message);
      });
    });
  };

  let logoutUser = () => {
    return firebase.auth().signOut()
    .catch( (err) => {
      console.log("error", err.message);
    });
  };

  return {isAuthenticated, getUser, createUser, loginUser, logoutUser};
});

