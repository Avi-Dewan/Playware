import Axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from "react";
import './Card.css';

const Deals_Add = () => {


    const [gamesList, setGameList] = useState([]);

   
    useEffect(() => {
        Axios.get(`http://localhost:3001/games/`).then((response) => {
            setGameList(response.data);
        });

    }, []);

    const AddGame=(game_id)=>{
        
        Axios.post('http://localhost:3001/game/operation',{
            id:game_id, 
        });
      };

      const Delist=(game_id)=>{
        
        Axios.post('http://localhost:3001/game/operation',{
            id:game_id, 
        });
      };



    return (

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
                                            </p>
                                            
                                        </div>
                            
                                    </div>

                                    <br></br>

                                   
                            
                                    <div className='btn'>
                                        <button onClick={()=>{AddGame(publisher.id,publisher.state)}}>
                                               Add
                                        </button>
                                        
                                    </div>
                                    <div className='btn'>
                                        <button onClick={()=>{Delist(publisher.id,publisher.state)}}>
                                               Delete
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
        

    );
};

export default Deals_Add;