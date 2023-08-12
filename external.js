function getComputerChoice(){
    let rand = Math.floor(Math.random()*3 +1)
    if (rand === 1) return "Rock"
    else if (rand === 2) return "Paper"
    return "Scissors"
}
console.log(getComputerChoice())