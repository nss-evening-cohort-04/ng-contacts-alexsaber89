"use strict";

app.controller("ContactsListCtrl", function($scope, FirebaseContactsFactory) {
  $scope.contacts = [];

  let getContacts = function() {
    FirebaseContactsFactory.getContactsList().then(function (fbContacts) {
      $scope.contacts = fbContacts;
      console.log("contacts: ", $scope.contacts);
    });
  };
  getContacts();
});
