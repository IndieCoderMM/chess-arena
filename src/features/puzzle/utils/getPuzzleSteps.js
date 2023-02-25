function startsWithNumber(str) {
  return /^\d/.test(str);
}

export default function getPuzzleSteps(pgn) {
  const result = pgn.split('\r\n\r\n')[1];
  const steps = result.split(' ');
  // console.log(steps.filter((v) => !startsWithNumber(v)));
  return steps.filter((v) => !startsWithNumber(v));
}
