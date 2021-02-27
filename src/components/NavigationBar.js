import '../styles/NavigationBar.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav,Navbar,Button} from 'react-bootstrap';

function NavigationBar() {
    return (
        <Navbar className = "navigation-bar" variant="dark">
                <Nav className="ml-auto">
                    <Button variant="outline-success" id = "home-link" href="/">Home</Button>
                </Nav>
        </Navbar>
    );
  }
  export default NavigationBar;