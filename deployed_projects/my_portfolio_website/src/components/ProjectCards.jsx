import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom"

function ProjectCards({ title, description, imgUrl, proLink }) {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx animate">
        <img src={imgUrl} alt="img" />
        <div className="proj-txtx">
          <h4 className="">{title}</h4>
          <span className="">{description}</span>
          <br />
          <Link  to={proLink} target="_blank" rel="noopener noreferrer">
            <Button className="">Project Link</Button>
          </Link>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCards;
