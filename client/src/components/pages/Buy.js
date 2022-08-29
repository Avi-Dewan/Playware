import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import { toast } from "react-toastify";
import { AuthContext } from "../../helpers/AuthContext";
import './Card.css';
import moment from "moment";





const Buy = (id) => {
    const [rating, setRating] = useState([]);
    const [ratingView, setRatingView] = useState([]);
    const [ReviewList,setReviewList]=useState([]);
    const [AddOnsList, setAddOnsList] = useState([]);
    const [Review,setReview]=useState();

    useEffect(() => {
        Axios.get(`http://localhost:3001/AddOns/`).then((response) => {
            setAddOnsList(response.data);
        });
    }, []);

    useEffect(() => {
        Axios.get(`http://localhost:3001/AddOns/`).then((response) => {
            setReviewList(response.data);
        });
    }, []);

    useEffect(() => {
        Axios.get(`http://localhost:3001/Rating/`).then((response) => {
            setRatingView(response.data);
        });
    }, []);


    const SubmitRating= () => {
        Axios.post("http://localhost:3001/games/developed", {
         rating:rating,
         id:id
         
          }).then((response) => {
           toast.success(response.data)
          });
   
};

    const Buy= () => {
        Axios.post("http://localhost:3001/games/buy", {
         id:id,
          }).then((response) => {
           toast.success(response.data)
          });
};

const AddToWishlist= () => {
    Axios.post("http://localhost:3001/wishlist", {
        id:id,
        
         }).then((response) => {
          toast.success(response.data)
         });
};


    const BuyAddOns = (AddOns_id) => {
        Axios.post("http://localhost:3001/AddOns", {
          AddOns_id:AddOns_id
          }).then((response) => {
          });
    };

    const addReview = () =>{

        Axios.post("http://localhost:3001/Review", {
          Review:Review
          }).then((response) => {
          });
    }
    

    return (

        <div className="container">
            <div className="py-4">






            <div className="row mb-4">
            <div className="col-lg-12 col-lg-6 border shadow rounded p-3"><img className="container-fluid" src="https://i.ibb.co/88Vw6Ct/valorant.jpg"  border="0" /></div>
            </div>

            <div className="row">
                <div className="col-lg-12 col-lg-6 border shadow rounded p-3">
                <div className="row">
                        <div className=" col-lg-6 border shadow rounded p-3">
                                                    <div className='btn border shadow rounded mb-2' >
                                                        <button  type="submit" onClick={ () => 
                                                            Buy()} >
                                                            <b>
                                                            Buy
                                                            </b>
                                                        </button>
                                                
                                                     </div>
                                                     <div className='btn border shadow rounded' >
                                                        <button  type="submit" onClick={ () => 
                                                            AddToWishlist()} >
                                                            <b>
                                                            +Wishlist
                                                            </b>
                                                        </button>
                                                
                                                     </div>
                        </div>
                        <div className=" col-lg-6 border shadow rounded p-3">
                        <input type="name" className="form-control mb-1 border shadow rounded" id="floatingInput" placeholder="name@example.com"   onChange={(event) => {
        setRating(event.target.value);
      }}></input>   
                                                     <div className='btn border shadow rounded' >
                                                        <button  type="submit" onClick={ () => 
                                                            SubmitRating()} >
                                                            <b>
                                                            Submit Rating
                                                            </b>
                                                        </button>
                                                        
                                                
                                                     </div>   
                                                     <div className="border shadow rounded">Rating: {ratingView}</div>      
                        </div>  
                </div>
            </div>
            </div>

           














{//----ReviewNote---------------------------------------------------------------
}










  
            <div className="row mb-4 mt-4">

                            <div className="col-lg-3"></div>
                            <div className="col-lg-6 border shadow rounded p-3">
                                <h2>Review Note:</h2>


                            <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(event) => {
                            setReview(event.target.value);
                            }}></input>
                            <label for="floatingInput">Review</label>
                            </div>


                            <div className="row">
                            <div className="col-lg-4"></div>
                            <div className="col-lg-4"><button type="submit" className="btn btn-secondary container-fluid"  onClick={addReview}>Add</button></div> 
                            <div className="col-lg-4"></div>  
                            </div> 

                            </div>
                            <div className="col-lg-3"></div>

            </div>
                        


            <div className="row mb-4">
                  <h2>Reviews:</h2>
            <div className="col-lg-12 col-lg-6 border shadow rounded p-3">
            <div className="container">
                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <br></br>
                <h1 align="center">    List of Reviews </h1>
                <hr></hr>
                <br></br>
                <div className='wrapper'>
                    {   
                        ReviewList.map((review, key)=> {
                            
                            return(
                                <div className = 'card-container' key={key}>
                                   
                                    <div className='=card-content'>
                                        <div className='card-title'>
                                            <h3>{review.name}</h3>
                                        </div>
                            
                                        <div className='card-body'>
                                            <p>
                                               
                                                <br></br>
                                                <b>Review : </b> {review.review} 
                                                <br></br>
                                               
                                               
                                            </p>
                                            
                                        </div>
                            
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

     {
        //--------------------------------------------------------------------------------------------------------------
     }        








<div className="row mb-4">
                  <h2>AddOns:</h2>
            <div className="col-lg-12 col-lg-6 border shadow rounded p-3">
            <div className="container">
                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <br></br>
                <h1 align="center">    List of AddOns </h1>
                <hr></hr>
                <br></br>
                <div className='wrapper'>
                    {   
                        AddOnsList.map((AddOns, key)=> {
                            
                            return(
                                <div className = 'card-container' key={key}>
                                   
                                    <div className='=card-content'>
                                        <div className='card-title'>
                                            <h3>{AddOns.name}</h3>
                                        </div>
                            
                                        <div className='card-body'>
                                            <p>
                                               
                                                <br></br>
                                                <b>Price : </b> {AddOns.price} $
                                                <br></br>
                                                <b>Total sales : </b> {AddOns.Game}
                                                <br></br>
                                               
                                            </p>
                                            
                                        </div>
                            
                                    </div>

                                    <br></br>
                            
                                                    <div className='btn' >
                                                        <button type="submit" onClick={ () => 
                                                            BuyAddOns(AddOns.AddOns_id)} >
                                                            <b>
                                                            Buy
                                                            </b>
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

export default Buy;