export default function getPuzzleSteps(pgn) {
  const result = pgn.split('1. ')[1];
  const steps = result.split(' ');
  return steps.filter((v, i) => (i + 1) % 3);
}
