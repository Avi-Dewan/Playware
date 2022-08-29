const { Router } = require("express");
const express = require("express");
const db = require('../database');

const router = express.Router();


router.post("/", (req, res)=> {

    const {name, cut} = req.body;
  
    // console.log(req.query);
  
    db.query(
        "INSERT into deals(name, cut) VALUES(?, ?)",[name, cut],
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
        "SELECT * FROM deals",
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
        "DELETE FROM deals WHERE deal_id = ?", id,
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