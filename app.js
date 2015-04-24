var signInApp = angular.module('signInApp', ['ui.router']);

signInApp.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: '',
    templateUrl: 'partials/home.html'
  });

  $stateProvider.state('attendence_sheet', {
    url: 'attendence_sheet',
    templateUrl: 'partials/attendence_sheet.html',
    controller: 'PresenceCtrl'
  });

  $stateProvider.state('teacher', {
    url: 'teacher',
    templateUrl: 'partials/teacher.html',
    controller: 'StudentsCtrl'
  });

});
