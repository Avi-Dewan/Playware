const { Router } = require("express");
const express = require("express");
const db = require('../database');


const router = express.Router();

router.get("/", (req, res)=> {
    db.query(
        "SELECT * FROM games",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.json(result);
          }
        }
      );
});

router.get("/top_games", (req, res)=> {

  // const queryObject = URL.parse(req.url, true).query;
  // console.log(queryObject);

  console.log(req.query);

  if(req.query.type == "free") {
    res.send("top free")
  } else {
    res.send("top_paid")
  }
  
});


router.get("/yourOnes", (req, res)=> {

  const {who, id} = req.query;

  // console.log(req.query);

  db.query(
      "CALL get_your_games(?, ?)", [who, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.json(result[0]);
        }
      }
    );
});

//can be a procedure
router.get("/genres", (req, res)=> {
  db.query(
      "SELECT DISTINCT(genre) FROM games",
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
      }
    );
});


router.get("/gamesByGenre", (req, res)=> {
  const {genre} = req.body;
  db.query(
      "SELECT * FROM games WHERE genre = ?",genre,
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
      }
    );
});


router.get("/byId/:id",  (req, res) => {
    const game_id = req.params.id;
    
    db.query(
        "SELECT * FROM games where game_id = ?", game_id,
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
            res.json(result);
          }
        }
    );
});

router.post("/developed", (req, res) => {

  const {name, genre, img_src, developer_id} = req.body;

  db.query(
      "INSERT INTO games(name, genre, img_src, developer_id) VALUES (?, ?, ?, ?)",
      [name, genre, img_src, developer_id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Game - added as developed");
        }
      }
  );

});

router.put("/updateStatus", (req, res) => {

  let {state, game_id, price, developer_cut, publisher_cut} = req.body;

  // console.log(req.body);

  if(state != 3 && state != 6 ) {
      price = 0;
  }  

  if(!(state == 4 || state == 7 || state == 9 || state == 11 )) {
    developer_cut = 40;
    publisher_cut = 50;
  }

  // console.log(state , game_id, price, developer_cut, publisher_cut);
  
  db.query(
      "CALL update_game_status(?, ?, ?, ?, ?) ", [state , game_id, price, developer_cut, publisher_cut],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send({success: true});
        }
      }
  );

});




module.exports = router;