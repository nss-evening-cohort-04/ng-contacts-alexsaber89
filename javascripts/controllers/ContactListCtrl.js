"use strict";

app.controller("ContactListCtrl", function($scope, $location, $routeParams, FirebaseContactsFactory) {

  $scope.showAddContactView = function() {
    $location.url("/new-contact");
  };

  let displayFirebaseContacts = function(fbContacts) {
    $scope.contacts = fbContacts;
    $location.url("/contact-list");
  };

  let getFirebaseContacts = function() {
    FirebaseContactsFactory.getContactsList().then(function(fbContacts) {
      displayFirebaseContacts(fbContacts);
    });
  };
  getFirebaseContacts();

  $scope.deleteContactThenReloadList = function(contactID) {
    FirebaseContactsFactory.deleteContact(contactID).then(function() {
      getFirebaseContacts();
    });
  };
});
