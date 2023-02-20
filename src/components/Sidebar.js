import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <ListGroup>
      <ListGroup.Item>
        <NavLink to="/">Home</NavLink>
      </ListGroup.Item>

      <ListGroup.Item>
        <NavLink to="/play/online">Two Player</NavLink>
      </ListGroup.Item>
      <ListGroup.Item>
        <NavLink to="/play/vsAi">Vs A.I.</NavLink>
      </ListGroup.Item>
      <ListGroup.Item>
        <NavLink to="/puzzle">Puzzle</NavLink>
      </ListGroup.Item>
      <ListGroup.Item>
        <NavLink to="/leaderboard">Leaderboard</NavLink>
      </ListGroup.Item>
      <ListGroup.Item>
        <NavLink to="/practice">Practice</NavLink>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Sidebar;
