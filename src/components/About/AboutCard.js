import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My name is <span className="purple">Oleksandr Kostyushko</span>, and I have a higher education in the field of computer science,
            which I obtained at the Ostroh Academy. I am currently a 5th year student majoring in "Project Management".
            My education is complemented by practical experience, as I work in the education department.
            I live in the city of Kyiv, where I have the opportunity to develop my knowledge and skills in the chosen field.
            The future is an opportunity to write my own story, and I am ready to discover new opportunities and succeed
            in project management and development in the field of computer science.
            <br />
            <br />
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "The future is a blank sheet of paper on which we can write our dreams and achieve their realization."{" "}
          </p>
          <footer className="blockquote-footer">Oleksandr Kostiushko</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
