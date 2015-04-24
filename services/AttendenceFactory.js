signInApp.factory('AttendenceFactory', function AttendenceFactory() {

  var factory = {};

  factory.students = [
    { name: "Smicky McKraken", signed_in: false },
    { name: "Francis Baconshire", signed_in: false },
    { name: "Leonald Braveheart", signed_in: false },
    { name: "Benny Hampcrisp", signed_in: false },
    { name: "Sordi Timothy-French", signed_in: false },
    { name: "Patrick The Viking", signed_in: false },
    { name: "Linus Torvalds", signed_in: false },
    { name: "Balthor Hammersmith", signed_in: false },
    { name: "Beardly Ericsson", signed_in: false },
    { name: "Usef Darkheart", signed_in: false },
    { name: "Amon Amarth", signed_in: false },
    { name: "Slappy", signed_in: false },
    { name: "Smooty McCoodle", signed_in: false },
    { name: "Morewood Graybles", signed_in: false }
  ];

  factory.deleteStudent = function(student) {
    var index = factory.students.indexOf(student);
    factory.students.splice(index, 1);
  }

  factory.addStudent = function(student_name) {
    var new_student = { name: student_name, signed_in: false };
    factory.students.push(new_student);
  }

  return factory;

});
