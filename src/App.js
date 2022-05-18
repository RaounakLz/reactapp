import logo from './logo.svg';
import './App.css';
import { Form, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App" style={{height:"650px"}}>
      <Form style={{width:"250px", marginTop:"20px", marginLeft:"50px"}}>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button class="btn btn-primary" type="submit" value="Submit"> submit</Button>

  
</Form>
    </div>
  );
}

export default App;
