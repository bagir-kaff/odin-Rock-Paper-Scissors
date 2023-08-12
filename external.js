function getComputerChoice(){
  let rand = Math.floor(Math.random()*3 +1)
  if (rand === 1) return "Rock"
  else if (rand === 2) return "Paper"
  return "Scissors"
}
let compcho = getComputerChoice();

function play(cc,hc) { //cc = computer choice,hc = human choice
  hc = hc[0].toUpperCase() + hc.slice(1, hc.length).toLowerCase()
  if (cc === 'Rock' && hc === 'Paper' || cc === 'Paper' && hc === 'Scissors' ||cc === 'Scissors' && hc === 'Rock' ){
    return `You Won This Round, ${hc} beats ${cc}`
  }

  else if (cc === 'Paper' && hc === 'Rock' || cc === 'Scissors' && hc === 'Paper' ||cc === 'Rock' && hc === 'Scissors' ){
    return `You Lose This Round, ${cc} beats ${hc}`
  }
  else{
    return `Its A Tie, ${cc} ties with ${hc}`
  }
   
}
console.log(play(getComputerChoice(compcho),"roCk"))