'use strict';

app.factory("FirebaseContactsFactory", function($q, $http, FIREBASE_CONFIG) {

  var getContactsList = function() {
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json`)
        .success(function(response) {
          let contacts = [];
          Object.keys(response).forEach(function(key) {
            response[key].id = key;
            contacts.push(response[key]);
          });
          resolve(contacts);
        })
        .error(function(errorResponse) {
          reject(errorResponse);
        });
    });
  };

  var postNewContact = function(newContact) {
    return $q((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`,
      JSON.stringify(newContact)
    )
      .success(function(postResponse) {
        resolve(postResponse);
        console.log("post successful: ", postResponse);
      })
      .error(function(postError) {
        reject(postError);
      });
    });
  };

  return {getContactsList, postNewContact};
});
