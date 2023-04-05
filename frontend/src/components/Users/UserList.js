import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlus } from 'react-icons/fa';


const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('all genders');


  useEffect(() => {
    getAllUsers();
  }, []);


  const getAllUsers = async () => {
    const res = await axios.get("http://localhost:5000/users");

  //  console.log(res)
    setUsers(res.data);

    // console.log(response.data)
    
  };

  
  const filterUsers = users.filter(item => {
    if (filter === 'all genders') {
      return true;
    } else {
      return item.gender === filter;
    }
  });

 // console.log(filterUsers);


  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getAllUsers();
    } catch (error) {
      console.log(error);
    }
  };


  const genderOptions = ['all genders', 'Male' , 'Female'].map(option => (
    <option key={option} value={option}>{option}</option>
  ));

  ///console.log(genderOptions)

  const rows = filterUsers.map(item => (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.age}</td>
      <td>{item.gender}</td>

    </tr>
  ));



  return (


    <div>

 
    <div >
    <Link to={`add`} className="button is-primary btn" >
    <FaPlus/> 
    <span>  Add New User</span>
    </Link>
    </div>
   
    
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
    
       <strong>Search by gender</strong>
        <select className="form-control" value={filter} onChange={(event) => setFilter(event.target.value)}>
        {genderOptions}
        </select>
        <br></br>
        <table className="table">
          <thead class="thead-dark">
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filterUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>
                  <Link
                    to={`edit/${user.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default UserList;



