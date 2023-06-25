import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Github from "./Github";

function Technical() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Particle />
      <Container>
        <Row>
          <h1 className="project-heading">
            Habilidades <strong className="purple">Técnicas </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Herramientas</strong> que uso
          </h1>
          <Toolstack />

          <Github />
        </Row>
      </Container>
    </Container>
  );
}

export default Technical;
