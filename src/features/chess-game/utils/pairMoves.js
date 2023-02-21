export default function pairMoves(moves) {
  const paired = [];
  for (let i = 0; i < moves.length; i += 2) {
    const move = moves[i + 1] ? moves[i] + ',' + moves[i + 1] : moves[i];
    paired.push(move);
  }
  return paired;
}
