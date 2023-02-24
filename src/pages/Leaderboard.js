import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTopPlayers } from '../redux/chess/chessSlice';
import Table from 'react-bootstrap/Table';
import styles from './Leaderboard.module.css';
import { Container } from 'react-bootstrap';

const Leaderboard = () => {
  const topPlayers = useSelector((state) => state.chess.leaderboardData);
  const status = useSelector((state) => state.chess.leaderboardStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') dispatch(getTopPlayers());
  }, [status, dispatch]);

  return (
    <div className={styles.container}>
      <h2>Leaderboard</h2>
      <Container>
        <Table striped bordered size="sm" responsive>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Profile</th>
              <th>Player</th>
              <th>Title</th>
              <th>Blitz Rating</th>
              <th>Win %</th>
            </tr>
          </thead>
          <tbody>
            {topPlayers.map((p) => (
              <tr key={p.player_id}>
                <td>{'# ' + p.rank}</td>
                <td>
                  <img src={p.avatar} width={40} alt={p.username} />
                </td>
                <td>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    title="View Profile"
                  >
                    {p.username}
                  </a>
                </td>
                <td>{p.title}</td>
                <td>{p.score}</td>
                <td>
                  {(
                    (p.win_count /
                      (p.win_count + p.loss_count + p.draw_count)) *
                    100
                  ).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Leaderboard;
