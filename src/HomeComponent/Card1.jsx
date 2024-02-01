
import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Container, Col } from 'react-bootstrap';

const Card1 = (props) => {
  const cardStyle = {
    width: '100%',
    height: '300px', 
  };

  return (
    <Container>
      <Col className="mb-4">
        <Link to={props.card.route} className="text-decoration-none">
          <Card style={cardStyle}>
            <Card.Img variant="top" src={props.card.img} style={{ height: '50%' }} />
            <Card.Body style={{ backgroundColor: 'whitesmoke', height: '50%' }}>
              <Card.Title>{props.card.title}</Card.Title>
              <Card.Text>{props.card.description}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </Container>
  );
};

export default Card1;


