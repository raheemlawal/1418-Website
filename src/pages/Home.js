import '../styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Row,Col,Container,Button} from 'react-bootstrap';
import '../Main';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <Container id="home">
        <Row id = "maintitle-row">
            <h2 className = "maintitle-text">1418</h2>
        </Row>
        <Row id = "subtitle-row">
            <h3 className = "subtitle-text">Technologies</h3>
        </Row>
        <Row id = "services-row-one">
          <Col>
            Rapid IT Help
          </Col>
          <Col>
            Video Conferencing Configuration
          </Col>
          <Col>
            Web Development
          </Col>
        </Row>
        <Row id = "services-row-two">
          <Col>
            Blockchain Consulting
          </Col>
          <Col>
            Enterprise Tech Design
          </Col>
          <Col>
            Personal Device & Software Setup
          </Col>
        </Row>
        <Row id = "portfolio-row">
            <Button as = {Link} to = "/portfolio" id = "portfolio-button" variant="outline-warning"> Portfolio</Button>
        </Row>
        <Row id = "contact-row">
          <Button as = {Link} to = "/contact" id = "contact-button" variant="outline-danger"> Contact Us</Button>
        </Row>
    </Container>
  );
}

export default Home;