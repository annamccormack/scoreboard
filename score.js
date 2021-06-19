module.exports = {
  scorePlayer, 
  calledYaniv,
  lowestRoundTotal,
  scoreRound,
  scoreGame,
  gameEnd
}

function calledYaniv (player) {
  return player.calledYaniv
}

function scorePlayer(hand, yaniv) {
  let roundTotal = 0;
  for (let i =0; i < hand.length; i++) {
    if (hand[i] === 'JK') {
      if (!yaniv) {
      roundTotal += 25
      }
    } else if (hand[i] === 'A') {
      roundTotal += 1
    } else if (hand[i] === 'K' || hand[i] === 'Q' || hand[i] === 'J') {
      roundTotal += 10
    } else {
      roundTotal += hand[i]
    }
  }
  return roundTotal
}

function scoreRound (players) {
// find each players roundTotal
players.forEach(player => {
  console.log(player.finalHand)
})
}

function lowestRoundTotal () {
  // find the player with the lowest roundTotal
}

function scoreGame () {
// find each players gameTotal
}

function gameEnd () {
  // if any player goes over 100 points, game ends 
}


const players = [
  {
    player: 'anna',
    finalHand: [],
    roundTotal: 0,
    gameTotal: 0,
    calledYaniv: false
  }
]
// roundTotal and calledYaniv are reset each round


// 1. score a round (one person)
// 2. score a round (all players)
// 3. keep track of players total score each round
// 4. determine winner 

// functions: 
// find each players roundTotal
// who calledYaniv ?
// find the player with the lowest roundTotal
// does the person who called Yaniv have the lowest roundTotal ? ...
// add each players roundTotal to gameTotal

// points
// Joker: 10 Ace: 1 Numerical Card = 2-10 Face card = 10
// If you win the round the joker = 0 pts
// But if you loose the round the joker = 25 pts
// if a players game total equals exactly 50, their game total goes back to 25
// if a players game total equals exactly 100, their game total goes back to 50

