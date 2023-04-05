import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, InputGroup, Row, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaReply } from 'react-icons/fa';

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState("Male");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUser();
  }, []);

  const EditUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
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

  const getUser = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setGender(response.data.gender);
    setAge(response.data.age);

  };

  return (
    <form   onSubmit={EditUser} className="container mt-3 mb-3" >

<Link to={`/`} className="button is-danger addBtn" >
<FaReply /> 
        </Link>

        <br></br><br></br>

    <Row className="mb-3">
<Form.Group controlId="" className="col col-sm-6">
  <Form.Label> <strong>Name</strong></Form.Label>
  <Form.Control  type="text"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter the name" />
</Form.Group>
<Form.Group controlId="" className="col col-sm-6">
  <Form.Label>  <strong>Age</strong> </Form.Label>
  <Form.Control  type="number"
              className="input"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter the age" />
</Form.Group>
</Row>
<Row className="mb-3">
<Form.Group controlId="" className="col col-sm-6">
  <Form.Label> <strong>Email</strong>  </Form.Label>
  <Form.Control  type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter the email" />
</Form.Group>
<Form.Group controlId="" className="col col-sm-6">
          <Form.Label> <strong>Gender</strong>  </Form.Label>
          <Form.Select  value={gender}
                onChange={(e) => setGender(e.target.value)}>
               <option disabled value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
          </Form.Select>
      </Form.Group>
</Row>
<div  style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20vh',
      }}>
<button type="submit" className="button is-success">
              Save
            </button>
</div>
  </form>
  );
};

export default EditUser;
