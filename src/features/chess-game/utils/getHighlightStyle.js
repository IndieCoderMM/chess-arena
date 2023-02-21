const YELLOW = 'rgba(255,235,59,0.5)';
const PINK = 'rgba(233, 30, 99, 0.5)';
const BLUE = 'rgba(3, 169, 244, 0.5)';

export default function getHighlightStyle(squares, selected, lastMove) {
  const bgStyle = (color) => ({ backgroundColor: color });

  return {
    [lastMove]: bgStyle(BLUE),
    ...squares.reduce?.((obj, i) => ({ ...obj, [i]: bgStyle(YELLOW) }), {}),
    [selected]: bgStyle(PINK),
  };
}
