import Axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



 


const Login = () => {

    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const Check = () => {
      Axios.post("http://localhost:3001/auth/login", {
      
        email: email,
        password: password,
        
      }).then((res) => {
            if(res.data.error) alert(res.data.error);
            else {
                navigate("/Admin");
            }
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
                            <div className="col"><Link class="btn btn-secondary mb-3" to="/Login">Login</Link></div><div className="col"><Link class="btn btn-secondary" to="/Register">Register</Link></div>
                        </div>





                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"   onChange={(event) => {
            setEmail(event.target.value);
          }}></input>
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"   onChange={(event) => {
            setPassword(event.target.value);
          }}></input>
                            <label for="floatingPassword">Password</label>
                        </div>
                        <button type="submit" class="btn btn-secondary"  onClick={Check}>Submit</button>






                    </div><div className="col">
                    </div>


                </div>






            </div>
        </div>

    );
};

export default Login;