/* eslint-disable prettier/prettier */
const mongoose = require(`mongoose`);
const userSchema = new mongoose.Schema({
  firstname: { type: String, require: true },
  lastname: { type: String, require: true },
  Email: { type: String, require: true },
  password: { type: String, require: true },
  identityNumber: { type: String, require: true },
  identityType: { type: String, require: true },
  Nationality: { type: String, require: true },
  phone: { type: String, require: true },
});
mongoose.models = {};
export default mongoose.model(`StdLogin`, userSchema);
