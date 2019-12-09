function writeCookie(){
    response=document.getElementById('AnticipateResponse').value;
    if (response=='') {
        alert("Please respond to the anticipate question.");
        return;
    }
    cookievalue = response+ ";";
    document.cookie = "anticipate=" + cookievalue +"; path/";
}