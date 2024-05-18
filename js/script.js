let p1name      = document.querySelector('.p1name')
let name1error  = document.querySelector('.name1error')
let name1in     = document.querySelector('.name1in')
let name1btn    = document.querySelector('.name1btn')
let p2name      = document.querySelector('.p2name')
let name2error  = document.querySelector('.name2error')
let name2in     = document.querySelector('.name2in')
let name2btn    = document.querySelector('.name2btn')
let welcome     = document.querySelector('.welcome')
let play        = document.querySelector('.play')
let hints       = document.querySelector('.hints')
let speech      = document.querySelector('.speech')
let show        = document.querySelector('.show')
let attempts    = document.querySelector('.attempts')
let player1     = document.querySelector('.player1')
let p1input     = document.querySelector('.p1input')
let p1button    = document.querySelector('.p1button')
let player2     = document.querySelector('.player2')
let p2input     = document.querySelector('.p2input')
let p2button    = document.querySelector('.p2button')
let i           = 5
//==========welcome=========//
play.addEventListener('click',()=>{
    welcome.style.display='none'
    p1name.style.display ='flex'

})
//========player 1 name========//
name1btn.addEventListener('click',()=>{
    if(name1in.value ==''){
        name1error.innerHTML = 'Please enter a name'
    }
    else{
        name1error.innerHTML = '';
        p1name.style.display = 'none';
        p2name.style.display = 'flex';
        show.innerHTML = name1in.value;
    }
})
//=========player 2 name====//
name2btn.addEventListener('click',()=>{
    if(name2in.value ==''){
        name2error.innerHTML = 'Please enter a name'
    }
    else{
        name2error.innerHTML = '';
        p2name.style.display = 'none'
        player1.style.display='flex'
        hints.style.display  ='flex'
    }
})



//=======player 1 info=========//
p1button.addEventListener('click',()=>{
    if(p1input.value ==''){
        speech.innerHTML = 'Enter a number'
    }else{
        speech.innerHTML = ''
    
    if(p1input.value>20||p1input.value<0){
        speech.innerHTML = 'Enter number between 1 to 20' ;
    }else{
        speech.innerHTML       ='' ;
        show.innerHTML         = name2in.value;
        player1.style.display  = 'none';
        player2.style.display  = 'flex'; // Set display to flex here
        attempts.style.display = 'flex';

    }

 }

})  

//======= Player 2 info=========//
p2button.addEventListener('click', () => {
    if (p2input.value == '') {
        speech.innerHTML = 'Guess a number';
    } else if (p2input.value > 20 || p2input.value < 0) {
        speech.innerHTML = 'Guess the number between 1 to 20';
    } else { 
        speech.innerHTML = '';
       
        //===== Check for win====
        if (p2input.value == p1input.value) {
            show.innerHTML = name2in.value;
            speech.innerHTML = 'you win';
            player2.style.display = 'none';
            attempts.style.display = 'none';
        } else {
            speech.innerHTML = ''; 
        }
        
        // Decrease attempts====
        i--;
        attempts.innerHTML = 'Attempt left :' + i;
        
        //attempts finished=====
        if(i == 0) {
            show.innerHTML = name2in.value ;
            player2.style.display = 'none';
            attempts.style.display = 'none';
            speech.innerHTML = 'you lost!!!better luck next time';
        } else if (i == 2) {
            attempts.style.color = 'red';
        }
    }
});
