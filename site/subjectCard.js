function getSubjectCard() {
    var name = 'subject' + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }

      if (c.indexOf(name) == 0) {
        document.getElementById('subjectCard').src="../assets/SubjectCards/" + c.substring(name.length, c.length);
      }
    }
    return "";
  }

function imageChange() {
    let fullname = document.getElementById("subjectCard").src;
    let filename = fullname.substring(fullname.lastIndexOf('/'),fullname.length);
    let frontback = fullname.substring(fullname.lastIndexOf("_"),fullname.length);
    if (frontback == "_Front.png") {
        document.getElementById("subjectCard").src= "../assets/SubjectCards/"+filename.replace("_Front.png","_Back.png");
    } else 
        document.getElementById("subjectCard").src= "../assets/SubjectCards/"+filename.replace("_Back.png","_Front.png");
    }
