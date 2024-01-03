function computerRandom() {
    const choices = ['rock', 'paper', 'scissors']
    const random = Math.floor(Math.random() * choices.length)
    return choices[random]
}

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



const show = document.getElementById('dv')
const scores = document.getElementById('parent')
const paragraph1 = document.createElement('p')
const paragraph2 = document.createElement('p')
scores.append(paragraph1,paragraph2)

let round = 1
let computerScore = 0
let playerScore = 0

function game(player1) {
show.innerHTML=''
scores.innerHTML=''
show.innerHTML+= `round - ${round} <br>` 
let computer = computerRandom()
const result = playRound(player1,computer)
show.innerHTML+= `${result} <br>`

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

function restart() {
    if(playerScore>computerScore) {
        show.innerHTML+= 'congrats yay:)) <br>'
    } 
    else if(computerScore>playerScore) {
        show.innerHTML+= 'lost ehh:(()) <br>'
    } else {
        show.innerHTML+= 'friendship won <br>'
    }

    setTimeout(() => {
        alert('restart')
  round = 1
 computerScore = 0
 playerScore = 0
 show.innerHTML = ''
 scores.innerHTML = ''
    }, 10);
}


const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

rock.addEventListener('click', () => game('rock'))

paper.addEventListener('click', () => game('paper'))

scissors.addEventListener('click', () => game('scissors'))