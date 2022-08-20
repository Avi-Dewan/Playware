import Axios from "axios";
import React, { useEffect, useState } from "react";

import moment from 'moment';
import './Card.css';


const Developer = () => {






  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  
  const addGame = () => {
    Axios.post("http://localhost:3001/auth/Add_Game", {
    
      name: name,
      genre: genre,
      
    }).then((res) => {
     console.log(res)
    });
  };









  const [gamesList, setGameList] = useState([]);
 

  useEffect(() => {
      Axios.get(`http://localhost:3001/games/`).then((response) => {
          setGameList(response.data);
      });

     
  }, []);





    return (
        <div className="container">
            <div className="py-4">
               
                <div className="row mb-4">

                    <div className="col-lg-3"></div>

                    <div className="col-lg-6 border shadow rounded p-3">
                        <h2>Game Description:</h2>


                    <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(event) => {
                    setName(event.target.value);
                  }}></input>
                  <label htmlFor="floatingInput">Name</label>
                </div>


                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(event) => {
                    setGenre(event.target.value);
                  }}></input>
                  <label htmlFor="floatingInput">Genre</label> 
                </div>

<div className="row">
    <div className="col-lg-4"></div>
                <div className="col-lg-4"><button type="submit" className="btn btn-secondary container-fluid"  onClick={addGame}>Add</button></div> 
                <div className="col-lg-4"></div>  
                </div> 
                    
                    </div>
                    <div className="col-lg-3"></div>


                </div>

                <div className="row mb-4">
                  <h2>Developed Games List:</h2>
            <div className="col-lg-12 col-lg-6 border shadow rounded p-3">











            <div className="container">
               


                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <br></br>

          
                <h1 align="center">    List of All Games </h1>
                <hr></hr>
                <br></br>

                

    
                <div className='wrapper'>
                    {   
                        gamesList.map((game, key)=> {
                            
                            return(
                                <div className = 'card-container' key={key}>
                                    <div className='image-container' >
                                        
                                    <img src={game.img_src} alt={game.name} height="250px" width="290px" border="0" />
                                    </div>
                            
                                    <div className='=card-content'>
                                        <div className='card-title'>
                                            <h3>{game.name}</h3>
                                        </div>
                            
                                        <div className='card-body'>
                                            <p>
                                                <b> <i> Genre: {game.genre} </i></b>
                                                <br></br>
                                                <b>Release date: </b> {moment(game.release_date).format("L")}
                                                <br></br>
                                                <b>Price : </b> {game.price} $
                                                <br></br>
                                                <b>Total sales : </b> {game.total_sales}
                                                <br></br>
                                                <b>Total sales : </b> {game.status}
                                            </p>
                                            
                                        </div>
                            
                                    </div>

                                    <br></br>
                            
                                    <div className='btn'>
                                        <button>
                                            <a href='/Game'>
                                               Request For Publish
                                            </a>
                                        </button>
                                        
                                    </div>
                                    <div className='btn'>
                                        <button>
                                            <a href='/Game'>
                                            Request to pull
                                            </a>
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

export default Developer;