"use strict";

app.controller("NewContactCtrl", function($scope, $location, $routeParams, FirebaseContactsFactory) {
  //Helper variables/functions
  let newContact = {};

  //Main functionality
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
  };

  $scope.getNewContactThenPostNewContact = function() {
    $scope.getNewContact();
    FirebaseContactsFactory.postNewContact(newContact).then(function(postResponse) {
      $location.url("/contact-list");
    });
  };
});
