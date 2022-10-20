import '../styles/Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col, Image} from 'react-bootstrap';
import thanks from '../thankspic.png';
import landlorde from '../lanlordepic.png';
import heem from '../heempic.png';
import raheem from '../raheempic.png';
import React from 'react';

function Portfolio() {

    return (
        <Container id="portfolio">
            <Container id = "main-container">
                <h1 className='portfolio-text'>Portfolio</h1>
                <Row id = "portrow">
                    <Col>
                        <a target="_blank" href="https://heemtoken.com" rel="noopener noreferrer">
                            <Image rounded src={heem} height={300}></Image>
                        </a>
                    </Col>
                    <Col>
                        <a target="_blank" href="https://sendthanks.netlify.com" rel="noopener noreferrer">
                            <Image rounded src={thanks} height={300}></Image>
                        </a>
                    </Col>
                </Row>
                <Row id = "portrow2">
                    <Col>
                        <a target="_blank" href="https://landlorde.dev" rel="noopener noreferrer">
                            <Image rounded src={landlorde} height={300}></Image>
                        </a>
                    </Col>
                    <Col>
                        <a target="_blank" href="https://raheemlawal.com" rel="noopener noreferrer">
                            <Image rounded src={raheem} height={300}></Image>
                        </a>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
  }
  
  export default Portfolio;