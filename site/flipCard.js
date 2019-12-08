//Code to Flip Subject Card
//Replaces last part of src with _Front or _Back

function imageChange() {
    let fullname = document.getElementById("subjectCard").src;
    let filename = fullname.substring(fullname.lastIndexOf('/'),fullname.length);
    let frontback = fullname.substring(fullname.lastIndexOf("_"),fullname.length);
    if (frontback == "_Front.png") {
        document.getElementById("subjectCard").src= "../assets/SubjectCards/"+filename.replace("_Front.png","_Back.png");
    } else 
        document.getElementById("subjectCard").src= "../assets/SubjectCards/"+filename.replace("_Back.png","_Front.png");
    }