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
    document.getElementById("student1").src= "../assets/StudentCards/Layer1_"+random1;
    for (var i = 0; i<deck.length;i++){
        if(deck[i]===random1){
            deck.splice(i,1);
        }
    }

    //Sets cookie for student 1
    let cookievalue = random1 + ";";
    document.cookie = "student_1=" + cookievalue +"; path/";
    //document.write ("Setting Cookies: " + "entry.280846240=" + cookievalue);

    //Sets cookie for student 1 color
    if(random1 =='Dylan.png' || random1 == 'Lucy.png'){
        let color1 = 'Red.png;';
        document.cookie="color1="+ color1+"; path/"
    } else if (random1 =='Isabella.png' || random1 == 'Paris.png'){
        let color1='Yellow.png;';
        document.cookie="color1="+ color1+"; path/"
    } else if (random1 =='John.png' || random1 == 'Orlando.png' || random1 == 'Amanda.png'){
        let color1='Green.png;';
        document.cookie="color1="+ color1+"; path/"
    } else if (random1 =='Siobhan.png' || random1 == 'Tamika.png'){
        let color1='Blue.png;';
        document.cookie="color1="+ color1+"; path/"
    }
    

    //Selects student 2 and removes card from deck
    let random2=deck[Math.floor(Math.random()*deck.length)];
    document.getElementById("student2").src="../assets/StudentCards/Layer1_"+random2;
    for(var i = 0; i<deck.length;i++){
        if (deck[i]===random2){
           deck.splice(i,1);
       }
    }

    //Sets cookie for student 2
    cookievalue = random2 + ";";
    document.cookie = "student_2=" + cookievalue +"; path/";
    //document.write ("Setting Cookies: " + "entry.280846240=" + cookievalue);

    //Sets cookie for student 2 color
    if(random2 =='Dylan.png' || random2 == 'Lucy.png'){
        let color2 = 'Red.png;';
        document.cookie="color2="+ color2+"; path/"
    } else if (random2 =='Isabella.png' || random2== 'Paris.png'){
        let color2='Yellow.png;';
        document.cookie="color2="+ color2+"; path/"
    } else if (random2=='John.png' || random2 == 'Orlando.png' || random2== 'Amanda.png'){
        let color2='Green.png;';
        document.cookie="color2="+ color2+"; path/"
    } else if (random2 =='Siobhan.png' || random2 == 'Tamika.png'){
        let color2='Blue.png;';
        document.cookie="color2="+ color2+"; path/"
    }

    //Selects student 3
    let random3=deck[Math.floor(Math.random()*deck.length)];
    document.getElementById("student3").src="../assets/StudentCards/Layer1_"+random3;
    
    //Sets cookie for student 3
    cookievalue = random3 + ";";
    document.cookie = "student_3=" + cookievalue +"; path/";
    //document.write ("Setting Cookies: " + "entry.280846240=" + cookievalue);

     //Sets cookie for student 3 color
     if(random3 =='Dylan.png' || random3 == 'Lucy.png'){
        let color3 = 'Red.png;';
        document.cookie="color3="+ color3+"; path/"
    } else if (random3 =='Isabella.png' || random3== 'Paris.png'){
        let color3='Yellow.png;';
        document.cookie="color3="+ color3+"; path/"
    } else if (random3=='John.png' || random3 == 'Orlando.png' || random3== 'Amanda.png'){
        let color3='Green.png;';
        document.cookie="color3="+ color3+"; path/"
    } else if (random3 =='Siobhan.png' || random3 == 'Tamika.png'){
        let color3='Blue.png;';
        document.cookie="color3="+ color3+"; path/"
    }

    //Updates instructions, next button, and draw student button
    document.getElementById("Body").innerHTML="These are your focal students for this round. Each student card has 3 layers, with Layer 1 starting on the top as the shortest layer, and Layer 3 as the longest layer at the bottom.";
    document.getElementById('studentNext').style.display = 'block';
    document.getElementById("studentDraw").style.display = 'none';
 alert('better colored')
}


    

   