/* eslint-disable prettier/prettier */
const mongoose = require(`mongoose`);
const Comments = new mongoose.Schema({
    title: String,
    body: String,
    date: Date
});

const BlogPost = new mongoose.Schema({
    author    : String,
    title: String,
    body      : String,
    date      : Date,
    comments  : [Comments]
    ,meta: {
        votes : Number,
        favs  : Number
    }
});
mongoose.models = {};
export default mongoose.model(`blogpost`, BlogPost);