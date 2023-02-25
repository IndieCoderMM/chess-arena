import React from 'react';
import Container from 'react-bootstrap/Container';
import FeatureCard from '../features/dashboard/components/FeatureCard';
import ProfileBar from '../features/dashboard/components/ProfileBar';
import {
  FaChessKnight,
  FaEquals,
  FaTrophy,
  FaWindowClose,
} from 'react-icons/fa';
import { FcPuzzle, FcElectronics } from 'react-icons/fc';
import {
  BsClockFill,
  BsFillCheckCircleFill,
  BsLightning,
} from 'react-icons/bs';
import { GiRabbit } from 'react-icons/gi';
import { Col, Row, Table } from 'react-bootstrap';
import styles from './Home.module.css';
import { BiRocket } from 'react-icons/bi';

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
          <Table variant="dark" responsive>
            <thead>
              <tr>
                <th>
                  <BsClockFill />
                </th>
                <th>Players</th>
                <th>Result</th>
                <th>Moves</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((m) => (
                <tr key={m.players + m.moves}>
                  <td style={{ color: 'var(--bs-yellow)' }}>
                    {m.type === 'blitz' ? (
                      <BiRocket />
                    ) : (
                      (m.type = 'bullet' ? <BsLightning /> : <GiRabbit />)
                    )}
                  </td>
                  <td>{`${m.players[0]} vs ${m.players[1]}`}</td>
                  <td>
                    {m.result === 1 ? (
                      <BsFillCheckCircleFill
                        style={{ color: 'var(--bs-teal)' }}
                      />
                    ) : m.result === 0 ? (
                      <FaEquals style={{ color: 'var(--bs-orange)' }} />
                    ) : (
                      <FaWindowClose style={{ color: 'var(--bs-red)' }} />
                    )}
                  </td>
                  <td>{m.moves}</td>
                  <td>{m.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </Container>
    </div>
  );
};

export default Home;
