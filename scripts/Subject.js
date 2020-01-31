function drawSubject(){
    let subjectArray = new Array('History.png', 
    'Earth Science_Front.png',
    'Figurative Language_Front.png', 
    'Biology_Front.png', 
    'Math_Front.png', 
    'Computer Science_Front.png',
    'Global Cultures_Front.png')
    
    randomCard=subjectArray[Math.floor(Math.random()*subjectArray.length)];

    document.getElementById("subject").src= "../assets/SubjectCards/"+randomCard;

    //Updates instructions, next button, and draw student button
    document.getElementById("Body").innerHTML="This is your subject card. If you are not familiar with your topics, flip the card to read some examples. You will have access to this card as you create your activites. ";
    document.getElementById('subjectNext').style.display='block';
    document.getElementById('arrowFlip').style.display='inline';
    document.getElementById('subjectDraw').style.display='none';

    let cookievalue = randomCard + ";";
    document.cookie = "subject=" + cookievalue +"; path/";

}

function imageChange() {
  let fullname = document.getElementById("subject").src;
  let frontback = fullname.substring(fullname.lastIndexOf('_'),fullname.length);
  let filename = fullname.substring(fullname.lastIndexOf('/'),fullname.length);
  if (frontback == "_Front.png") {
      document.getElementById("subject").src= "../assets/SubjectCards/"+filename.replace("_Front.png","_Back.png");
      frontback = "_Back.png"
  } else 
      document.getElementById("subject").src= "../assets/SubjectCards/"+filename.replace("_Back.png","_Front.png");
      frontback = "_Front.png"
  }
