function postToGoogle() {
    alert("hello");
    let field1 = document.getElementById("AnticipateResponse").value;
    alert(field1);
        if (field1 ==""){
            alert("Please respond to the anticipate question.");
            document.getElementById("AnticipateResponse").focus();
            return false;
        }
    alert("boo")
        $.ajax({
            url: "https://docs.google.com/forms/u/1/d/e/1FAIpQLScLvpOl1uz5OdVxyAXAimbPIqpzbg69JYDQCpTXzFMuL1oncQ/formResponse",
            data: {"entry.280846240":field1},
            type: "POST",
            dataType:"xml",
                });
    alert("ajax");
                return false;
}

function writeCookie(){
    alert("hi");
    if (document.getElementById("AnticipateResponse").value=='') {
        alert("Please respond to the anticipate question.");
        return;
    }
    let cookievalue = document.getElementById("AnticipateResponse").value + ";";
    alert(cookievalue);
    document.cookie = "entry.280846240=" + cookievalue +"; path/";
    //document.write ("Setting Cookies: " + "entry.280846240=" + cookievalue);
    alert(cookievalue);
}