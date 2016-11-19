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

  return {getContactsList};
});