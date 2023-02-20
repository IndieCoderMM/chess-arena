import React from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <Container fluid className="bg-success">
      <Stack direction="horizontal">
        <Sidebar />
        <Container>
          <h1>Chess Arena</h1>
        </Container>
      </Stack>
    </Container>
  );
};

export default Home;
