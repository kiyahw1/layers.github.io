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

function changelayer(direction,current,student,id){
    if (current=='Layer2_Home'){
        if (direction=='down'){
            currentlayer+=1
            document.getElementById('downarrow').style.display='hidden'
            document.getElementById('uparrow').style.display='block'
            }else{
            currentlayer-=1
            document.getElementById('uparrow').style.display='hidden'
            document.getElementById('downarrow').style.display='block'
        }
    }
    var name = student + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
        c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
        document.getElementById(id).src="../assets/StudentCards/Layer"+toString(currentlayer)+'_'+c.substring(name.length, c.length);
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
