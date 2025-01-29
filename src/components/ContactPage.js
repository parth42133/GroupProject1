// Done by Dhruvit Patel

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGooglePlusG, FaYoutube, FaSkype } from 'react-icons/fa';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="contact-page">
      <div className="hero-section">
        <h1>Contact</h1>
      </div>
      <Container fluid className="contact-container">
        <Row>
          <Col md={4} className="contact-info">
            <h2>Contact Info</h2>
            <p>PO Box CT16133 Collins Street West, Victoria 8007, Australia.</p>
            <p><FaPhone /> +1 (2) 345 6789</p>
            <p><FaPhone /> +1 (2) 345 6789</p>
            <p><FaEnvelope /> contact@yourdomain.com</p>
            <div className="social-icons">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
              <FaGooglePlusG />
              <FaYoutube />
              <FaSkype />
            </div>
          </Col>
          <Col md={8} className="contact-form">
            <h2>Get in Touch</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={4} placeholder="Your Message" name="message" value={formData.message} onChange={handleChange} required />
              </Form.Group>
              <Button variant="primary" type="submit">Send Message</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;