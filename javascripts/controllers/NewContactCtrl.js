"use strict";

app.controller("NewContactCtrl", function($scope, $location, $routeParams, FirebaseContactsFactory) {
  //Helper variables/functions
  console.log("test");
  let newContact = {};
  $scope.contacts = [];
  // $scope.showAddContact = false;
  //
  // $scope.showAddContactView = function() {
  //   $scope.showAddContact = true;
  // };
  //
  // $scope.hideAddContactView = function() {
  //   $scope.showAddContact = false;
  // };

  let displayFirebaseContacts = function(fbContacts) {
    $scope.contacts = fbContacts;
    console.log("contacts: ", $scope.contacts);
  };

  //Main functionality
  let getFirebaseContacts = function() {
    FirebaseContactsFactory.getContactsList().then(function(fbContacts) {
      displayFirebaseContacts(fbContacts);
    });
  };

  getFirebaseContacts();

  $scope.getNewContact = function() {
    newContact = {};
    newContact.first_name = $scope.first_name;
    newContact.last_name = $scope.last_name;
    newContact.address = $scope.address;
    newContact.city = $scope.city;
    newContact.state = $scope.state;
    newContact.zip = $scope.zip;
    newContact.email = $scope.email;
    newContact.phone = $scope.phone;
    $scope.first_name = "";
    $scope.last_name = "";
    $scope.address = "";
    $scope.city = "";
    $scope.state = "";
    $scope.zip = "";
    $scope.email = "";
    $scope.phone = "";
    $scope.showAddContact = false;
  };

  $scope.getNewContactThenPostNewContact = function() {
    $scope.getNewContact();
    FirebaseContactsFactory.postNewContact(newContact).then(function() {
      getFirebaseContacts();
    });
  };
});
