const { Router } = require("express");
const express = require("express");
const db = require('../database');

const router = express.Router();

router.post("/", (req, res)=> {

    const {name, price} = req.query;
  
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

module.exports = router;