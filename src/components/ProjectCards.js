import React from "react";
import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';


function ProjectCards({ title, description, imgUrl, proLink }) {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br/>
          <a href={proLink}><Button >Project Link</Button></a>     
        </div>
      </div>
    </Col>
  );
}

export default ProjectCards;
