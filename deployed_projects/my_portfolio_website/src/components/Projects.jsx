import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import projImg0 from "../assets/img/snapPRoject.PNG";
import projImg1 from "../assets/img/tindog_snapshot.PNG";
import projImg2 from "../assets/img/corprate_snaphot.PNG";
import projImg3 from "../assets/img/mydos_snapshot.PNG";
import projImg4 from "../assets/img/magbank.PNG";
import projImg5 from "../assets/img/news_letter_snapshot.PNG";
import projImg6 from "../assets/img/simple _form.PNG";



import color from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "HiTask APP",
      description: "A full front-end app for tasks management with user authentication, dashboard and several pages ",
      imgUrl: projImg0,
      proLink: "https://hi-tasks.com.ng/",
    },
    
    {
      title: "Front_end Corprate website",
      description: "A demo of a website that offers web development services",
      imgUrl: projImg2,
      proLink: "https://corporate-website-doxw.vercel.app/",
    },
    {
      title: "MAG BANK",
      description:
        "This a finance website",
      imgUrl: projImg4,
      proLink: "https://mag-bank-1.vercel.app/",
    },
    {
      title: "Tindog App",
      description: "An app for buying and taking care of dogs",
      imgUrl: projImg1,
      proLink: "https://michaelgnaho.github.io/tindog_web/",
    },
    {
      title: "Full Stack Todo app",
      description: "It allows people to manage their task easily",
      imgUrl: projImg3,
      proLink: "https://mydos-web-app.onrender.com",
    },
    {
      title: "Newsletter App",
      description: "Design & Development",
      imgUrl: projImg5,
      proLink: "https://news-letter-app-d357.onrender.com/",
    },
    {
      title: "Simple Form",
      description: "This is an app that cosist of a simple form where you add users and thier age",
      imgUrl: projImg6,
      proLink: "https://simple-form-silk.vercel.app/",
    },
  ];
  return (
    <div className="project animate" id="projects">
      <Container>
        <Row>
          <Col>
            <h2 className="animate">Projects</h2>
            <p  className="animate flex-1">
              These are projects I built with basic HTML,CSS,BOOTSTRAP,REACT and
              other new technologies that cut across all level of
              professionalism.
            </p>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate" : ""
                  }
                >
                  <Tab.Container
                    className="projects-tabs  animate"
                    defaultActiveKey="first"
                  >
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center animate"
                      id="pills-tab"
                    >
                      <Nav.Item as="li">
                        <Nav.Link eventKey="first">Tab one</Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link eventKey="second">Tab two</Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link eventKey="third">Tab three</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCards key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second"> MORE COMING ...</Tab.Pane>
                      <Tab.Pane eventKey="third"> MORE COMING ... </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>{" "}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <div className="background-image-right animate">
        <img src={color} alt="img" />
      </div>
    </div>
  );
};
export default Projects;
