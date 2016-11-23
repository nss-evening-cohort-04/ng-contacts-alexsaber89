"use strict";

app.run(function(FIREBASE_CONFIG) {
  firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider) {

  $routeProvider
    .when('/new-contact', {
      templateUrl: 'partials/new-contact.html',
      controller: 'NewContactCtrl'
    })
    .when('/contact-list', {
      templateUrl: 'partials/contact-list.html',
      controller: 'NewContactCtrl'
    })
    .otherwise('/contact-list');
});
