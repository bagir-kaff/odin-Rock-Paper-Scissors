const choices = ['Rock','Paper','Scissors'];
getComputerChoice = () => choices[Math.floor(Math.random()*3 )]; //FUNCTION
let comp,
human,
compScore = 0,
humanScore = 0;
const result = document.querySelector('.result');
const hs = document.querySelector('.human');
const cs = document.querySelector('.comp'); 
const hchoices = document.querySelectorAll('.btn');

function play(){
  if(compScore <5 && humanScore <5){
  comp = getComputerChoice();
  human = this.getAttribute('data-choice');
  win(comp,human);
  console.log()
  }
}
hchoices.forEach(ch => {
  ch.addEventListener('click',play);
});

function win(cc,hc) { //cc = computer choice,hc = human choice
  if (cc === 'Rock' && hc === 'Paper' || cc === 'Paper' && hc === 'Scissors' ||cc === 'Scissors' && hc === 'Rock' ){
    hs.textContent = `Human: ${++humanScore}`;
    result.textContent = `You Won This Round, ${hc} beats ${cc}`;
  }
  else if (cc === 'Paper' && hc === 'Rock' || cc === 'Scissors' && hc === 'Paper' ||cc === 'Rock' && hc === 'Scissors' ){
    cs.textContent = `Computer: ${++compScore}`;
    result.textContent = `You Lose This Round, ${cc} beats ${hc}`;
  }
  else if ((cc === 'Paper' && hc === 'Paper' || cc === 'Scissors' && hc === 'Scissors' ||cc === 'Rock' && hc === 'Rock' ))
    result.textContent = `Its A Tie, ${cc} ties with ${hc}`;
  else
    result.textContent =`something is wrong (testing only)`
}

function game(){
    let score = 0;
    let res;
        // human = prompt("input your choice");
        // human = human[0].toUpperCase() + human.slice(1, human.length).toLowerCase()
        // if ((human === 'Rock' ||human === 'Scissors' ||human === 'Paper' )){break}
        // alert("wrong input!")
    // }
        res = play(getComputerChoice(),human)
        score += res;
        if(res === 1) console.log(`You Won This Round, ${human} beats ${comp}`)
        else if (res === 0) console.log(`Its A Tie, ${comp} ties with ${human}`)
        else if (res === -1) console.log(`You Lose This Round, ${comp} beats ${human}`)
    
    if (score>0){
        // alert( "Yes You won! Againts Randomness")
    }
    else if (score === 0){
        // alert( "you tied with randomness")
    }
    else{
    // alert( "you Lose againts randomness")
    }
  }

// game()