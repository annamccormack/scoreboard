const { test, expect } = require('@jest/globals')
const { scorePlayer, scorePlayers, calledYaniv, scoreRound, indexOfLowest, scoreLowest } = require('./score')


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
  const player = {
          player: 'anna',
          cards: ['2'],
          roundTotal: 0,
          gameTotal: 0,
          calledYaniv: true
        }
  
  //Act
  const actual = calledYaniv(player)
  //Asert
  expect(actual).toBeTruthy
})

test('scoreRound provides the round totals for each player ', () => {
  //Arrange
  const players = [
    {
      name: 'anna',
      cards: [2, 5],
      roundTotal: 0,
      gameTotal: 0,
      calledYaniv: false
    },
    {
      name: 'clare',
      cards: ['A'],
      roundTotal: 0,
      gameTotal: 0,
      calledYaniv: true
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
  const players = [
    {
      name: 'dan',
      cards: [2],
      roundTotal: 0,
      gameTotal: 0,
      calledYaniv: false
    },
    {
      name: 'josh',
      cards: ['A', 2],
      roundTotal: 0,
      gameTotal: 0,
      calledYaniv: true
    }
  ]
  //Act
  const actual = scoreRound(players)
  const expected = [0, 30]
  //Asert
  expect(actual).toStrictEqual(expected)
})

// scorePlayers

// indexOfLowest 
test('indexOfLowest returns the lowest score', () => {
  //Arrange
  const totals = [5, 2, 3]
  //Act
  const actual = indexOfLowest(totals)
  const expected = 1
  //Asert
  expect(actual).toBe(expected)
})

// scoreLowest