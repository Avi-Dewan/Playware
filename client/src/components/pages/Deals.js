import Axios from "axios"
import React from "react";
import { Link } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";

import moment from 'moment';
import './Card.css';


const Deals= () => {

    const [DealsList, setDealsList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/deals/').then((response) => {
            setDealsList(response.data);
        });
    }, []);



    const EnterDeal=(deal_id)=>{
                  
        Axios.post('http://localhost:3001/deals/operation',{
            deal_id:deal_id
        });
      };



    return (
        <div className="container">
            <div className="py-4">

{//Subscription Section--------------------------------------------------------------------------------------------------
}

           





            <div className="row mb-4">
                  <h2>Deals List:</h2>
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
                        DealsList.map((deal, key)=> {
                            
                            return(
                                <div className = 'card-container' key={key}>
                                    
                                    <div className='=card-content'>
                                        <div className='card-title'>
                                            <h3>{sdeal.name}</h3>
                                        </div>
                            
                                        <div className='card-body'>
                                            <p>
                                                <br></br>
                                                <b> <i> Name: {deal.name} </i></b>
                                              
                                                <br></br>
                                                <b>Cut: </b> {deal.cut}
                                                <br></br>
                                                <b>Left time: </b> {deal.time}
                                                <br></br>
                                                  
                                            </p>
                                            
                                        </div>
                            
                                    </div>

                                    <br></br>
                            
                                    <div className='btn'>
                                        <button onClick={()=>{EnterDeal(deal.id)}}>
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

export default Deals;