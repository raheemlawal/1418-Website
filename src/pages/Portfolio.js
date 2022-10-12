import '../styles/Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Card, Row, Col, Image} from 'react-bootstrap';
import thanks from '../thankspic.png';
import landlorde from '../lanlordepic.png';
import heem from '../heempic.png';
import raheem from '../raheempic.png';

function Portfolio() {

    return (
        <Container id="portfolio">
            <Container id = "main-container">
                <h1 className='portfolio-text'>Portfolio</h1>
                <Row id = "portrow">
                    <Col>
                        <Image rounded src={heem} height={300}></Image>
                    </Col>
                    <Col>
                        <Image rounded src={thanks} height={300}></Image>
                    </Col>
                </Row>
                <Row id = "portrow2">
                    <Col>
                        <Image rounded src={landlorde} height={300}></Image>
                    </Col>
                    <Col>
                        <Image rounded src={raheem} height={300}></Image>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
  }
  
  export default Portfolio;