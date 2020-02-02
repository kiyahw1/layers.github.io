function getStudent(number,id){
    var name = number + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
        c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
        document.getElementById(id).src="../assets/StudentCards/Layer1_"+c.substring(name.length, c.length);
    }
    }
}

function changelayer(direction,current){
    if (current=='Layer2_Home'){
        if (direction=='down'){
            currentlayer+=1
        }
    }
    alert(currentlayer)
    
}

function displayarrows(current){
    if(current=='Layer2_Home' || current=='Layer3_Home'){
        document.getElementById('downarrow').style.display='block';
    alert(current)
    }
}
