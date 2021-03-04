import '../styles/NavigationBar.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav,Navbar,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function NavigationBar() {
    return (
        <Navbar className = "navigation-bar">
                <Nav className="ml-auto">
                    <Button as = {Link} variant="outline-success" id = "home-link" to="/">Home</Button>
                </Nav>
        </Navbar>
    );
  }
  export default NavigationBar;