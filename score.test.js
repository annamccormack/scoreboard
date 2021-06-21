const { test, expect } = require('@jest/globals')
let playersA = require('./data/playersA')
let playersB = require('./data/playersB')
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

describe('calledYaniv', () => {
  test('returns true if player called yaniv', () => {
    //Arrange
    const player = playersA[0]
    //Act
    const actual = calledYaniv(player)
    //assert
    expect(actual).toBeTruthy
  })
})

describe('scorePlayer', () => {
  test('scores correct player who didnt call Yaniv', () => {
    //Arrange
    const cards = ['Q', 5, 'A', 'JK']
    //Act
    const actual = scorePlayer(cards, false)
    const expected = 41
    //assert
    expect(actual).toBe(expected)
  })

  test('scores correct player who did call Yaniv', () => {
    //Arrange
    const cards = ['A', 'JK']
    //Act
    const actual = scorePlayer(cards, true)
    const expected = 1
    //assert
    expect(actual).toBe(expected)
  })
})

describe('scorePlayers', () => {
  test('returns totals of all players', () => {
    //Arrange
    const players = playersA
    //Act
    const actual = scorePlayers(players)
    const expected = [2, 10, 15, 22]
    //assert
    expect(actual).toStrictEqual(expected)
  })
})

describe('indexesOfLowest', () => {
  test('returns an array of index(s) of the player(s) with the lowest round totals', () => {
    //Arrange
    let players = playersB
    const totals = [2, 10, 35, 2, 6]
    //Act
    const actual = indexesOfLowest(totals, players)
    const expected = [0, 3]
    //assert
    expect(actual).toStrictEqual(expected)
  })
})

describe('scoreLowest', () => {
  test('adjusts scores of players with the lowest roundTotal depending on who called yaniv', () => {
    //Arrange
    let players = playersB
    const totals = [2, 10, 35, 2, 6]
    //Act
    const actual = scoreLowest(players, totals)
    const expected = [0, 10, 35, 30, 6]
    //assert
    expect(actual).toStrictEqual(expected)
  })
})

describe('scoreRound', () => {
  test('provides the round totals for each player ', () => {
    //Arrange
    let players = playersA
    //Act
    const actual = scoreRound(players)
    const expected = [0, 10, 15, 22]
    //assert
    expect(actual).toStrictEqual(expected)
  })

  test('scores players correctly when player that called yaniv isnt the lowest', () => {
    //Arrange
    let players = playersB
    //Act
    const actual = scoreRound(players)
    const expected = [0, 10, 35, 30, 6]
    //assert
    expect(actual).toStrictEqual(expected)
  })
})

describe('scoreGame', () => {
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
})

describe('resetRound', () => {
  test('resets calledYaniv, lowest, cards & roundTotal after each round', () => {
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
      }
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
      }
    ]
    //assert
    expect(actual).toStrictEqual(expected)
  })
})


describe('gameEnd', () => {
  test('returns true when a players gameTotal is higher than 100', () => {
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
    //assert
    expect(actual).toBe(expected)
  })
})

describe('determineWinner', () => {
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
    //assert
    expect(actual).toStrictEqual(expected)
  })
})