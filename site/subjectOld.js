//Draws subject card from the deck and sets the subject cookie
function drawSubject(){
  let subjectArray = new Array('History_Front.png', 
  'earthScience_Front.png',
  'figurativeLanguage_Front.png', 
  'biology_Front.png', 
  'Math_Front.png', 
  'computerScience_Front.png')
  
  randomCard=subjectArray[Math.floor(Math.random()*subjectArray.length)];

  document.getElementById("subjectCard").src= "../assets/SubjectCards/"+randomCard;

  //Updates instructions, next button, and draw student button
  document.getElementById("Body").innerHTML="This is your subject card. If you are not familiar with your topics, flip the card to read some examples. You will have access to this card as you create your activites. ";
  document.getElementById('subjectNext').style.visibility = 'visible';
  document.getElementById('arrowFlip').style.visibility='visible';
  document.getElementById("subjectDraw").value = 'Redraw Subject Cards';

  let cookievalue = randomCard + ";";
  document.cookie = "subject=" + cookievalue +"; path/";
  //document.write ("Setting Cookies: " + "entry.1814210675=" + cookievalue);
  alert(cookievalue)
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





//Changes the subject card image so the card flips
function imageChange() {
  let fullname = document.getElementById("subjectCard").src;
  let filename = fullname.substring(fullname.lastIndexOf('/'),fullname.length);
  let frontback = fullname.substring(fullname.lastIndexOf("_"),fullname.length);
  if (frontback == "_Front.png") {
      document.getElementById("subjectCard").src= "../assets/SubjectCards/"+filename.replace("_Front.png","_Back.png");
  } else 
      document.getElementById("subjectCard").src= "../assets/SubjectCards/"+filename.replace("_Back.png","_Front.png");
  }




// Gets the subject card image from the 
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
      document.getElementById('subject').src="../assets/SubjectCards/" + c.substring(name.length, c.length);
    }
  }
  return "";
}