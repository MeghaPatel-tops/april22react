import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

function Useredit() {
  const [editid] = useSearchParams();
  const [userData, setUserData] = useState({});
  const uname = useRef();
  const email = useRef();
  const pwd = useRef();
  const contact = useRef();
  const navigate = useNavigate();

  const getSingleUser = async (id) => {
    try {
      let user = await axios.get(`http://localhost:5000/users/${id}`);
      if (user) {
        setUserData(user.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = async () => {
    let id = editid.get('id');
    let newData = {
      username: uname.current.value,
      email: email.current.value,
      pwd: pwd.current.value,
      contact: contact.current.value,
    };

    try {
      const result = await axios.put(`http://localhost:5000/users/${id}`, newData);
      console.log(result);
      if (result.status === 200) {
        navigate('/user');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let id = editid.get('id');
    getSingleUser(id);
  }, []);

  return (
    <div>
      <div className="containerFluid p-5">
        <h1>User Registration Form</h1>
        <form>
          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              name="username"
              ref={uname}
              defaultValue={userData.username}
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              ref={email}
              defaultValue={userData.email}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="pwd"
              ref={pwd}
              defaultValue={userData.pwd}
            />
          </div>
          <div className="form-group">
            <label>Contact Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Contact"
              name="contact"
              ref={contact}
              defaultValue={userData.contact}
            />
          </div>

          <button type="button" className="btn btn-primary" onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Useredit;
