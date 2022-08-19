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

  // console.log(req.query);

  if(req.query.type == "free") {
    res.send("top free")
  } else {
    res.send("top_paid")
  }

  
});

router.get("/top_free", (req, res)=> {
  db.query(
    "CALL top_free_games()",
      (err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.json(results[0]);
        }
      }
    );
});

router.get("/top_paid", (req, res)=> {
  db.query(
      "CALL top_paid_games",
      (err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.json(results[0]);
        }
      }
    );
});

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

router.post("/", (req, res) => {

  // console.log(req.files.sampleFile);

  const {name, genre, price, release_date, img_src} = req.body;

  db.query(
      "INSERT INTO games(name, genre, price, release_date, img_src) VALUES (?, ?, ?, ?, ?)",
      [name, genre, price, release_date, img_src],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
  );

});


module.exports = router;