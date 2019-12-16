function getStudent1Layer2(){
    var name = 'student_1' + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
        c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
        document.getElementById('s1l2').src="../assets/StudentCards/Layer2_"+c.substring(name.length, c.length);
    }
    }
}


function getStudent2Layer2(){
    var name = 'student_2' + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
        c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
        document.getElementById('s2l2').src="../assets/StudentCards/Layer2_" + c.substring(name.length, c.length);
    }
    }
}

function getStudent3Layer2(){
    var name = 'student_3' + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
        c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
        document.getElementById('s3l2').src="../assets/StudentCards/Layer2_" + c.substring(name.length, c.length);
    }
    }
}


function getResponse() {
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

function responseCookie() {
    response=document.getElementById('Layer2Response').value;
    cookievalue = response+ ";";
    document.cookie = "layer_2=" + cookievalue +"; path/";
    //document.getElementById('Layer1Response').value=response;
  
    alert(cookievalue);
  }
