const db = require('../models');


module.exports = {

	getUserMovies: (req, res) => {
		
			       // let userID = 'ObjectId("'+req.params.id+'")';
			       let userID = req.params.id;
		       console.log('userID', userID);
		       db.Users.findOne({ _id: userID }, (error, existingUser) => {
			           console.log("error ", error);
			           console.log("User", existingUser);
			           res.send(existingUser);
			           // return existingUser;
				       });
	},

	saveUserMovie: (userId, movieId)=> {
		// console.log(db.Users);
		db.Users.findOneAndUpdate({_id: userId}, 
			{"$push": {movies: movieId} },
			function(error, raw) {
				if (error) return error;
				console.log(raw);
			}
		)
	}
}