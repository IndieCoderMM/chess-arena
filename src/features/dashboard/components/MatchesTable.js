import React from 'react';
import Table from 'react-bootstrap/Table';
import {
  BsClockFill,
  BsFillCheckCircleFill,
  BsLightning,
} from 'react-icons/bs';
import { FaWindowClose, FaEquals } from 'react-icons/fa';
import { GiRabbit } from 'react-icons/gi';
import { BiRocket } from 'react-icons/bi';
import PropTypes from 'prop-types';

const MatchesTable = ({ matches }) => {
  return (
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
                <BsFillCheckCircleFill style={{ color: 'var(--bs-teal)' }} />
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
  );
};

const Match = {
  type: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.string),
  result: PropTypes.number,
  moves: PropTypes.number,
  date: PropTypes.string,
};

MatchesTable.propTypes = {
  matches: PropTypes.arrayOf(PropTypes.shape(Match)),
};

export default MatchesTable;
