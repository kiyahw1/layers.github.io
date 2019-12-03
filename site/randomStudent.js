function drawStudents(){
    let deck = new Array('Siobhan.png', 
    'Dylan.png',
    'Isabella.png',
    'John.png', 
    'Tamika.png',
    'Amanda.png',
    'Lucy.png',
    'Orlando.png',
    'Paris.png');

    //Selects student 1 and removes card from deck
    let random1=deck[Math.floor(Math.random()*deck.length)];
    document.getElementById("student1").src= "../assets/StudentCards/"+random1;
    for (var i = 0; i<deck.length;i++){
        if(deck[i]===random1){
            deck.splice(i,1);
        }
    }

    //Sets cookie for student 1
    let cookievalue = random1 + ";";
    document.cookie = "student_1=" + cookievalue +"; path/";
    //document.write ("Setting Cookies: " + "entry.280846240=" + cookievalue);

    //Selects student 2 and removes card from deck
    let random2=deck[Math.floor(Math.random()*deck.length)];
    document.getElementById("student2").src="../assets/StudentCards/"+random2;
    for(var i = 0; i<deck.length;i++){
        if (deck[i]===random2){
           deck.splice(i,1);
       }
    }

    //Sets cookie for student 2
    cookievalue = random2 + ";";
    document.cookie = "student_2=" + cookievalue +"; path/";
    //document.write ("Setting Cookies: " + "entry.280846240=" + cookievalue);

    //Selects student 3
    let random3=deck[Math.floor(Math.random()*deck.length)];
    document.getElementById("student3").src="../assets/StudentCards/"+random3;
    
    //Sets cookie for student 3
    cookievalue = random3 + ";";
    document.cookie = "student_3=" + cookievalue +"; path/";
    //document.write ("Setting Cookies: " + "entry.280846240=" + cookievalue);

    //Updates instructions, next button, and draw student button
    document.getElementById("Body").innerHTML="These are your focal students for this round. Each student card has 3 layers, with Layer 1 starting on the top as the shortest layer, and Layer 3 as the longest layer at the bottom.";
    document.getElementById('studentNext').style.visibility = 'visible';
    document.getElementById("studentDraw").value = 'Redraw Student Cards';

   let cook=document.cookie;
   alert(cook)
}