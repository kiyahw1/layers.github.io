function navigation(layer){
    var name = layer + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            alert('pulled');
            window.location.assign(c.substring(name.length, c.length)+'.html');
        }
    }
}

function setlayer(layer){;
    let cookievalue = layer + ";";
    document.cookie = 'currentlayer' + '=' + cookievalue +"; path/";
    alert(cookievalue)
}
