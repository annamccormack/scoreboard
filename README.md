# scoreboard app
## Goal
Create an App that keeps score of a game of Yaniv
 
## MVP
- the user is able to set the number of players
- allow each user to set their player name

## Features
- Select how many players, and provide their names
- Add the current round player score to their total game score
- automatically adjust scores for special rules
- Display whos turn it is to deal for the round
- Display current leader
## Game
The objective of the game is to earn the fewest points in each round. The player with the fewest points at the end of the game is the winner.
## Points:
Joker: 10
Ace: 1
Numerical Card = 2-10
Face card = 10
 
## Rules
- Each player starts with 5 cards
- The goal is for a player to reduce their hand’s total
- Discarding sets of equal ranking cards and sets of consecutive cards of the same suit to effectively lower your hand value.
- Each round is complete when a player calls Yaniv. A player can only call yaniv when their cards total is 5 or less and they believe they have the lowest total.
- All players reveal their cards
 
## Scoring for each round:
- The player that calls Yaniv. If they have the lowest total they recieve 0 points. But if another player has a lower total, they get 30 points. ( the player that is the lowest hand total get 0 points instead)
- The other players card total is added to their game total.
- Game ends when a player's game total exceeds 100 points
## special rules
 
- If you win the round the joker = 0 pts
- But if you loose the round the joker = 25 pts
 
- if a players game total equals exactly 50, their game total goes back to 25
- if a players game total equals exactly 100, their game total goes back to 50
