// Done by Nikita Vyas(8895074)
import React from 'react';
import { Container, Row, Col, Card,Button } from 'react-bootstrap';
import { FaStar, FaUser } from 'react-icons/fa';

const CoursePage = () => {
  const courses = [
    {
      title: "Application Design Course",
      image: require("../images/course1.jpg"),
      price: "$150",
      description: "Master the art of creating intuitive and efficient applications. Learn user-centered design principles, wireframing, prototyping, and user interface development. Explore UX research methods, and information architecture.",
      rating: 4.5,
      reviews: 36,
      students: 85,
      duration: "3 Year",
      classSize: 18,
      classTime: "1 hour"
    },
    {
      title: "Data Structure & Algorithm",
      image: require("../images/course2.jpg"),
      price: "$150",
      description: "Dive deep into fundamental data structures and algorithms essential for efficient problem-solving in computer science. Study arrays, linked lists, stacks, queues, trees, and graphs. Learn sorting, searching, and optimization algorithms.",
      rating: 4.5,
      reviews: 36,
      students: 85,
      duration: "3 Year",
      classSize: 18,
      classTime: "1 hour"
    },
    {
      title: "Android App Development",
      image: require("../images/course3.jpg"),
      price: "$150",
      description: "Explore the world of Android mobile application development. Learn Java programming for Android, understand the Android SDK, and master app components like activities and fragments. Dive into UI design, data storage, and networking.",
      rating: 4.5,
      reviews: 36,
      students: 85,
      duration: "3 Year",
      classSize: 18,
      classTime: "1 hour"
    }
  ];

  return (
    
    <Container className="courses-container">
      <h1>Courses</h1>
      <Row>
        {courses.map((course, index) => (
          <Col md={4} key={index}>
            <Card className="course-card mb-4">
              <Card.Img variant="top" src={course.image} />
              <Card.Body>
                <div className="price-tag">{course.price}</div>
                <Card.Title>{course.title}</Card.Title>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color={i < Math.floor(course.rating) ? "#ffc107" : "#e4e5e9"} />
                  ))}
                  <span>{course.reviews}</span>
                  <FaUser /> <span>{course.students}</span>
                </div>
                <Card.Text>{course.description}</Card.Text>
                <div className="course-details">
                  <div><strong>Course:</strong> {course.duration}</div>
                  <div><strong>Class Size:</strong> {course.classSize}</div>
                  <div><strong>Duration:</strong> {course.classTime}</div>
                </div>
                <Button variant="primary" className="mt-3">More Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CoursePage;