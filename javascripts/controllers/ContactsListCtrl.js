"use strict";

app.controller("ContactsListCtrl", function($scope, FirebaseContactsFactory) {
  $scope.contacts = [];

  let getFirebaseContacts = function() {
    FirebaseContactsFactory.getContactsList().then(function (fbContacts) {
      displayFirebaseContacts(fbContacts);
    });
  };

  let displayFirebaseContacts = function(fbContacts) {
    $scope.contacts = fbContacts;
    console.log("contacts: ", $scope.contacts);
  };
  getFirebaseContacts();
});
