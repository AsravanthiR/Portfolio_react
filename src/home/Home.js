import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Type from "./Type";

function Home() {
  return (
    <div>
      <Navbar />
      <section>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> Sravanthi Avadhanula</strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }}></Col>
            </Row>
          </Container>
        </Container>
      </section>
    </div>
  );
}

export default Home;
