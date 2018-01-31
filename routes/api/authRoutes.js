const router = require("express").Router();
const authenticationController = require("../../controllers/authenticationController");

// Matches with "/api/routes"
router.post("/register", function (req,res) {
      req.checkBody('name', 'Name field cannot be empty.').notEmpty();
      req.checkBody('lastname', 'Last name field cannot be empty.').notEmpty();
      req.checkBody('email', 'The email you entered is invalid, please try again.').isEmail();
      req.checkBody('email', 'Email address must be between 4-100 characters long, please try again.').len(4, 100);
      req.checkBody('password', 'Password must be between 8-100 characters long.').len(8, 100);
      req.checkBody("password", "Password must include one lowercase character, one uppercase character, a number, and a special character.").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/, "i");
      req.checkBody('checkPassword', 'Password must be between 8-100 characters long.').len(8, 100);
      req.checkBody('checkPassword', 'Passwords do not match, please try again.').equals(req.body.password);
      
      const erros = req.validationErrors();

      if(erros) {
            console.log(`erros: ${JSON.stringify(erros)}`);
      } else {
            console.log(req.body);
            authenticationController.register(req,res);
      }
});

router.post("/login", function (req,res) {
      console.log(req.body);
      authenticationController.login(req,res);

});

module.exports = router;