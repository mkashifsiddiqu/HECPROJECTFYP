/* eslint-disable prettier/prettier */
const mongoose = require(`mongoose`);
const instituteSchema = new mongoose.Schema({
  label: { type: String, require: true },
  value: { type: Number, require: true },
});
mongoose.models = {};
export default mongoose.model(`institute`, instituteSchema);
