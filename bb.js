//random
function computerRandom() {
    const choices = ['rock', 'paper', 'scissors']
    const random = Math.floor(Math.random() * choices.length)
    return choices[random]
}


//scenarios
function playRound(playerSection, computerSection) {
    let plater = playerSection.toLowerCase()
if(plater == 'rock' && computerSection == 'paper') {
    return 'you lose! paper beats rock'
} 

else if(plater == 'paper' && computerSection == 'scissors') {
    return 'you lose! scissors beats paper'
}  

else if(plater == 'scissors' && computerSection == 'rock') {
    return 'you lose! rock beats scissors'
} 

else if(plater == 'rock' && computerSection == 'scissors') {
    return 'you won! rock beats scissors'
}  

else if(plater == 'scissors' && computerSection == 'paper') {
    return 'you won! scissors beats paper'
}  

else if(plater == 'paper' && computerSection == 'rock') {
    return 'you won! paper beats rock'
}  
else {
    return 'tie'
}
}



//connected to #dv, and #parent
const show = document.getElementById('dv')
const scores = document.getElementById('parent')

//created paragraphs and appended to parent
const paragraph1 = document.createElement('p')
const paragraph2 = document.createElement('p')
scores.append(paragraph1,paragraph2)

//local loops/scores
let round = 1
let computerScore = 0
let playerScore = 0


//actual game
function game(player1) {
//empty messages are for clearing previous answers
show.innerHTML=''
scores.innerHTML=''
//dom manipulation
show.innerHTML+= `round - ${round} <br>` 
let computer = computerRandom()
const result = playRound(player1,computer)
show.innerHTML+= `${result} <br>`

//tracking
if(result.includes('won')) {
    playerScore++
} 
else if(result.includes('lose')) {
    computerScore++
}

scores.innerHTML+= paragraph1.innerHTML = `computer score - ${computerScore} <br>`
scores.innerHTML+= paragraph2.innerHTML = `player score - ${playerScore} <br>`

if(round ===5) {
   restart()
} 
round++
}

//restart function
function restart() {
    if(playerScore>computerScore) {
        show.innerHTML+= 'congrats yay:)) <br>'
    } 
    else if(computerScore>playerScore) {
        show.innerHTML+= 'lost ehh:(()) <br>'
    } else {
        show.innerHTML+= 'friendship won <br>'
    }

    //default. back to normal
    setTimeout(() => {
        alert('restart')
  round = 1
 computerScore = 0
 playerScore = 0
 show.innerHTML = ''
 scores.innerHTML = ''
    }, 10);
}


//dom
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')


//event listeners
rock.addEventListener('click', () => game('rock'))

paper.addEventListener('click', () => game('paper'))

scissors.addEventListener('click', () => game('scissors'))