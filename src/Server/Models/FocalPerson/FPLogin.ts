/* eslint-disable prettier/prettier */
const mongoose = require(`mongoose`);
const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  instituteName: { type: String, require: true },
  isActive:{type:Boolean, require:true},
  pages:{ type: [Object], require: true }
});
mongoose.models = {};
export default mongoose.model(`FPLogin`, userSchema);
