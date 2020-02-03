function summary(){
    let fullsubject=getcookie('subject');
    let subjectpart= fullsubject.substr(0,fullsubject.indexOf('_'));
    document.getElementById('subject').innerHTML = ': '+subjectpart;

    let fullstu1=getcookie('student_1');
    let stu1part= fullstu1.substr(0,fullstu1.indexOf('.'));
    let fullstu2=getcookie('student_2');
    let stu2part= fullstu2.substr(0,fullstu2.indexOf('.'));
    let fullstu3=getcookie('student_3');
    let stu3part= fullstu3.substr(0,fullstu3.indexOf('.'));
    document.getElementById('students').innerHTML = 
        ': '+stu1part+', '+stu2part+', '+stu3part;

    document.getElementById('layer1').innerHTML = ': '+getcookie('Layer1_Home');
    document.getElementById('layer2').innerHTML = ': '+getcookie('Layer2_Home');
    document.getElementById('layer3').innerHTML = ': '+getcookie('Layer3_Home');

    document.getElementById('reflect1').innerHTML = ': '+getcookie('reflect1');
    document.getElementById('reflect2').innerHTML = ': '+getcookie('reflect2');
    document.getElementById('reflect3').innerHTML = ': '+getcookie('reflect3');
}