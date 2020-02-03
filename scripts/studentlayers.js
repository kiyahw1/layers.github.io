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
            document.getElementById('downbutton').style.display='none';
            document.getElementById('uparrow').style.display='inline';
            document.getElementById('upbutton').style.display='inline';

            }else{
            currentlayer-=1
            document.getElementById('uparrow').style.display='none';
            document.getElementById('upbutton').style.display='none';
            document.getElementById('downarrow').style.display='inline';
            document.getElementById('downbutton').style.display='inline';
        }
    }else if(current=='Layer3_Home' ){
        if(direction=='down'&&currentlayer==1){
            currentlayer+=1;
            document.getElementById('uparrow').style.display='inline';
            document.getElementById('upbutton').style.display='inline';
        }else if(direction=='down'&&currentlayer==2){
            currentlayer+=1
            document.getElementById('downarrow').style.display='none';
            document.getElementById('downbutton').style.display='none';
            document.getElementById('uparrow').style.display='inline';
            document.getElementById('upbutton').style.display='inline';
        } else if(direction=='up'&&currentlayer==2){
            currentlayer-=1
            document.getElementById('uparrow').style.display='none';
            document.getElementById('upbutton').style.display='none';
            document.getElementById('downarrow').style.display='inline';
            document.getElementById('downbutton').style.display='inline';
        }else if (direction=='up'&&currentlayer==3){
            currentlayer-=1
            document.getElementById('uparrow').style.display='inline';
            document.getElementById('upbutton').style.display='inline';
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
    alert('boo')
    
}

function displayarrows(current){
    if(current=='Layer2_Home' || current=='Layer3_Home'){
        document.getElementById('downarrow').style.display='inline';
    alert(current)
    }
}
