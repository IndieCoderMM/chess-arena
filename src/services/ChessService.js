import axios from 'axios';

const BASE_URL = 'https://api.chess.com/pub';

const getDailyPuzzle = () => axios.get(BASE_URL + '/puzzle');

const getLeaderboards = () => axios.get(BASE_URL + '/leaderboards');

const Service = { getDailyPuzzle, getLeaderboards };

export default Service;
