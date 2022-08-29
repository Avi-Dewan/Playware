const { Router } = require("express");
const express = require("express");
const db = require('../database');

const router = express.Router();

router.post("/", (req, res)=> {

    const {name, price} = req.body;
  
    // console.log(req.query);
  
    db.query(
        "INSERT into subscriptions(name, price) VALUES(?, ?)",[name, price],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.json("Success");
          }
        }
      );
});

router.get("/", (req, res)=> {

    
  
    db.query(
        "SELECT * FROM subscriptions",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.json(result);
          }
        }
      );
});


router.delete("/", (req, res)=> {

    const {id} = req.query;

    // console.log(id);
  
    db.query(
        "DELETE FROM subscriptions WHERE subscription_id = ?", id,
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.json(result);
          }
        }
      );
});

module.exports = router;