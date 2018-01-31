const db = require('../models');
const moment = require('moment');
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs');
const config = require('../config.json');


function createJWT(user) {
  var payload = {
    sub: user.id,
    iat: moment().unix(),
    exp: moment().add(1, 'day').unix()
  };
  return jwt.encode(payload, config.tokenSecret);
}

function getSafeUser(user) {
  return {
    id: user.id,
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    token: createJWT(user)
  }
}

module.exports = {
  register: (req,res)=> {
    db.Users.findOne({email: req.body.email}, (error, existingUser)=> {
        if(existingUser) {
          return res.status(409).send({message: "email is already taken"});
        }else {
          bcrypt.genSalt(10,(err, salt)=> {
            if (err) {
              throw err;
            }
            bcrypt.hash(req.body.password, salt, null, (err, hash)=> {
              db.Users.create({
                name: req.body.name,
                lastname: req.body.lastname,
                email: req.body.email,
                password: hash
              })
                .then(newUser => res.send(getSafeUser(newUser)))
            })
          })
        }
    })
  },
  login: (req,res)=> {
    db.Users.findOne({ email: req.body.email }, (error, existingUser) => {
        bcrypt.compare(req.body.password, existingUser.password, (err, match)=> {
          if(err) {
            throw err
          }
          console.log(match);
          if(match) {
            console.log(existingUser)
            res.send(getSafeUser(existingUser))
          }
        })
    })
  }


  // create: (req, res)=> {
  //   db.Users
  //     .create(req.body) 
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
}