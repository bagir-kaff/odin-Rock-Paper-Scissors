const choices = ['Rock','Paper','Scissors']
getComputerChoice = () => choices[Math.floor(Math.random()*3 +1)] //FUNCTION
let comp = getComputerChoice();
let human;

function play(cc,hc) { //cc = computer choice,hc = human choice
  hc = hc[0].toUpperCase() + hc.slice(1, hc.length).toLowerCase()
  human = hc;
  if (cc === 'Rock' && hc === 'Paper' || cc === 'Paper' && hc === 'Scissors' ||cc === 'Scissors' && hc === 'Rock' )
    return 1;

  else if (cc === 'Paper' && hc === 'Rock' || cc === 'Scissors' && hc === 'Paper' ||cc === 'Rock' && hc === 'Scissors' )
    return -1

  else
    return 0
   
}
function game(){
    let score = 0;
    let res;
    for(let i =0;i<5;i++){
        res = play(getComputerChoice(), prompt("input your choice"))
        score += res;
        if(res === 1) console.log(`You Won This Round, ${human} beats ${comp}`)
        else if (res === 0) console.log(`Its A Tie, ${comp} ties with ${human}`)
        else if (res === -1) console.log(`You Lose This Round, ${comp} beats ${human}`)
    }
    if (score>0){
        alert( "Yes You won! Againts Randomness")
    }
    else if (score === 0){
        alert( "you tied with randomness")
    }
    else
    alert( "you Lose againts randomness")
}

game()