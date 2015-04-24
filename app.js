var signInApp = angular.module('signInApp', ['ui.router']);

signInApp.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: '',
    templateUrl: 'partials/home.html'
  });

  $stateProvider.state('sign_in', {
    url: 'sign_in',
    templateUrl: 'partials/sign_in.html',
    controller: 'StudentsCtrl'
  });

  $stateProvider.state('presence', {
    url: 'presence',
    templateUrl: 'partials/presence.html',
    controller: 'PresenceCtrl'
  });

});
