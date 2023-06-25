import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import avatar from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Introduction() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              UNA PEQUEÑA <span className="purple"> RESEÑA </span> SOBRE MÍ
            </h1>

            <p className="home-about-body">
              Hace 10 años conocí la programación y ha sido lo mejor que me ha
              pasado ... 😍
              <br />
              <br />
              Tengo experiencia en los lenguages clásicos como:
              <i>
                <b className="purple"> Java, Kotlin, Python & C++</b>
              </i>{" "}
              (Aunque los dos últimos estoy bastante oxidado 😅)
              <br />
              <br />
              Mis áreas de interés son:&nbsp;
              <i>
                <b className="purple">Android</b>,{" "}
                <b className="purple">Backend</b> &{" "}
                <b className="purple">Blockchain</b>
              </i>
              <br />
              <br />
              Últimamente he estado interactuando con nuevas herramientas y áreas como:&nbsp;
              <b className="purple">UE5</b>,{" "}
              <b className="purple">Unity</b> &
              <i>
                <b className="purple"> AR/VR</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={avatar} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Introduction;
