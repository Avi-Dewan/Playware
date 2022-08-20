import Axios from "axios"
import React from "react";
import { Link } from "react-router-dom"
import { useState } from "react";

const Publisher_Register = () => {

 

const [password, setPassword] = useState("");
const [name, setName] = useState("");



const addPublisher = () => {
  Axios.post("http://localhost:3001/auth", {
    name:name,
    password: password,
   
    
  }).then(() => {

    console.log("User Added")
   
  });
};
  return (

    <div className="container">

      <div className="py-4">
        <div className="row ">
          <div className="col"></div>
          <div className="col border shadow rounded p-3">
            <div className="row">
              <div className="col"><Link className="btn btn-secondary mb-3 container-fluid" to="/Publisher_Login">Login</Link></div><div className="col"><Link className="btn btn-secondary container-fluid" to="/Publisher_Register">Register</Link></div>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(event) => {
                setName(event.target.value);
              }}></input>
              <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(event) => {
                setPassword(event.target.value);
              }}></input>
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="row">
                    <div className="col"><button type="submit" className="btn btn-secondary container-fluid"  onClick={addPublisher}>Submit</button></div> <div className="col"><Link className="btn btn-secondary mb-3 container-fluid" to="/Admin_Options">Back</Link></div>
                    </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>

  );
};

export default Publisher_Register;