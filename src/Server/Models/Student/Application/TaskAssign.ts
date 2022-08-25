/* eslint-disable prettier/prettier */
const mongoose = require(`mongoose`);
const taskSchema = new mongoose.Schema({
  Task_id: { type: mongoose.Schema.Types.ObjectId },
  Task_Type: { type: String, require: true },
  Date: { type: Date, require: true },
  password: { type: String, require: true },
  Status: { type: String, require: true },
  User_id: { type: mongoose.Schema.Types.ObjectId, ref:`User`},
  
});
mongoose.models = {};
export default mongoose.model(`Task`, taskSchema);
