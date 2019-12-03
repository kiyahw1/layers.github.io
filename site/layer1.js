function writeCookie(){
    alert("hi");
    if (document.getElementById("Layer1Response").value=='') {
        alert("Please respond to the anticipate question.");
        return;
    }
    let cookievalue = document.getElementById("Layer1Response").value + ";";
    alert(cookievalue);
    document.cookie = "entry.280846240=" + cookievalue +"; path/";
    //document.write ("Setting Cookies: " + "entry.280846240=" + cookievalue);
    alert(cookievalue);
}