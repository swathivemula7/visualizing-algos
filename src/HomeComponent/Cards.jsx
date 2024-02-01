import React from 'react';
import Card1 from './Card1'; // Import your card component
import { getDetails } from './CardDetails'; // Import your getDetails function
import { Container, Row, Col } from 'react-bootstrap';


const Cards = () => {
  const details = getDetails();

  return (
    
    <Container className="p-4" style={{backgroundColor: '#CFE4E6', marginTop: '20px'}}>
      <Row>
        {details.map((card) => (
          <Col md="4" key={card.id}>
            <Card1 card={card} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cards;
