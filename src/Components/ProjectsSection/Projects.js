import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import lqch from "../../Assets/Projects/lqch.png";
import aaid from "../../Assets/Projects/aaid.png";
import evalua from "../../Assets/Projects/evalua.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">proyectos </strong>
        </h1>
        <p style={{ color: "white" }}>
          En los que he estado trabajando recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lqch}
              title="LastQuakeChile - Sismos en Chile"
              description="Es una app donde podrás conocer los últimos sismos ocurridos en Chile y recibir notificaciones rápidamente en tu celular. Cada vez que ocurra un sismo, el servicio LastQuakeChile enviará una alerta y podrás obtener todos los detalles del sismo con sólo presionar la notificación."
              ghLink="https://github.com/figonzal1/LastQuakeChile"
              demoTitle="App"
              demoLink="https://play.google.com/store/apps/details?id=cl.figonzal.lastquakechile"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aaid}
              title="AAID"
              description="Esta aplicación permite al usuario encontrar el código AAID de su dispositivo Android con la opción de copiarlo fácilmente y compartirlo a través de otras aplicaciones."
              ghLink="https://github.com/figonzal1/AAID"
              demoTitle="App"
              demoLink="https://play.google.com/store/apps/details?id=cl.figonzal.aaid"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={evalua}
              title="EvalúaTool - Calculadora v2 cL"
              description="Aplicación móvil que facilita el cálculo de puntuaciones de evaluaciones pertenecientes a la batería de evaluaciones psicopedagógicas Evalúa - Chile Versión 2.0"
              ghLink="https://github.com/figonzal1/Evaluatool"
              demoTitle="App"
              demoLink="https://play.google.com/store/apps/details?id=cl.figonzal.evaluatool"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
