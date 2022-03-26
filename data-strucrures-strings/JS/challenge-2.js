'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...players) {
    console.log(`${players.length} goals were scored`);
  },
};

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

for (let i = 0; i < game.scored.length; i++)
  console.log(`Goal ${i + 1}: ${game.scored[i]}`);

// 2. Use a loop to calculate the average odd and log it to the console

let odd = 0;
const values = Object.values(game.odds);
for (let i = 0; i < values.length; i++) odd += values[i] / values.length;
console.log(`Odd is: ${odd}`);

// 3. Print the 3 odds to the console, but in a nice formatted way
for (const [team, odd] of Object.entries(game.odds)) {
  const teamString = team === 'x' ? 'draw' : `victory of ${game[team]}`;
  console.log(`Odd of ${teamString}: ${odd}`);
}
