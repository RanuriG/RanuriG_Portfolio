import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={12} className="text-center">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ranuri-gurusinghe/" target="_blank"><img src={navIcon1} alt="" /></a>
              <a href="https://www.facebook.com/ranuri.gurusinghe/" target="_blank"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/_ranuri_/" target="_blank"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Let's stay connected</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
