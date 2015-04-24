signInApp.controller('StudentsCtrl', function StudentsCtrl($scope, AttendenceFactory) {

  $scope.AttendenceFactory = AttendenceFactory;
  $scope.students = AttendenceFactory.students;

  // $scope.addStudent = function(student) {
  //   AttendenceFactory.addStudent(student); //probably needs more params
  // };

  $scope.deleteStudent = function(student) {
    AttendenceFactory.deleteStudent(student);
  };

});
