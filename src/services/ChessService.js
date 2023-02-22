import axios from 'axios';

const getDailyPuzzle = () => axios.get('https://api.chess.com/pub/puzzle');

const Service = { getDailyPuzzle };

export default Service;
