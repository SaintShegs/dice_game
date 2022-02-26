document.body.style.backgroundColor='Yellow'

// let player=document.querySelector('p')

// player.innerText = 'player 3'

// player 1




function refresh(){

    let randomNumber= Math.ceil(Math.random() *6) 
    console.log(randomNumber);
    
    let randomDiceImage='dice'+randomNumber+'.png'
    
    let randomImageSource= 'images/'+randomDiceImage
    
    let images=document.querySelectorAll('img')[0]
    
    images.setAttribute('src', randomImageSource)
    
    //Player2
    
    let randomNumber2= Math.ceil(Math.random() *6) 
    console.log(randomNumber2);
    
    let randomDiceImage2='dice'+randomNumber2+'.png'
    
    let randomImageSource2= 'images/'+randomDiceImage2
    
    let images2=document.querySelectorAll('img')[1] 
    images2.setAttribute('src', randomImageSource2)

    // let count=0
    // let countt=0
    // let player=document.body.querySelector('.player1')
    // let player2=document.body.querySelector('.player2')

    let winner=document.body.querySelector('.winner')

    if (randomNumber>randomNumber2) { 
        // count++
        // // continue
        // player.innerText=count
        winner.innerHTML='Player 1 wins🎈'

    }else if(randomNumber2>randomNumber){
        // countt++
        // player2.innerText=countt
        winner.innerHTML='Player 2 wins🎈🎈'
    }   
    else{
        winner.innerHTML='This is a Draw📍'
    }
}

let ref=document.body.querySelector('.btn')

ref.addEventListener('click', refresh)