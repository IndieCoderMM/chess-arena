const VALUES = {
  p: 1,
  b: 4,
  n: 3,
  r: 5,
  q: 9,
  k: 100,
};

export default function evaluateFen(fen) {
  let evalResult = 0;
  for (const c of fen.split(' ')[0]) {
    if ('pbrnqk'.includes(c.toLowerCase())) {
      if (c === c.toLowerCase()) {
        evalResult -= VALUES[c];
      } else {
        evalResult += VALUES[c.toLowerCase()];
      }
    }
  }
  return evalResult;
}
