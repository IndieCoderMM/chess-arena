function convertMoveToSquare(move) {
  // Pawn moves (e4, c5)
  if (move.length === 2) return move;
  // Removing # from checkmates
  if (move.endsWith('#')) move = move.slice(0, move.length - 1);
  if (move.length === 3) {
    // Pawn Checks (e7+, f2+)
    if (move.includes('+')) return move.slice(0, 2);
    // Piece moves (Ke2, Ng3)
    return move.slice(1);
  }
  if (move.length === 4) {
    // Captures (Qxd5)
    if (move.includes('x')) return move.slice(2);
    // Checks (Qe4+, Nb2+)
    if (move.includes('+')) return move.slice(1, 3);
    // Promotions (b8=Q, c1=N)
    if (move.includes('=')) return move.slice(0, 2);
  }
  if (move.length === 5) {
    // Promotion Checks (d8=Q+)
    if (move.includes('=')) return move.slice(0, 2);
    // Pawn Capture Checks (exd2+)
    return move.slice(2, 4);
  }
  if (move.length === 6) {
    // Capture Promotion Checks (bxa8=Q+)
    if (move.includes('+')) return move.slice(2, 4);
    // Capture Promotions (bxa8=N)
    return move.slice(2, 4);
  }
}

export default function parseSquares(moves) {
  const squares = [];
  moves.forEach((move) => {
    squares.push(convertMoveToSquare(move));
  });
  return squares;
}
