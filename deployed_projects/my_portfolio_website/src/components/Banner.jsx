import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../assets/img/header-img.svg";
import Headshot from "../assets/img/my_personal_headshot3.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import About from "./About";

function Banner(props) {
  const [loopNum, setLoopNum] = useState(0);
  const [isDel, setIsDel] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const toRotate = useMemo(
    () => ["Software Engineer","Web Developer", "Frontend Engineer", "UI/UX Designer", ],
    []
  );

  const ticker = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updateText = isDel
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDel && updateText === "") {
      setIsDel(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }

    if (updateText === fullText) {
      setIsDel(true);
      setDelta((prevDelta) => prevDelta / 2);
    }
  }, [loopNum, isDel, text.length, toRotate]);

  useEffect(() => {
    const interval = setInterval(ticker, delta);
    return () => clearInterval(interval);
  }, [ticker, delta]);

  return (
    <div>
      <Container className="banner " id="home">
        <Row className="align-items-center ">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate" : ""
                  } data-aos="fade-right"
                >
                  <span className="tagline animate">
                    Hey There! Welcome to my portfolio
                  </span>
                  <h1>
                    {"I'm Michael Gnaho"} <span className="wrap animate">{text}</span>
                  </h1>
                  <p className="animate">
                    Yes! I have a passion for creating engaging and
                    user-friendly websites. I have experience in HTML, CSS, React, Bootstrap, Typescript, Tailwind CSS JavaScript etc...
                  </p>
                  <button onClick={() => console.log("connect")}>
                    {" "}
                    <a href="https://github.com/Michaelgnaho?tab=repositories">Go to my Github!</a> <ArrowRightCircle size={10} />{" "}
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5} data-aos="fade-left">
            <img className="profilePic" src={Headshot} alt="Header img" />
            <img src={HeaderImg} alt="Header img" />
          </Col>
        </Row>

          <About />
             
      </Container>
    </div>
  );
}

export default Banner;
