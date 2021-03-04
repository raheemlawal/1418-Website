import '../styles/Submission.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Submission(props) {
    
    const nameco = props.location.state
    window.history.replaceState(null, '')      
    
    return (
        <Container id="submission">
            <Container id = "main-container">
                <h1 className = "thankyou-text">Thank you for submitting an enquiry {nameco} !</h1>
                <h3 className = "intouch-text">We will be in touch shortly!</h3>
                <Button as = {Link} to = "/contact" id = "newenquiry-button" variant="primary"> Create New Enquiry</Button>
                <Button as = {Link} to = "/" id = "gohome-button" variant="primary"> Go Back Home</Button>
            </Container>
        </Container>
    );
  }
  export default Submission;
