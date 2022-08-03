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


router.get("/byId/:id",  (req, res) => {
    const id = req.params.id;
    
    db.query(
        "SELECT * FROM games where id = ?", id,
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