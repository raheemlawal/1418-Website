import '../styles/NewHome.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Row,Container,Button} from 'react-bootstrap';
import '../Main';
import {Link} from 'react-router-dom';
import React from 'react';

function NewHome() {
  return (
    <Container id="home">
        <Row id = "maintitle-row">
            <h2 className = "maintitle-text">1418</h2>
        </Row>
        <Row id = "subtitle-row">
            <h3 className = "subtitle-text">Technologies</h3>
        </Row>
        <Row id = "d-row">
            <h3 className = "d-text">Providing modern technology services: development, consulting, and research.</h3>
        </Row>
        <Row id = "d2-row">
            <h3 className = "d2-text">Web Design, Data Analytics, and Blockchain Development</h3>
        </Row>
        <Row id = "portfolio-row">
            <Button as = {Link} to = "/portfolio" id = "portfolio-button" variant="outline-warning"> PORTFOLIO</Button>
        </Row>
        <Row id = "contact-row">
          <Button as = {Link} to = "/contact" id = "contact-button" variant="outline-danger"> CONTACT US</Button>
        </Row>
    </Container>
  );
}

export default NewHome;