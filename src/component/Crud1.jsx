// Date:= 16/08/23
// Day:= Wednesday
// Topic:= Crud 1


import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
// import { Form} from "react-bootstrap/Form";
import { Form, FormControl, Button,Table } from "react-bootstrap";
import css from '../assets/css/Crud1.css'
import FormGroup from "react-bootstrap/esm/FormGroup";

const Crud1 = () => {
  const defaultObject = {
    password: '', hobbies: [], gender: '', dob: ''
  }
  const [userData, setUserData] = useState(defaultObject)
  const [array, setArray] = useState([])

  const handleChange = (event) =>{
    let hby = userData.hobbies ? userData.hobbies : []
    if(event.target.name === 'hobbies'){
      if (event.target.checked){
        hby.push(event.target.value)
        setUserData({...userData, ['hobbies']: hby})
      } else{
        setUserData({...userData, ['hobbies']: userData.hobbies.filter((x) => x !== event.target.value)})
      }
    } else{
      setUserData({...userData, [event.target.name]: event.target.value})
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setArray([...array, userData])
    setUserData(defaultObject)
    document.querySelector('#userForm').reset()
    console.log(array);
  }
  return (
    <>
      <div className="mainDiv">
        <Form id="userForm">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Password:-</Form.Label>
            <Form.Control type = 'password' value={setUserData.password} name = 'password' placeholder='enter Password' onChange= {handleChange}></Form.Control>
          </Form.Group>

          <Form.Group controlId="fromBasicCheckbox">
            <Form.Check type="checkbox" name="hobbies" label='Reading' value={'reading'} onChange={handleChange}></Form.Check>
            <Form.Check type="checkbox" name="hobbies" label='Gaming' value={'gaming'} onChange={handleChange}></Form.Check>
          </Form.Group>

          <Form.Group controlId="forBasicCheckbox">
            <Form.Check type="radio" name="gender" label='male' value={'male'} onChange={handleChange}></Form.Check>
            <Form.Check type="radio" name="gender" label='female' value={'female'} onChange={handleChange}></Form.Check>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" name="dob" value={userData.dob} placeholder="Enter Date Of Birth" onChange={handleChange} ></Form.Control>
          </Form.Group>
          <Button variant='primary' type='submit' onClick={handleSubmit} >Submit</Button>
        </Form>

        <Table striped bordered hover >
          <thead>
            <tr>
              <th>ID</th>
              <th>Password</th>
              <th>Hobbies</th>
              <th>Gender</th>
              <th>DoB</th>
            </tr>
          </thead>

          <tbody>
            {
              array.map((item,index) => {
                return(
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.password}</td>
                    <td>{item.hobbies}</td>
                    <td>{item.gender}</td>
                    <td>{item.dob}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>

        {/* ########################################################################## */}
        {/* <Form>
        <h1>Crud Form</h1>
        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3" >
        <Form.Control type="email" placeholder="name@example.com" /> </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" /> </FloatingLabel>

        <FloatingLabel controlId="floatingContact" label="Contact">
        <Form.Control type="tel" placeholder="floatingContact" /> </FloatingLabel>


        <div className="cdbChk">
            {['checkbox', 'radio'].map((type) => (
            <div key={`default-${type}`} className="mb-3">
             <Form.Check // prettier-ignore 
                type={type} id={`default-${type}`} label={`default ${type}`}/>

            <Form.Check disabled type={type} label={`disabled ${type}`} id={`disabled-default-${type}`} />
            </div>

            
            ))}
        </div>
        
        <Form.Control type="checkbox" placeholder="Normal text" /></Form> */}

        
        
      </div>

    </>
  );
};

export default Crud1;
