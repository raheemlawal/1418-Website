import '../styles/NewHome.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Row,Container,Button,Image} from 'react-bootstrap';
import '../Main';
import {Link} from 'react-router-dom';
import React from 'react';
import abz from "../aaa.PNG"
import { FaInstagram } from "react-icons/fa";

function NewHome() {
  return (
    <Container id="home">
        <Row id = "maintitle-row">
          <Image src={abz}></Image>
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
        <Row id = "ig-row">
          <a id='ig-color' href="https://instagram.com/1418tech/">
            <FaInstagram size={30}></FaInstagram>
          </a>
        </Row>
    </Container>
  );
}

export default NewHome;