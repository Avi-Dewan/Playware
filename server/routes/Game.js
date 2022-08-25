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
      "CALL top_paid_games()",
      (err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.json(results[0]);
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

  let {state, game_id, price} = req.body;

  if(state != 3 ) {
      price = 0;
  }  

  db.query(
      "CALL update_game_status(?, ?, ?) ", [state , game_id, price],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send({success: true});
        }
      }
  );

});

// router.put("/requested", (req, res) => {

//   const {game_id, price} = req.body;

//   db.query(
//       "UPDATE games SET status = ?, price = ?  WHERE game_id = ? ", ["Requested", price, game_id ],
//       (err, result) => {
//         if (err) {
//           console.log(err);
//         } else {
//           res.send("Game - requested to stored");
//         }
//       }
//   );

// });

// router.put("/published", (req, res) => {

//   const {game_id, price} = req.body;

//   db.query(
//       "UPDATE games SET status = ?, price = ?  WHERE game_id = ? ", ["Published", price, game_id ],
//       (err, result) => {
//         if (err) {
//           console.log(err);
//         } else {
//           res.send("Game - requested to stored");
//         }
//       }
//   );

// });

// router.put("/stored", (req, res) => {

//   const {game_id, release_date} = req.body;

//   db.query(
//       "UPDATE games SET status = ?, release_date = ?  WHERE game_id = ? ",  ["Stored", release_date ,game_id ],
//       (err, result) => {
//         if (err) {
//           console.log(err);
//         } else {
//           res.send("Game stored");
//         }
//       }
//   );

// });



module.exports = router;