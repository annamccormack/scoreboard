module.exports = {
  scorePlayer,
  calledYaniv,
  scoreLowest,
  indexOfLowest,
  scoreRound,
  scoreGame,
  gameEnd
}

function calledYaniv(player) {
  return player.calledYaniv
}

function scorePlayer(cards, yaniv) {
  let roundTotal = 0;
  for (let i = 0; i < cards.length; i++) {
    // Joker worth 0 if round winner else worth 25 
    if (cards[i] === 'JK') {
      if (!yaniv) {
        roundTotal += 25
      }
    } else if (cards[i] === 'A') {
      roundTotal += 1
    } else if (cards[i] === 'K' || cards[i] === 'Q' || cards[i] === 'J') {
      roundTotal += 10
    } else {
      roundTotal += cards[i]
    }
  }
  return roundTotal
}

function scorePlayers(players) {
  // find each players roundTotal
  let totals = []
  for (let i = 0; i < players.length; i++) {
    // get each players total and update roundTotal
    players[i].roundTotal = scorePlayer(players[i].cards, players[i].calledYaniv)
    totals.push(players[i].roundTotal)
  }
  return totals
}

function scoreRound(players) {
  let totals = scorePlayers(players)
  totals = scoreLowest(players, totals)
  return totals
}

function indexOfLowest(totals) {
  let index = 0
  let lowest = totals[index]
  for (var i = 1; i < totals.length; i++) {
    if (totals[i] <= lowest) {
      lowest = totals[i]
      index = i
    }
  }
  return index;
}

function scoreLowest(players, totals) {
  // check if player who called yaniv has the lowest roundTotal
  let lowestIndex = indexOfLowest(totals)
  for (let i = 0; i < players.length; i++) {
    if (calledYaniv(players[i]) && i !== lowestIndex) {
      players[i].roundTotal = 30
      totals.splice(i, 1, 30)
      // console.log('not lowest', players[i])
    } else if (i === lowestIndex) {
      players[lowestIndex].roundTotal = 0
      totals.splice(i, 1, 0)
      // console.log('lowest', players[lowestIndex])
    }
  }
  return totals 
}


function scoreGame() {
  // find each players gameTotal
}

function gameEnd() {
  // if any player goes over 100 points, game ends 
}


// const players = [
//   {
//     player: 'anna',
//     cards: [],
//     roundTotal: 0,
//     gameTotal: 0,
//     calledYaniv: false
//   }
// ]
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


