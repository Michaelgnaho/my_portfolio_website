import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";

const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="glass-card p-10 mt-10 items-center justify-center" data-aos="zoom-in" data-aos-duration="100">
      <h2 className="p-10 mt-10 text-center" data-aos="zoom-in">About Me</h2>
      <p className="text-lg text-white p-2">
        Hi, I'm Michael Adeyemi Gnaho, but you can call me MAG. I'm a passionate
        frontend developer with a keen eye for detail and a love for creating
        engaging and interactive web experiences. My journey in web development
        has been driven by a desire to bring designs to life and ensure that
        users have a seamless and enjoyable experience online.
        {!open && <span className="dots">...</span>}
      </p>
      <Collapse in={open}>
        <div
          id="example-collapse-text"
          role="region"
          aria-labelledby="read-more-btn"
          data-aos="zoom-in"
        >
          <p className="text-white">
            With a solid foundation in HTML, CSS, and JavaScript, I've honed my
            skills in creating responsive and user-friendly websites. I
            specialize in using modern frameworks and libraries such as React,
            Vue.js, and Bootstrap to build dynamic and scalable web
            applications. My experience includes working on various projects,
            from small business websites to large-scale web applications, always
            striving to deliver clean, efficient, and maintainable code.
          </p>
          <p className="text-white">
            I honed my skills at ALX, where I majored in frontend development.
            The rigorous training and hands-on projects at ALX have equipped me
            with the technical expertise and problem-solving abilities needed to
            tackle any challenge in web development.
          </p>
          <p className="text-white">
            Beyond coding, I'm a stage-shaking Spoken Word poet, and I find
            inspiration in the art of storytelling. This creative background
            allows me to think outside the box and bring a unique touch to the
            projects I work on.
          </p>
          <p className="text-white text-center text-[40px]">
            Let's create something amazing!
          </p>
        </div>
      </Collapse>
      <Button
        id="read-more-btn"
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
