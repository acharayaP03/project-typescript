import { MatchReader } from "./FileReader/MatchReader.ts";
import { MatchResult } from "./typings/index.ts";

const csvReader = new MatchReader("football.csv");
csvReader.read();

// let manUnitedWins = 0;

// for (let match of matchers) {
//   if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
//     manUnitedWins++;
//   } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
//     manUnitedWins++;
//   }
// }

const manUnitedWins = csvReader.data.reduce((acc, match) => {
  if (
    (match[1] === "Man United" && match[5] === MatchResult.HomeWin) ||
    (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
  ) {
    return acc + 1;
  }
  return acc;
}, 0);

console.log(`Man United won ${manUnitedWins} games`);
