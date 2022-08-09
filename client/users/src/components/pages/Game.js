import Axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from "react";
import './Card.css';

const Game = () => {


    const [gamesList, setGameList] = useState([]);

    useEffect(() => {
        Axios.get(`http://localhost:3001/games/`).then((response) => {
            setGameList(response.data);
        });
    }, []);




    return (

        <div className="container">
                <br></br>
                <br></br>
                <hr></hr>
          
                <h1 align="center">    List of Games </h1>

                <hr></hr>
                <br></br>

                

    
                <div className='wrapper'>
                    {
                        gamesList.map((game, key)=> {
                            
                            return(
                                <div className = 'card-container' key={key}>
                                    <div className='image-container' >
                                        
                                    <img src="https://i.ibb.co/88Vw6Ct/valorant.jpg" alt="valorant" border="0" />
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
                                            </p>
                                            
                                        </div>
                            
                                    </div>
                            
                                    <div className='btn'>
                                        <button>
                                            <a href='/'>
                                                Install
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
        

    );
};

export default Game;