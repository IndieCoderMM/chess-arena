const YELLOW = 'rgba(255,235,59,0.5)';
const PINK = 'rgba(233, 30, 99, 0.5)';

export default function getHighlightStyle(squares, selected) {
  const bgStyle = (color) => ({ backgroundColor: color });

  return {
    ...squares.reduce?.((obj, i) => ({ ...obj, [i]: bgStyle(YELLOW) }), {}),
    [selected]: bgStyle(PINK),
  };
}
