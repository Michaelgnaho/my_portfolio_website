import { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

function Contacts(props) {
  const FormInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(FormInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
  
    try {
      const whatsappNumber = "+2348145046894";
      const whatsappMessage = `First Name: ${formDetails.firstName}\nLast Name: ${formDetails.lastName}\nEmail: ${formDetails.email}\nPhone: ${formDetails.phone}\nMessage: ${formDetails.message}`;
  
      const whatsappApiUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;
  
      // Open WhatsApp in a new tab
      window.open(whatsappApiUrl, "_blank");
  
      setStatus({ status: "success" });
      setButtonText("Sent");
      // Reset the form (optional)
      setFormDetails(FormInitialDetails); 
    } catch (error) {
      console.error("Error opening WhatsApp:", error);
      setStatus({ status: "error" });
      setButtonText("Send");
    }
  };

  return (
    <div className="contact animate" id="connect">
      <Container>
        <Row className="align-items-center animate">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" className="animate" />
          </Col>
          <Col md={6}>
            <h2 className="animate">Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col size={12} sm={6} className="px-1 animate">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1 animate">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1 animate">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1 animate">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col size={12} className="px-1 animate">
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contacts;