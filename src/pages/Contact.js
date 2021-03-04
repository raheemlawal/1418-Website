import '../styles/Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row} from 'react-bootstrap';
import ContactForm from '../components/ContactForm'

function Contact() {

  return (
    <Container id="contact">
      <Container id = "main-container">
        <Row id = "title-row">
          Let's get to work!
        </Row>
        <ContactForm id = "contact-form"/>
      </Container>
    </Container>
  );
}

export default Contact;