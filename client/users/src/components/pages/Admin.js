import Axios from "axios";
import React, { useEffect, useState } from "react";

const Admin = () => {

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        Axios.get(`http://localhost:3001/auth/`).then((response) => {
            setUserList(response.data);
        });
    }, []);



    return (
        <div className="container">
            <div className="py-4">
                <h1> Admin Page</h1>
                <br></br>
                <hr></hr>
                <br></br>
                <h2> User list: </h2>
                {
                    userList.map((user, key)=> {
                        return(
                          <div key={key} className="post" >
                            <div className="title"> {user.gamer_tag} </div>
                            <div className="body">
                                <b>Name : </b> {user.name} <br></br>
                                <b>Email: </b> {user.email} 
                            </div>
                            <div className="footer"> </div>
                          </div>
                        );
                    })

                }
            </div>
        </div>

    );
};

export default Admin;