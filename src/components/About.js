import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";

const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="about-section">
      <h2>About Me</h2>
      <p>
        Hi, I'm Michael Adeyemi Gnaho, but you can call me MAG. I'm a passionate
        frontend developer with a keen eye for detail and a love for creating
        engaging and interactive web experiences. My journey in web development
        has been driven by a desire to bring designs to life and ensure that
        users have a seamless and enjoyable experience online.
        <span className={open ? "" : "dots"}>...</span>
      </p>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <p>
            With a solid foundation in HTML, CSS, and JavaScript, I've honed my
            skills in creating responsive and user-friendly websites. I
            specialize in using modern frameworks and libraries such as React,
            Vue.js, and Bootstrap to build dynamic and scalable web
            applications. My experience includes working on various projects,
            from small business websites to large-scale web applications, always
            striving to deliver clean, efficient, and maintainable code.
          </p>
          <p>
            I honed my skills at ALX, where I majored in frontend development.
            The rigorous training and hands-on projects at ALX have equipped me
            with the technical expertise and problem-solving abilities needed to
            tackle any challenge in web development. This experience has been
            pivotal in shaping my approach to building robust and user-centric
            digital solutions.
          </p>
          <p>
            As a global youth ambassador and an alumnus of the Aspire Institute
            at Harvard Business School, I bring a unique perspective to my work,
            combining technical expertise with a deep understanding of global
            trends and user needs. I believe in the power of continuous learning
            and staying updated with the latest industry trends and technologies
            to provide the best solutions for my clients and projects.
          </p>
          <p>
            Beyond coding, I'm a stage-shaking Spoken Word poet, and I find
            inspiration in the art of storytelling. This creative background
            allows me to think outside the box and bring a unique touch to the
            projects I work on. Whether it's through compelling visuals,
            intuitive interfaces, or seamless interactions, I aim to create
            digital experiences that resonate with users and leave a lasting
            impact.
          </p>
          <p>
            When I'm not coding or performing, you can find me engaging with the
            community as a member of the LASU Debate Society and the Erasmus
            Club - Across Atlantic. I'm always open to new opportunities and
            collaborations, so feel free to get in touch if you'd like to work
            together or simply connect.
          </p>
          <p>Let's create something amazing!</p>
        </div>
      </Collapse>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {open ? "Read Less" : "Read More"}
      </Button>
    </div>
  );
};

export default About;
