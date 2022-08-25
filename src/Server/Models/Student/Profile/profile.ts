/* eslint-disable prettier/prettier */
const mongoose = require(`mongoose`);
const userSchema = new mongoose.Schema({
  Email: { type: String, require: true },
  imageurl: { type: String, require: true },

});
mongoose.models = {};
export default mongoose.model(`StdProfile`, userSchema);
