const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;y

const authorSchema = new Schema({
    name: String,
    genre : String,
    famousbooks: String,    
    image: String,
    
});

var authordata = mongoose.model('authordata',authorSchema);
module.exports = authordata;
