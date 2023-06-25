import React from "react";
import { Button, Card } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { SiGoogleplay } from "react-icons/si";

function ProjectCards({
  imgPath,
  title,
  description,
  ghLink,
  demoLink,
  demoTitle,
}) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>
          <strong className="purple">{title}</strong>
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        <Button
          variant="primary"
          href={ghLink}
          target="_blank"
          className="me-2"
        >
          <BsGithub className="me-2" />
          Github
        </Button>

        {demoLink && (
          <Button variant="primary" href={demoLink} target="_blank">
            <SiGoogleplay className="me-2" />
            {demoTitle}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
