const mongoose = require('mongoose');
/*
object Destructuring:
const Schema = mongoose.Schema; equal to const {Schema}= mongoose
*/
const {Schema}= mongoose;

const userSchema= new Schema({
    googleId:String,
    credits: {type: Number, default: 0}
});

mongoose.model('users', userSchema);