//Code to Flip Subject Card
//Replaces last part of src with _Front or _Back
let frontback = "_Front.png"

function imageChange() {
    let fullname = document.getElementById("subjectCard").src;
    let filename = fullname.substring(fullname.lastIndexOf('/'),fullname.length);
    if (frontback == "_Front.png") {
        document.getElementById("subjectCard").src= "../assets/SubjectCards/"+filename.replace("_Front.png","_Back.png");
        frontback = "_Back.png"
    } else 
        document.getElementById("subjectCard").src= "../assets/SubjectCards/"+filename.replace("_Back.png","_Front.png");
        frontback = "_Front.png"
    }