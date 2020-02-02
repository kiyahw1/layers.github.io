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
            currentlayer+=1;
            document.getElementById('downarrow').style.display='none';
            document.getElementById('downbutton').disable=true;
            document.getElementById('uparrow').style.display='block';
            document.getElementById('upbutton').disable=false;

            }else{
            currentlayer-=1
            document.getElementById('uparrow').style.display='none';
            document.getElementById('upbutton').disable=true;
            document.getElementById('downarrow').style.display='block';
            document.getElementById('downbutton').disable=false;
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
        num=currentlayer.toString()
        document.getElementById(id).src="../assets/StudentCards/Layer"+num+'_'+c.substring(name.length, c.length);
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
