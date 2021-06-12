import {useState} from "react"
import './App.css';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button } from 'react-bootstrap';


function App() {
 const [name, setName] = useState("");
 const [emailid, setEmailid] = useState("");
 const [password, setPassword] = useState("");
 const [loginlist, setLoginlist] = useState([]);

const addData=()=>{
Axios.post('http://localhost:3001/create',{name:name,email:emailid,password:password}).then(()=>{
  console.log("success");
});
};

const getData=()=>{
  Axios.get('http://localhost:3001/getlist').then((response)=>{
  // console.log(response);
  setLoginlist(response.data);
});
}

  return (
    <div className="App">
      <Form>
      <div className="information">
           <Form.Label className="heading">REGISTER</Form.Label>
                  <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Enter Name" type="text" 
                      onChange={(event)=>{
                        setName(event.target.value)
                      }} />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control placeholder="Enter Email"  onChange={(event)=>{
                      setEmailid(event.target.value)
                      }}/>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"   onChange={(event)=>{
                          setPassword(event.target.value)
                        }}/>
              </Form.Group>
              <Button variant="primary" onClick={addData} type="submit">
                Submit
              </Button>
        </div>
        {/* ----------------------------------------------------------------------------------
        <div className="employees ">
          <Button variant="primary" onClick={getData}>Show Employees</Button>

          {loginlist.map((val,key)=>{
            return<div>{val.Name}</div>
          })}
        </div> */}
    </Form>
    </div>
  );
}

export default App;
