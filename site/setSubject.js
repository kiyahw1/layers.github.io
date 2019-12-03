function getSubject() {
    var subject = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(subject) == 0) {
        document.getElementById('subject').src="../assets/tabs/Tab-" + c.substring(subject.length, c.length);
      }
    }
    return "";
  }