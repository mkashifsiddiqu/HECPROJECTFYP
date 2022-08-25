/* eslint-disable prettier/prettier */
const mongoose = require(`mongoose`);
const appSchema = new mongoose.Schema({
  Alert_id: { type: mongoose.Schema.Types.ObjectId },
  Alert_Name: { type: String, require: true },
  Alert_Content: { type: String, require: true },
  Date: { type: Date, require: true },
  Status: { type: String, require: true },
  User_id: { type: mongoose.Schema.Types.ObjectId, ref:`User`},
  
});
mongoose.models = {};
export default mongoose.model(`Alert`, appSchema);