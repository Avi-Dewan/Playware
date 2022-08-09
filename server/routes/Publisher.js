const express = require("express");
const db = require('../database');
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

const router = express.Router();

router.get("/", (req, res)=> {
  db.query(
      "SELECT * FROM publishers",
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
      }
    );
});

router.post("/", (req, res) => {
    const {name, password, wallet} = req.body;

    bcrypt.hash(password, 10).then((hash) => {
        
        db.query(
            "INSERT INTO publishers(name, password, wallet) VALUES (?, ?, ?)",
            [name, hash, wallet],
            (err, result) => {
              if (err) {
                console.log(err);
              } else {
                res.send("Publisher inserted");
              }
            }
          );

    });

});

router.post("/login", (req, res) => {
    const { name, password } = req.body;

    db.query(
        `SELECT * FROM publishers WHERE name = ?`, name,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {

                const user = result[0];
              
  
                if (!user) {
                  res.json({ error: "Publisher Doesn't Exist" });
                  return;
                }

                
              
                bcrypt.compare(password, user.password).then((match) => {
                  if (!match) {
                      res.json({ error: "Wrong name And Password Combination" });
                      return;
                  } 
            
              
                  const accessToken = sign(
                    { email: user.email, id: user.id },
                    "importantsecret"
                  );
              
                  res.json(accessToken);
                });
             }
        }
    );
  
   
});

router.delete("/delete/:id", (req, res) => {
  const publisher_id = req.params.id;
  db.query("DELETE FROM publishers WHERE publisher_id = ?", publisher_id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;