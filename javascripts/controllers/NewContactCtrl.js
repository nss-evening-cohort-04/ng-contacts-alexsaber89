"use strict";

app.controller("NewContactCtrl", function($scope, FirebaseContactsFactory) {

  let newContact = {};

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
    console.log("new contact: ", newContact);
    $scope.first_name = "";
    $scope.last_name = "";
    $scope.address = "";
    $scope.city = "";
    $scope.state = "";
    $scope.zip = "";
    $scope.email = "";
    $scope.phone = "";
  };
});
