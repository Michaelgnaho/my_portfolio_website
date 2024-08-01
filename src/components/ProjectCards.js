import React from "react";
import { Col } from "react-bootstrap";

function ProjectCards({ title, description, imgUrl, proLink }) {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        <div>
          <a href={proLink}><button>Project Link</button></a>                                  
        </div>
      </div>
    </Col>
  );
}

export default ProjectCards;
