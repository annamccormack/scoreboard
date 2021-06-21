module.exports = {
  scorePlayer,
  scorePlayers,
  calledYaniv,
  scoreLowest,
  indexesOfLowest,
  scoreRound,
  scoreGame,
  gameEnd,
  resetRound,
  determineWinner
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
  for (let i = 0; i < players.length; i++) {
    // update gameTotal of each player
    players[i].gameTotal += players[i].roundTotal

    // players gametotal === 50, update gameTotal = 25
    // players gametotal === 100, update gameTotal = 50
    if (players[i].gameTotal === 100) {
      players[i].gameTotal = 50
    } else if (players[i].gameTotal === 50) {
      players[i].gameTotal = 25
    }
  }
  return totals
}

function indexesOfLowest(totals, players) {
  let indexes =[]
  let lowest = Math.min.apply(Math, totals)
  totals.forEach((item, idx) => {
    if(item === lowest) {
      players[idx].lowest = true
      indexes.push(idx)
    }
  })
  
  return indexes;
}

function scoreLowest(players, totals) {
  let indexes = indexesOfLowest(totals, players)
  for (let i = 0; i < players.length; i++) {
    // if player called yaniv &
    if (players[i].calledYaniv) {
      // is not lowest, total = 30
      if (indexes.length !== 1 || !players[i].lowest) {
        players[i].roundTotal = 30
        totals.splice(i, 1, 30)
      } else {
        // is lowest, total = 0
        players[i].roundTotal = 0
        totals.splice(i, 1, 0)
      }
    } else {
    // if player didnt call yaniv & is lowest, total = 0
      if (players[i].lowest) {
        players[i].roundTotal = 0
        totals.splice(i, 1, 0)
      }
    }
  }  
  return totals 
}


function scoreGame(players) {
  let rounds = 0
  while (gameEnd(players) == false){
    scoreRound(players)
    resetRound(players)
    rounds++
  }
  let finalScores = []
  players.forEach(player => {
    finalScores.push(player.gameTotal)
  })
  const winner = determineWinner(finalScores, players)
  return winner
}

 // before each round reset calledYaniv, lowest & cards & roundTotal 
function resetRound (players) {
  for (let i = 0; i < players.length; i++) {
    players[i].calledYaniv = false
    players[i].lowest = false
    players[i].cards = []
    players[i].roundTotal = 0
}
return players
}

function gameEnd(players) {
  // if any player goes over 100 points, game ends 
  let overHundred = players.find(player => player.gameTotal > 100)
  if (overHundred !== undefined) {
    return true
  } else {
    return false
  }
}

function determineWinner (finalScores, players) {
  let lowest = Math.min.apply(Math, finalScores)
  const winner = players.find(player => player.gameTotal === lowest)
  return winner.name
}

