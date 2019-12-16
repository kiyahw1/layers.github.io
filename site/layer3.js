function getStudentTabs() {

    //Sets Student 1 Tab 1
    var name = 'student_1' + "=";
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

    //Sets Student 1 Tab 2
    var name = 'color1' + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        document.getElementById('student1layer2').src="../assets/tabs/Layer2_" + c.substring(name.length, c.length)+".png";
      }
    }

    //Sets Student 1 Tab 3
    var name = 'color1' + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        document.getElementById('student1layer3').src="../assets/tabs/Layer3_" + c.substring(name.length, c.length)+".png";
      }
    }

    //Sets Student 2 Tab 1
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

    //Sets Student 2 Tab 2
    var name = 'color2' + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        document.getElementById('student2layer2').src="../assets/tabs/Layer2_" + c.substring(name.length, c.length)+".png";
      }
    }

    //Sets Student 2 Tab 3
    var name = 'color2' + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        document.getElementById('student2layer3').src="../assets/tabs/Layer3_" + c.substring(name.length, c.length)+".png";
      }
    }

    //Sets Student 3 Tab 1
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


    //Sets Student 3 Tab 2
    var name = 'color3' + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        document.getElementById('student3layer2').src="../assets/tabs/Layer2_" + c.substring(name.length, c.length)+".png";
      }
    }

    //Sets Student 3 Tab 3
    var name = 'color3' + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        document.getElementById('student3layer3').src="../assets/tabs/Layer3_" + c.substring(name.length, c.length)+".png";
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



function responseCookie() {
  response=document.getElementById('Layer1Response').value;
  cookievalue = response+ ";";
  document.cookie = "layer_1=" + cookievalue +"; path/";
  //document.getElementById('Layer1Response').value=response;

  alert(cookievalue);
}

function getResponses() {
  var name = 'layer_1' + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          document.getElementById('Layer1Response').value= c.substring(name.length, c.length);
      }
  }

  var name = 'layer_2' + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          document.getElementById('Layer2Response').value= c.substring(name.length, c.length);
      }
  }
  return "";
}