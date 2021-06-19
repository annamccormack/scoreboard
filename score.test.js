const { test, expect } = require('@jest/globals')
const { scorePlayer, calledYaniv } = require('./score')


// scorePlayer 
test('scorePlayer returns score for player who didnt call Yaniv', () => {
  //Arrange
  const hand = ['Q', 5 , 'A', 'JK']
  //Act
  const actual = scorePlayer(hand, false)
  const expected = 41
  //Asert
  expect(actual).toBe(expected)
})

test('scorePlayer returns score for player who called Yaniv', () => {
  //Arrange
  const hand = ['A', 'JK']
  //Act
  const actual = scorePlayer(hand, true)
  const expected = 1
  //Asert
  expect(actual).toBe(expected)
})

// calledYaniv
test('calledYaniv returns true if player called yaniv', () => {
  //Arrange
  const player = {
          player: 'anna',
          finalHand: ['2'],
          roundTotal: 0,
          gameTotal: 0,
          calledYaniv: true
        }
  
  //Act
  const actual = calledYaniv(player)
  //Asert
  expect(actual).toBeTruthy
})

test('calledYaniv returns false if player didnt call yaniv', () => {
  //Arrange
  const player = {
          player: 'clare',
          finalHand: ['2'],
          roundTotal: 0,
          gameTotal: 0,
          calledYaniv: false
        }
  
  //Act
  const actual = calledYaniv(player)
  //Asert
  expect(actual).toBeFalsy
})


// test('scoreRound ', () => {
//   //Arrange
//   const players = [
//     {
//       player: 'anna',
//       finalHand: ['2', '5'],
//       roundTotal: 0,
//       gameTotal: 0,
//       calledYaniv: false
//     },
//     {
//       player: 'clare',
//       finalHand: ['A'],
//       roundTotal: 0,
//       gameTotal: 0,
//       calledYaniv: true
//     }
//   ]
//   //Act
//   const actual = scoreRound(players)
//   const expected = [
//     {
//       player: 'anna',
//       finalHand: [],
//       roundTotal: 7,
//       gameTotal: 0,
//       calledYaniv: false
//     },
//     {
//       player: 'clare',
//       finalHand: [],
//       roundTotal: 0,
//       gameTotal: 0,
//       calledYaniv: false
//     }
//   ]
//   //Asert
//   expect(actual).toBe(expected)
// })

