import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Stats = () => {
  return (
    <Card>
      <Card.Header>Personal Best</Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <Alert>⌚ 00:46</Alert>
          </Col>
          <Col>
            <Alert>📅 Feb 12, 2023</Alert>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Stats;
