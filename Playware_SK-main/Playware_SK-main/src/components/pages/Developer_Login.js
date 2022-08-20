import Axios from "axios"
import React from "react";
import { Link } from "react-router-dom"
import { useState } from "react";

const Developer_Login = () => {



    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    
    const Check = () => {
      Axios.post("http://localhost:3001/auth/Developer_Login", {
      
        name: name,
        password: password,
        
      }).then((res) => {
       console.log(res)
      });
    };
  









    return (

        <div className="container">

        <div className="py-4">




            <div className="row">
                <div className="col">
                </div>
                <div className="col border rounded shadow p-3">



                    <div className="row">
                        <div className="col"><Link className="btn btn-secondary mb-3 container-fluid" to="/Developer_Login">Login</Link></div><div className="col"><Link className="btn btn-secondary container-fluid" to="/Developer_Register">Register</Link></div>
                    </div>





                    <div className="form-floating mb-3">
                        <input type="name" className="form-control" id="floatingInput" placeholder="name@example.com"   onChange={(event) => {
        setName(event.target.value);
      }}></input>
                        <label htmlFor="floatingInput">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"   onChange={(event) => {
        setPassword(event.target.value);
      }}></input>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="row">
                    <div className="col"><button type="submit" className="btn btn-secondary container-fluid"  onClick={Check}>Submit</button></div> <div className="col"><Link className="btn btn-secondary mb-3 container-fluid" to="/Admin_Options">Back</Link></div>
                    </div>






                </div><div className="col">
                </div>


            </div>






        </div>
    </div>


    );
};

export default Developer_Login;