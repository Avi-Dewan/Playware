import { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
const { verify } = require("jsonwebtoken");


function User() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const signedUser = verify(user, "importantsecret");

        Axios.get(`http://localhost:3001/auth/${signedUser.user_id}`).then((response) => {
            setUser(response.data);
        });

        
    }, []);

    return (
    <div>
        {user.name}
    </div>
    );
};

export default User;

