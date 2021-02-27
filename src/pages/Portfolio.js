import '../styles/Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap';
import NavigationBar from '../components/NavigationBar';

function Portfolio() {

    return (
        <Container id="portfolio">
            <NavigationBar />
            <Container id = "main-container">
                <h1 className = "comingsoon-text">Coming soon!</h1>
            </Container>
        </Container>
    );
  }
  
  export default Portfolio;