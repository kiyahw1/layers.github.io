function summary(){
    document.getElementById('subject').innerHTML = getcookie('subject');
    document.getElementById('students').innerHTML = 
        getcookie('subject_1')+', '+getcookie('student_2')+', '+getcookie('student_3');
    document.getElementById('layer1').innerHTML = getcookie('Layer1_Home');
    document.getElementById('layer2').innerHTML = getcookie('Layer2_Home');
    document.getElementById('layer3').innerHTML = getcookie('Layer3_Home');
    document.getElementById('reflect1').innerHTML = getcookie('reflect1');
    document.getElementById('reflect2').innerHTML = getcookie('reflect2');
    document.getElementById('reflect3').innerHTML = getcookie('reflect3');
}