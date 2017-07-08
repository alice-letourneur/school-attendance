/* ============== Model ============== */
var model = {
  // Array of students
  student:[
    {
      name: "Slappy the Frog",
      attendance : [],
      daysMissed : 0
    },
    {
      name: "Lilly the Lizard",
      attendance : [],
      daysMissed : 0
    },
    {
      name: "Paulrus the Walrus",
      attendance : [],
      daysMissed : 0
    },
    {
      name: "Gregory the Goat",
      attendance : [],
      daysMissed : 0
    },
    {
      name: "Adam the Anaconda",
      attendance : [],
      daysMissed : 0
    }
  ]
};
/* ============== Controller ============== */
var controller = {
  // Initialise controller setting all attendance for each students to false
  init: function() {
    for (var i = 0; i < model.student.length ; i++){
      this.attendance = model.student[i].attendance;
      for (var j = 0 ; j < 12 ; j++){
        this.attendance.push(false);
      }
    };
    view.init();
  },

  // Get all students data
  getStudents: function() {
    return model.student;
  }
};

/* ============== View ============== */

var view = {
  // Render the initial view of the list
  init: function() {
    this.studentList = document.getElementById('studentList');
    var students = controller.getStudents();
    this.studentList.innerHTML = '';
    for (var i = 0 ; i < students.length; i++) {
      var student = students[i];
      // Create a new row
      var studentElem = document.createElement('tr');
      studentElem.setAttribute("class", "student");
      this.studentList.appendChild(studentElem);
      // Add the name of the student in first column
      var studentNameElem = document.createElement('td');
      studentNameElem.setAttribute("class", "name-col");
      studentNameElem.textContent = student.name;
      studentElem.appendChild(studentNameElem);
      // Add a checkbox in the next 12 columns
      for (var e = 0 ; e < 12 ; e++){
        var attendance = student.attendance[e];
        var studentAttendanceElem = document.createElement('td');
        studentAttendanceElem.setAttribute("class", "attend-col");
        studentElem.appendChild(studentAttendanceElem);
        var studentAttendanceInputElem = document.createElement('input');
        studentAttendanceInputElem.setAttribute("type", "checkbox");
        // Checkbox will be ticked if attendance is set to true for the day
        if (attendance == true){
          studentAttendanceInputElem.setAttribute("checked", "");
        };
        studentAttendanceElem.appendChild(studentAttendanceInputElem);
      }
      // Add the total number of days missed by the student in the last column
      var studentMissedDaysElem = document.createElement('td');
      studentMissedDaysElem.setAttribute("class", "missed-col");
      studentMissedDaysElem.textContent = student.daysMissed;
      studentElem.appendChild(studentMissedDaysElem);
    }
  }
};

/* ========= Initiate the app =========== */
controller.init();
