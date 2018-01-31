const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type:String, required: true },
    lastname: {type:String, required: true },
    email: {type:String, required: true, unique: true },
    password: {type:String, required: true },
    friends: [],
    genres: [],
    movies: []
});

const User = mongoose.model("User", userSchema);
module.exports = User;

