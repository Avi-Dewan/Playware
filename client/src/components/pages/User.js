import Axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from "react";
import './Card.css';

const User = () => {


    const [gamesList, setGameList] = useState([]);
   

    useEffect(() => {
        Axios.get(`http://localhost:3001/games/`).then((response) => {
            setGameList(response.data);
        });

    }, []);

    const [subList, setSubList] = useState([]);
   

    useEffect(() => {
        Axios.get(`http://localhost:3001/games/`).then((response) => {
            setSubList(response.data);
        });

    }, []);


    const EnterGame=(game_id)=>{
        
        Axios.post('http://localhost:3001/game/operation',{
            id:game_id, 
            ArrivalDate:ArrivalDate,
            DelistDate:DelistDate
        });
      };

      const EnterSub=(sub_id)=>{
        
        Axios.post('http://localhost:3001/sub/operation',{
            id:game_id, 
            ArrivalDate:ArrivalDate,
            DelistDate:DelistDate
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
                                <div className = 'card-container' key={key} onClick={()=>{EnterGame(game.id)}}>
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
                                            </p>
                                            
                                        </div>
                            
                                    </div>

                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                </div>

                               
                            );
                        })
                    }
                </div>















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
                        subList.map((sub, key)=> {
                            
                            return(
                                <div className = 'card-container' key={key} onClick={()=>{EnterSub(sub.id)}}> 
                                    <div className='image-container' >
                                        
                                    <img src={sub.img_src} alt={sub.name} height="250px" width="290px" border="0" />
                                    </div>
                            
                                    <div className='=card-content'>
                                        <div className='card-title'>
                                            <h3>{sub.name}</h3>
                                        </div>
                            
                                        <div className='card-body'>
                                            <p>
                                                <br></br>
                                                <b>Expire date: </b> {moment(sub.expire_date).format("L")}
                                                <br></br>
                                                <b>Month left: </b> {sub.left} $
                                                <br></br>
                                                <b>Total Games: </b> {sub.total_games}
                                            </p>
                                            
                                        </div>
                            
                                    </div>

                                    <br></br>
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

export default User;