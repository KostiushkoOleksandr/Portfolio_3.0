import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import umsys from "../../Assets/Projects/umsystem.jpg";
import cloud from "../../Assets/Projects/CloudStorage.jpg";
import poetry from "../../Assets/Projects/poetry.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={umsys}
              isBlog={false}
              title="UMSystem"
              description="Worked as a front-end programmer, the main task was the development of new blocks and the layout of new pages. (Build with React.js, Material-UI.)"
              // ghLink=""
              demoLink="https://umsys.com.ua/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={cloud}
                isBlog={false}
                title="Cloud Storage"
                description="Development of a cloud service for organized data storage."
                ghLink="https://github.com/KostiushkoOleksandr/cloud-Storage-Updated"
                // demoLink="https://umsys.com.ua/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={poetry}
                isBlog={false}
                title="AlexKost-Poetry"
                description="I began writing poems, inspired by life events and emotions that cannot always be expressed in simple words."
                ghLink="https://github.com/KostiushkoOleksandr/my-poetry-app"
                demoLink="https://alexkost-poetry.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
