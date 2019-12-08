function getStudentTabs() {

    //Sets Student 1 Tab
    var name = 'student1_' + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        document.getElementById('student1layer1').src="../assets/tabs/Layer1_" + c.substring(name.length, c.length);
      }
    }

    //Sets Student 2 Tab
    var name = 'student_2' + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        document.getElementById('student2layer1').src="../assets/tabs/Layer1_" + c.substring(name.length, c.length);
      }
    }

    //Sets Student 3 Tab
    var name = 'student_3' + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        document.getElementById('student3layer1').src="../assets/tabs/Layer1_" + c.substring(name.length, c.length);
      }
    }
    return "";
  }




  
//Gets the subject tab from cookie and sets the tab image on layer home
function getSubjectTab() {
    var name = 'subject' + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        document.getElementById('subject').src="../assets/tabs/Tab_" + c.substring(name.length, c.length);
      }
    }
    return "";
  }