import fs from "fs";

const matchers = fs
  .readFileSync("football.csv", "utf8")
  .split("\n")
  .map((row: string): string[] => {
    return row.split(",");
  });

let manUnitedWins = 0;

for (let match of matchers) {
  if (match[1] === "Man United" && match[5] === "H") {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === "A") {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
