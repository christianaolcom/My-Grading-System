
    function showGrade(){
        var song = new Audio ("Audio/Curse.mp3")
        var song1 = new Audio ("Audio/Pass.mp3")
        var song2 = new Audio ("Audio/Good.mp3")
        var song3 = new Audio ("Audio/Laughing.mp3")
        var song4 = new Audio ("Audio/vivid.mp3")
        var song5 = new Audio ("Audio/Clap.mp3")
   
    var score = inp.value
    if (score  ==='') {
        result.value = 'Fill in the blank space'
        console.log(result.style);
        result.style.color = 'Darkred'
        
    }

     else if(score>=0 && score<=39){
        result.value = '"F"- Fail😥😥'
        console.log(result.style);
        result.style.color = 'Salmon'
        song.play()
    
       
    }else if(score>=40 && score<=44){
        result.value = '"E"- Pass😯😯'
         console.log(result.style);
         result.style.color = 'Red'
         song1.play()

    }else if(score>=45 && score<=49){
        result.value = '"D"- Good🙄🙄'
        console.log(result.style);
        result.style.color = 'Purple'
        song2.play()

    }else if(score>=50 && score<=59){
        result.value = '"C"- Credit😀😀'
        console.log(result.style);
        result.style.color = 'palevioletred'
        song3.play()

    }else if(score>=60 && score<=69){
        result.value = '"B"- Very Good😚😚'
        console.log(result.style);
        result.style.color = 'Brown'
        song4.play()

    }else if(score>=70 && score<=100){
        result.value = ' "A"- Exellent😍😍'
        console.log(result.style);
        result.style.color = 'Green'
        song5.play()

    }else{
        result.value = 'Invalid'
        console.log(result.style);
        result.style.color = 'Blue'
    }

    }

    

    






   
