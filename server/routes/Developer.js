const express = require("express");
const db = require('../database');
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

const router = express.Router();

router.get("/", (req, res)=> {
  db.query(
      "SELECT * FROM developers",
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
    const {name, password, wallet, publisher_id} = req.body;

    bcrypt.hash(password, 10).then((hash) => {
        
        db.query(
            "INSERT INTO developers(name, password, wallet, publisher_id) VALUES (?, ?, ?, ?)",
            [name, hash, wallet, publisher_id],
            (err, result) => {
              if (err) {
                console.log(err);
              } else {
                res.send("Developer inserted");
              }
            }
          );

    });

});

router.post("/login", (req, res) => {
    const { name, password } = req.body;

    db.query(
        `SELECT * FROM developers WHERE name = ?`, name,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {

                const user = result[0];
              
  
                if (!user) {
                  res.json({ error: "Developer doesn't Exist" });
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
  const developer_id = req.params.id;
  db.query("DELETE FROM developers WHERE developer_id = ?", developer_id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;