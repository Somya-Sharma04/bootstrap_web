import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function ContactPage() {
  return (
    <>
      <header className="bg-image">
        <div className="overlay">
          <Container style={{marginTop:"30px"}}>
            <h1>Contact Us</h1>
          </Container>
        </div>
      </header>
      <section className="py-5">
        <Container>
          <Row>
            <Col md={6}>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label style={{ fontWeight: "bold" ,  marginTop: "10px"}}>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" style={{ marginTop: "5px" }} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label style={{ fontWeight: "bold" ,  marginTop: "10px"}}>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" style={{ marginTop: "5px" }} />
                </Form.Group>

                <Form.Group controlId="formBasicSubject">
                  <Form.Label style={{ fontWeight: "bold" ,  marginTop: "10px"}}>Subject</Form.Label>
                  <Form.Control type="text" placeholder="Enter the subject" style={{ marginTop: "5px" }} />
                </Form.Group>

                <Form.Group controlId="formBasicMessage">
                  <Form.Label style={{ fontWeight: "bold",  marginTop: "10px" }}>Message</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
                </Form.Group>

                <Button variant="primary" type="submit" style={{ marginTop: "10px" }}>
                  Submit
                </Button>
              </Form>
            </Col>
            <Col md={6}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.562089962437!2d-73.9921109846037!3d40.74330497932874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259e52f92fc61%3A0x96250529d8fc1c05!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1616672250259!5m2!1sen!2sus"
                width="100%"
                height="450"
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ContactPage;
