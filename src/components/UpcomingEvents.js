// Done by Parth Patel

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const UpcomingEvents = () => {
    const events = [
      { month: 'MAR', day: '25', year: '2018', title: 'Affiliate Marketing', time: '05:23 AM - 09:23 AM' },
      { month: 'OCT', day: '25', year: '2018', title: 'Facebook Marketing', time: '05:23 AM - 09:23 AM' },
      { month: 'NOV', day: '25', year: '2018', title: 'Edustar Autumn', time: '05:23 AM - 09:23 AM' },
      { month: 'DEC', day: '25', year: '2018', title: 'Workshop PHP', time: '05:23 AM - 09:23 AM' },
    ];
  
    return (
      <Container className="upcoming-events">
        <h2 className="join-text">JOIN WITH US</h2>
        <h1 className="section-title">Upcoming Events to</h1>
        <Row>
          {events.map((event, index) => (
            <Col md={6} key={index} className="event-item">
              <div className="event-date">
                <span className="month">{event.month}</span>
                <span className="day">{event.day}</span>
                <span className="year">{event.year}</span>
              </div>
              <div className="event-details">
                <h3>{event.title}</h3>
                <p>{event.time}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
  
  export default UpcomingEvents;