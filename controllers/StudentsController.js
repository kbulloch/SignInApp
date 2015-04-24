signInApp.controller('StudentsCtrl', function StudentsCtrl($scope, AttendenceFactory) {

  $scope.AttendenceFactory = AttendenceFactory;
  $scope.students = AttendenceFactory.students;

  $scope.addStudent = function(student) {
  };

  $scope.deleteStudent = function(student) {
  };

});
