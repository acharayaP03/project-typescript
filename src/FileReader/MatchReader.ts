import { MatchResult, MatchData } from "../typings/index.ts";
import { dateStringToDate } from "../utils/utils.ts";
import { CsvReader } from "./CsvReader.ts";

export class MatchReader extends CsvReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
