const mongoose = require('mongoose');
const { Schema } = mongoose // const Schema = mongoose.Schema  es6 destructring

const userSchema = new Schema({
    googleId:String
});

mongoose.model('users',userSchema);  //to create a new collection "users"