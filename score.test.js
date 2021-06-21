const { test, expect } = require('@jest/globals')
const { 
  scorePlayer, 
  scorePlayers, 
  calledYaniv, 
  scoreRound, 
  indexesOfLowest, 
  scoreLowest, 
  scoreGame,
  resetRound,
  gameEnd,
  determineWinner
 } = require('./score')


// scorePlayer 
test('scorePlayer returns score for player who didnt call Yaniv', () => {
  //Arrange
  const cards = ['Q', 5 , 'A', 'JK']
  //Act
  const actual = scorePlayer(cards, false)
  const expected = 41
  //Asert
  expect(actual).toBe(expected)
})

test('scorePlayer returns score for player who called Yaniv', () => {
  //Arrange
  const cards = ['A', 'JK']
  //Act
  const actual = scorePlayer(cards, true)
  const expected = 1
  //Asert
  expect(actual).toBe(expected)
})

// calledYaniv
test('calledYaniv returns true if player called yaniv', () => {
  //Arrange
  let player = {
          player: 'anna',
          cards: ['2'],
          roundTotal: 0,
          gameTotal: 0,
          calledYaniv: true,
          lowest: false
        }
  
  //Act
  const actual = calledYaniv(player)
  //Asert
  expect(actual).toBeTruthy
})

//scoreRound
test('scoreRound provides the round totals for each player ', () => {
  //Arrange
  let players = [
    {
      name: 'anna',
      cards: [2, 5],
      roundTotal: 0,
      gameTotal: 0,
      calledYaniv: false,
      lowest: false
    },
    {
      name: 'clare',
      cards: ['A'],
      roundTotal: 0,
      gameTotal: 0,
      calledYaniv: true,
      lowest: false
    }
  ]
  //Act
  const actual = scoreRound(players)
  const expected = [7, 0]
  //Asert
  expect(actual).toStrictEqual(expected)
})

test('scoreRound, scores players correctly when player that called yaniv isnt the lowest', () => {
  //Arrange
  let players = [
    {
      name: 'dan',
      cards: [2],
      roundTotal: 2,
      gameTotal: 0,
      calledYaniv: false,
      lowest: false
    },
    {
      name: 'josh',
      cards: ['A', 2],
      roundTotal: 3,
      gameTotal: 0,
      calledYaniv: true,
      lowest: false
    }
  ]
  //Act
  const actual = scoreRound(players)
  const expected = [0, 30]
  //Asert
  expect(actual).toStrictEqual(expected)
})

// scorePlayers
test('scorePlayers returns totals of all players', () => {
  //Arrange
  const players = [
     {
      name: 'henry',
      cards: ['J', 10, 2],
      roundTotal: 0,
      gameTotal: 0,
      calledYaniv: false,
      lowest: false
    },
    {
      name: 'hamish',
      cards: ['A','A', 2],
      roundTotal: 0,
      gameTotal: 0,
      calledYaniv: true,
      lowest: false
    },
    {
      name: 'hannah',
      cards: [8, 2],
      roundTotal: 0,
      gameTotal: 0,
      calledYaniv: false,
      lowest: false
    }

  ]
  //Act
  const actual = scorePlayers(players)
  const expected = [22, 4, 10]
  //Asert
  expect(actual).toStrictEqual(expected)
})

//indexesOfLowest 
test('indexesOfLowest returns mutiple index of the players with the lowest scores', () => {
  //Arrange
  let players = [
     {
      name: 'Rachel',
      cards: [2, 2, 'A'],
      roundTotal: 5,
      gameTotal: 0,
      calledYaniv: false,
      lowest: false
    },
    {
      name: 'Ruben',
      cards: ['A', 'A'],
      roundTotal: 2,
      gameTotal: 0,
      calledYaniv: false,
      lowest: false
    },
    {
      name: 'Reece',
      cards: ['A', 2],
      roundTotal: 3,
      gameTotal: 0,
      calledYaniv: true,
      lowest: false
    },
    {
      name: 'Ruby',
      cards: [2],
      roundTotal: 2,
      gameTotal: 0,
      calledYaniv: true,
      lowest: false
    }
  ]
  const totals = [5, 2, 3, 2]
  //Act
  const actual = indexesOfLowest(totals, players)
  const expected = [1, 3]
  //Asert
  expect(actual).toStrictEqual(expected)
})

