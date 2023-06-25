import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillFacebook, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGoogleplay } from "react-icons/si";

function Social() {
  return (
    <Container>
      <Row>
        <Col md={12} className="home-about-social">
          <h1>
            Mis <strong className="purple">redes</strong>
          </h1>

          <p>
            Siéntase libre de <span className="purple">conectarse</span> conmigo
          </p>

          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/figonzal1"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://play.google.com/store/apps/dev?id=4650587366054768148"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <SiGoogleplay />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.instagram.com/figonzal.cl"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://facebook.com/figonzal1"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/figonzal/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Social;
