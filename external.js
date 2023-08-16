const choices = ['Rock','Paper','Scissors'];
getComputerChoice = () => choices[Math.floor(Math.random()*3 )]; //FUNCTION
let comp, //computer choice
human, //human choice
compScore = 0,
humanScore = 0;
const result = document.querySelector('.result');
const hchoices = document.querySelectorAll('.btn');
const hs = document.querySelector('.human'); //scoring 
const cs = document.querySelector('.comp'); //scoring


function win(cc,hc) { //cc = computer choice,hc = human choice choose the winner
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

function play(){
  if(compScore <5 && humanScore <5){//stop after computer/human win
    comp = getComputerChoice();
    human = this.getAttribute('data-choice');
    win(comp,human);//compare the choices
    // console.log()
    }
}

hchoices.forEach(ch => {
  ch.addEventListener('click',play); //put listener on every .btn
});
