var signInApp = angular.module('signInApp', ['ui.router']);

signInApp.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: '',
    templateUrl: 'partials/home.html'
  });

});
