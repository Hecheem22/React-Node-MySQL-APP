import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, InputGroup, Row, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaReply } from 'react-icons/fa';





const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");


  const navigate = useNavigate();

  const Submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        email,
        gender,
        age ,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };


  const Valid = (e) =>{

   // console.log(gender.trim())
    e.preventDefault();
    if (name.trim() === '') {
      alert('The name input is empty !! ');
    
  }
  else if (age.trim() === '') {

    alert('the age input is empty !!')

  }
  else if (email.trim() === '') {

    alert('the email input is empty !!')

  }

  else if (gender.trim() === '') {

    alert('Select gender !!')

  }
}
  
 
 

  return (



    <form   onSubmit={Submit} className="container mt-4 mb-4" >

        <Link to={`/`} className="button is-danger addBtn" >
           <FaReply /> 
        </Link>


<br></br><br></br>

    <Row className="mb-3">
<Form.Group controlId="" className="col col-sm-6">
  <Form.Label> <strong>Name</strong></Form.Label>
  <Form.Control  itemID="name" type="text"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter the name" />
</Form.Group>
<Form.Group controlId="" className="col col-sm-6">
  <Form.Label>  <strong>Age</strong> </Form.Label>
  <Form.Control  itemID="age"
   type="number"
              className="input"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter the age" />
</Form.Group>
</Row>
<Row className="mb-3">
<Form.Group controlId="" className="col col-sm-6">
  <Form.Label> <strong>Email</strong>  </Form.Label>
  <Form.Control itemID="email"  type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter the email" />
</Form.Group>
<Form.Group controlId="" className="col col-sm-6">
          <Form.Label> <strong>Gender</strong>  </Form.Label>
          <Form.Select  itemID="gender" value={gender}
                onChange={(e) => setGender(e.target.value)}>
               <option disabled value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
          </Form.Select>
      </Form.Group>
</Row>

<div   style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20vh',
      }} >
            
          <button  onMouseMove={Valid}  type="submit" className="button is-success ">
              Save
            </button>

</div>
  </form>

  );
};

export default AddUser;




