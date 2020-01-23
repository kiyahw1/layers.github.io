function drawSubject(){
    let subjectArray = new Array('History_Front.png', 
    'earthScience_Front.png',
    'figurativeLanguage_Front.png', 
    'biology_Front.png', 
    'Math_Front.png', 
    'computerScience_Front.png',
    'GlobalCultures_Front.png')
    
    randomCard=subjectArray[Math.floor(Math.random()*subjectArray.length)];

    document.getElementById("subjectCard").src= "../assets/SubjectCards/"+randomCard;

    //Updates instructions, next button, and draw student button
    document.getElementById("Body").innerHTML="This is your subject card. If you are not familiar with your topics, flip the card to read some examples. You will have access to this card as you create your activites. ";
    document.getElementById('subjectNext').style.visibility = 'visible';
    document.getElementById('arrowFlip').style.visibility='visible';
    document.getElementById("subjectDraw").value = 'Redraw Subject Cards';

    let cookievalue = randomCard + ";";
    document.cookie = "subject=" + cookievalue +"; path/";
}

