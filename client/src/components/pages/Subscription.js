import Axios from "axios"
import React from "react";
import { Link } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";

import moment from 'moment';
import './Card.css';


const Subscription= () => {


    
    const [subList, setSub] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/Subscription/').then((response) => {
            setSub(response.data);
        });
    }, []);



    const EnterSubscription=(Sub_id)=>{
                  
        Axios.post('http://localhost:3001/subs/operation',{
            Sub_id:Sub_id
        });
      };



    return (
        <div className="container">
            <div className="py-4">


           





            <div className="row mb-4">
                  <h2>Subscription List:</h2>
            <div className="col-lg-12 col-lg-6 border shadow rounded p-3">
            <div className="container">
        
                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <div className='wrapper'>
                    {   
                        subList.map((subscription, key)=> {
                            
                            return(
                                <div className = 'card-container' key={key}>
                                    
                                    <div className='=card-content'>
                                        <div className='card-title'>
                                            <h3>{subscription.name}</h3>
                                        </div>
                            
                                        <div className='card-body'>
                                            <p>
                                                <br></br>
                                                <b> <i> Name: {subscription.name} </i></b>
                                                <br></br>
                                                <b>Number of Games: </b> {subscription.number}
                                                <br></br>
                                                <b>Monthly Payment: </b> {subscription.price}
                                                <br></br>
                                                <b>Left time: </b> {subscription.time}
                                                <br></br>
                                                  
                                            </p>
                                            
                                        </div>
                            
                                    </div>

                                    <br></br>
                            
                                    <div className='btn'>
                                        <button onClick={()=>{EnterSubscription(subscription.id)}}>
                                               Enter
                                        </button>
                                        
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                </div>

                               
                            );
                        })
                    }
                </div>

           
        </div>
            </div>
            </div>





            </div>
        </div>

    );
};

export default Subscription;