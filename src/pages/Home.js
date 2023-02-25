import React from 'react';
import Container from 'react-bootstrap/Container';
import FeatureCard from '../features/dashboard/components/FeatureCard';
import ProfileBar from '../features/dashboard/components/ProfileBar';
import { FaChessKnight, FaTrophy } from 'react-icons/fa';
import { FcPuzzle, FcElectronics } from 'react-icons/fc';

import { Col, Row } from 'react-bootstrap';
import styles from './Home.module.css';
import MatchesTable from '../features/dashboard/components/MatchesTable';

const features = [
  {
    title: 'Play Online',
    icon: <FaChessKnight style={{ color: 'white' }} />,
    path: '/play/online',
  },
  {
    title: 'Solve Puzzle',
    icon: <FcPuzzle />,
    path: '/puzzle',
  },
  {
    title: 'Vs Computer',
    icon: <FcElectronics />,
    path: '/practice/vsai',
  },
  {
    title: 'Top Players',
    icon: <FaTrophy style={{ color: 'gold' }} />,
    path: '/leaderboard',
  },
];

const matches = [
  {
    type: 'blitz',
    players: ['Jim', 'You'],
    result: 1,
    moves: 34,
    date: '9 Mar 2023',
  },
  {
    type: 'bullet',
    players: ['You', 'Alex'],
    result: -1,
    moves: 36,
    date: '1 Feb 2023',
  },
  {
    type: 'classic',
    players: ['Bob', 'You'],
    result: 0,
    moves: 16,
    date: '19 Jan 2023',
  },
  {
    type: 'blitz',
    players: ['Jim', 'You'],
    result: 1,
    moves: 22,
    date: '9 Jan 2023',
  },
];

const Home = () => {
  return (
    <div className={styles.container}>
      <Container>
        <ProfileBar />
        <Container className="p-3">
          <Row md={4}>
            {features.map((i) => (
              <Col key={i.title} className="p-2">
                <FeatureCard icon={i.icon} title={i.title} path={i.path} />
              </Col>
            ))}
          </Row>
        </Container>
        <Container>
          <h3 className="text-light">Recent Matches</h3>
          <MatchesTable matches={matches} />
        </Container>
      </Container>
    </div>
  );
};

export default Home;
