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

router.post("/addGame", (req, res)=> {

  const {game_id, sub_id, delist_date} = req.body;

  // console.log(req.query);

  db.query(
      "INSERT into game_subscriptions(subscription_id, game_id, delist_date) VALUES(?, ?, ?)",[sub_id, game_id,  delist_date],
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

router.get("/subscribed/:id", (req, res)=> {

  const id = req.params.id;

  db.query(
      "CALL get_subscription_games(?)", id,
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.json(result[0]);
        }
      }
    );
});

router.get("/notSubscribed/:id", (req, res)=> {

  const id = req.params.id;

  db.query(
      "CALL get_not_subscription_games(?)", id,
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.json(result[0]);
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

router.get("/:id", (req, res)=> {

  const id = req.params.id;

  // console.log(id);
  
  db.query(
      "SELECT * FROM subscriptions WHERE subscription_id = ?", id, 
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.json(result[0]);
          
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

router.delete("/deleteGame", (req, res)=> {

  const {game_id, sub_id} = req.query;

  // console.log(id);

  db.query(
    "DELETE FROM game_subscriptions WHERE subscription_id = ? AND game_id = ?", [sub_id, game_id],
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