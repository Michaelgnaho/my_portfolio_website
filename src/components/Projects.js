import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import projImg1 from "../assets/img/tindog_snapshot.PNG";
import projImg2 from "../assets/img/corprate_snaphot.PNG";
import projImg3 from "../assets/img/mydos_snapshot.PNG";
import color from "../assets/img/color-sharp2.png";
// import "animate.css";

// export const Projects = () => {
const projects = [
  {
    title: "Tindog App",
    description: "An app for buying and taking care of dogs",
    imgUrl: projImg1,
  },
  {
    title: "Front_end Corprate website",
    description: "A demo of a website that offers web development services",
    imgUrl: projImg2,
  },
  {
    title: "Full Stack Todo app",
    description: "It allows people to manage their task easily",
    imgUrl: projImg3,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
  },
];

function Projects(props) {
  return (
    <div className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Tab.Container className="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
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
                <Tab.Pane eventKey="second"> lorem i</Tab.Pane>
                <Tab.Pane eventKey="third"> hey you</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <div className="background-image-right">
        <img src={color} alt="img" />
      </div>
    </div>
  );
}

export default Projects;
