import { Container, Row, Col } from "react-bootstrap";
import { MailChimpForm } from "./MailChimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer animate">
      <Container>
        <Row className="align-items-center ">
          <MailChimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon ">
              <a
                href="https://www.linkedin.com/in/michael-adeyemi-gnaho-7b487020b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a
                href="https://web.facebook.com/micheal.adeyemi.963/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={navIcon2} alt="Icon" />
              </a>
              <a
                href="https://www.instagram.com/simplymag_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p className="">Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
