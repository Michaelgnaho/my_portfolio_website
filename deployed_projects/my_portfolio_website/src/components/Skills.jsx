import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import color from "../assets/img/color-sharp.png";
import "./Skill.css"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function Skills(props) {
  return (
    <div>
      <Container className="skill animate" id="skills">
        <Row className="skill-bx animate">
          <Col>
            <h2 className="skills-heading animate">Skills</h2>
            <p>I am proficient in the these fields</p>
            <Carousel responsive={responsive} infinite className="skill-slider animate">
              <div className="item animate">
                <img src={meter3} alt="img1" />
                <h5> Web Development </h5>{" "}
              </div>
              <div className="item animate">
                <img src={meter1} alt="img1" />
                <h5> Responsive Design </h5>{" "}
              </div>
              <div className="item animate">
                <img src={meter2} alt="img1" />
                <h5> UI/UX </h5>{" "}
              </div>
              <div className="item animate">
                <img src={meter3} alt="img1" />
                <h5>Graphics Design</h5>{" "}
              </div>
              <div className="item animate">
                <img src={meter3} alt="img1" />
                <h5> Frontend Development </h5>{" "}
              </div>
            </Carousel>
          </Col>
        </Row>
        <div className="background-image-left animate">
          <img src={color} alt="img" />
        </div>
      </Container>
    </div>
  );
}

export default Skills;
