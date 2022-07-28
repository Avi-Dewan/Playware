const express = require("express");
const db = require('../database');
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

const router = express.Router();

router.post("/", (req, res) => {
    const {name, email, password, gamer_tag} = req.body;

    bcrypt.hash(password, 10).then((hash) => {
        
        db.query(
            "INSERT INTO users(name, email, password, gamer_tag) VALUES (?, ?, ?, ?)",
            [name, email, hash, gamer_tag],
            (err, result) => {
              if (err) {
                console.log(err);
              } else {
                res.send("Values Inserted");
              }
            }
          );

    });

});

router.post("/login", (req, res) => {
    const { email, password } = req.body;

    db.query(
        `SELECT * FROM users WHERE email = ?`, email,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {

                const user = result[0];
              
  
                if (!user) {
                  res.json({ error: "User Doesn't Exist" });
                  return;
                }

                
              
                bcrypt.compare(password, user.password).then((match) => {
                  if (!match) {
                      res.json({ error: "Wrong Username And Password Combination" });
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


module.exports = router;