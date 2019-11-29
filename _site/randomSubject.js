function drawSubject(){
    let subjectArray = new Array('History_Front.png', 
    'earthScience_Front.png',
    'figurativeLanguage_Front.png', 
    'biology_Front.png', 
    'math_Front.png', 
    'computerScience_Front.png')
    
    randomCard=subjectArray[Math.floor(Math.random()*subjectArray.length)];

    document.getElementById("subject").src= "../SubjectCards/"+randomCard;

    let cookievalue = randomCard + ";";
    document.cookie = "subject=" + cookievalue +"; path/";
    //document.write ("Setting Cookies: " + "entry.1814210675=" + cookievalue);
}

