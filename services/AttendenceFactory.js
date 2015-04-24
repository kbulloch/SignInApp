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
    { name: "Smooty McCoodle", signed_in: false }
  ];

  return factory;

});
