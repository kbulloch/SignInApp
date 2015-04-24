signInApp.controller('PresenceCtrl', function PresenceCtrl($scope, AttendenceFactory) {

  $scope.AttendenceFactory = AttendenceFactory;
  $scope.students = AttendenceFactory.students;

  $scope.signIn = function(student) {
    student.signed_in = true;
  };

  $scope.signOut = function(student) {
    student.signed_in = false;
  };

});
