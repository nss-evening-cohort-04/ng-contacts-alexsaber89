"use strict";

app.run(function(FIREBASE_CONFIG) {
  firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider) {
  $routeProvider
    .when('/new-contact', {
      templateURL: 'partials/new-contact.html',
      controller: 'NewContactCtrl'
    })
    .when('/contact-list', {
      templateURL: 'partials/contact-list.html',
      controller: 'NewContactCtrl'
    })
    .otherwise('/contact-list');
});
