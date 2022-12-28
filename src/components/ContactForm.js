import '../styles/ContactForm.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card,Col,Row,Form,Button} from 'react-bootstrap';
import emailjs from 'emailjs-com';
import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import{ init } from 'emailjs-com';

require('dotenv').config()
init(process.env.REACT_APP_USER_ID);

function ContactForm() {

    const [nameco, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [service, setService] = useState("");
    const [description, setDescription] = useState("");



    const handleSubmit = (e) => {

        const frmdetails = {
            'name' : nameco,
            'email' : email,
            'phone' : phone,
            'service' : service,
            'description': description
        }

        
          emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            frmdetails,
            process.env.REACT_APP_USER_ID
        )
        

    }
    return (
        <Card id = "main-card" style = {{ width: "80vw"}}>
        <Card.Body>
            <Form id ="main-form">
                <Form.Group as={Row} controlId="formPlaintextName" className = "mb-3">
                    <Form.Label column sm="2">
                        Name/Company :
                    </Form.Label >
                    <Col sm="10">
                        <Form.Control onChange={e => setName(e.target.value)} placeholder="John Doe" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextEmail" className = "mb-3">
                    <Form.Label column sm="2">
                        Email :
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control onChange={e => setEmail(e.target.value)} placeholder="abc@email.com" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPhone" className = "mb-3">
                    <Form.Label column sm="2">
                        Phone :
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control onChange={e => setPhone(e.target.value)} placeholder="678-999-8212" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextService" className = "mb-3">
                    <Form.Label column sm="2">
                        Service :
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control defaultValue= "" as="select" 
                            onChange={e => setService(e.target.value)}
                        >
                            <option hidden value="">Select</option>
                            <option>Web Design</option>
                            <option>Data Analytics</option>
                            <option>Blockchain Development</option>
                            <option>Other</option>
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextDescription" className = "mb-3">
                    <Form.Label column sm="2">
                        Description :
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control onChange={e => setDescription(e.target.value)} as="textarea" rows={3} placeholder="I need tech help!" />
                    </Col>
                </Form.Group>
            </Form>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Col id = "submitbutton-row" sm={{ span: 12}}>
            <Button 
                as = {Link} 
                to = {{ pathname: '/submission', state:nameco}} 
                id = "submit-button" 
                variant="none" 
                onClick={handleSubmit} 
            >Submit</Button>
          </Col>
        </Card.Footer>
      </Card>
    );
  }
  export default ContactForm;