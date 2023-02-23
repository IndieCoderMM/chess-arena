export default function getPuzzleSteps(pgn) {
  const result = pgn.split('\r\n\r\n')[1];
  const steps = result.split(' ');
  return steps.slice(1).filter((v, i) => (i + 1) % 3);
}
