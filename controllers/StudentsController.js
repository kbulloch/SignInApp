signInApp.controller('StudentsCtrl', function StudentsCtrl($scope, AttendenceFactory) {

  $scope.AttendenceFactory = AttendenceFactory;
  $scope.students = AttendenceFactory.students;

  $scope.addStudent = function() {
    AttendenceFactory.addStudent($scope.student_name);
  };

  $scope.deleteStudent = function(student) {
    AttendenceFactory.deleteStudent(student);
  };

});
