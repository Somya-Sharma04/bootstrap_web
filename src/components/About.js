import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function AboutPage() {
  return (
    <>
      <header className="bg-image">
        <div className="overlay">
          <Container style={{marginTop:"30px"}}>
            <h1>Mission Statement</h1>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ut doloremque nobis sit veritatis tempora aliquam iste rem non reiciendis? Porro, quisquam ratione?</p>
          </Container>
        </div>
      </header>
      <section className="py-5">
        <Container>
          <Row>
            <Col md={6}>
              <Image
                src="https://via.placeholder.com/300"
                alt="Team Member"
                className="img-fluid"
              />
              <h2>Team Member Name</h2>
              <p>Team Member Title</p>
            </Col>
            <Col md={4}>
              <Image
                src="https://via.placeholder.com/300x400"
                alt="Team Member"
                className="img-fluid"
              />
              <h2>Team Member Name</h2>
              <p>Team Member Title</p>
            </Col>
            <Col md={4}>
              <Image
                src="https://via.placeholder.com/300x400"
                alt="Team Member"
                className="img-fluid"
              />
              <h2>Team Member Name</h2>
              <p>Team Member Title</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AboutPage;