// scoreLowest
test('scoreLowest', () => {
  //Arrange
  let players = [
     {
      name: 'Ben',
      cards: ['A'],
      roundTotal: 1,
      gameTotal: 0,
      calledYaniv: false,
      lowest: false
    },
    {
      name: 'Sam',
      cards: [5, 3],
      roundTotal: 8,
      gameTotal: 0,
      calledYaniv: false,
      lowest: false
    },
     {
      name: 'Percy',
      cards: ['A'],
      roundTotal: 1,
      gameTotal: 0,
      calledYaniv: true,
      lowest: false
    }
  ]
  let totals = [1, 8, 1]
  //Act
  const actual = scoreLowest(players, totals)
  const expected = [0, 8, 30]
  //Asert
  expect(actual).toStrictEqual(expected)
})

// scoreGame
test('scoreGame runs game and returns the name of the winner', () => {
  //Arrange
  let players = [
    {
      name: 'Harry',
      cards: ['A'],
      roundTotal: 1,
      gameTotal: 120,
      calledYaniv: true,
      lowest: true
    },
    {
      name: 'Hilary',
      cards: [5, 3],
      roundTotal: 8,
      gameTotal: 90,
      calledYaniv: false,
      lowest: false
    },
  ]
  //Act
  const actual = scoreGame(players)
  const expected = 'Hilary'
  //Asert
  expect(actual).toStrictEqual(expected)
})

// resetRound
test('resetRound reset calledYaniv, lowest & cards & roundTotal after each round', () => {
  //Arrange
  let players = [
    {
      name: 'Adam',
      cards: ['A'],
      roundTotal: 1,
      gameTotal: 25,
      calledYaniv: true,
      lowest: true
    },
    {
      name: 'Eve',
      cards: [5, 3],
      roundTotal: 8,
      gameTotal: 55,
      calledYaniv: false,
      lowest: false
    },
  ]
  //Act
  const actual = resetRound(players)
  const expected = [
    {
      name: 'Adam',
      cards: [],
      roundTotal: 0,
      gameTotal: 25,
      calledYaniv: false,
      lowest: false
    },
    {
      name: 'Eve',
      cards: [],
      roundTotal: 0,
      gameTotal: 55,
      calledYaniv: false,
      lowest: false
    },
  ]
  //Asert
  expect(actual).toStrictEqual(expected)
})

//   gameEnd
test('gameEnd returns true when a players gameTotal higher than 100', () => {
  //Arrange
  let players = [
    {
      name: 'Gerald',
      cards: [5, 3],
      roundTotal: 8,
      gameTotal: 101,
      calledYaniv: false,
      lowest: false
    },
    {
      name: 'Ginni',
      cards: ['A'],
      roundTotal: 1,
      gameTotal: 40,
      calledYaniv: true,
      lowest: false
    }
  ]
  //Act
  const actual = gameEnd(players)
  const expected = true 
  //Asert
  expect(actual).toBe(expected)
})

// determineWinner
test('determineWinner returns the name winner based on final gameTotals', () => {
  //Arrange
  const finalScores = [50, 112]
  let players = [
    {
      name: 'Adam',
      cards: ['A'],
      roundTotal: 1,
      gameTotal: 50,
      calledYaniv: true,
      lowest: true
    },
    {
      name: 'Eve',
      cards: [5, 3],
      roundTotal: 8,
      gameTotal: 112,
      calledYaniv: false,
      lowest: false
    }
  ]
  //Act
  const actual = determineWinner(finalScores, players)
  const expected = 'Adam'
  //Asert
  expect(actual).toStrictEqual(expected)
})