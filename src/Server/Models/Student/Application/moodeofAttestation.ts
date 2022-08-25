/* eslint-disable prettier/prettier */
import mongoose from 'mongoose'
const appSchema = new mongoose.Schema({
  Mode: { type: String,require: true  },
  City: { type: String, require: true },
  Disability: { type: String, require: true },
  WhereCheck:{ type: String, require: true },
});
export default mongoose.models.ModeDoc || mongoose.model(`ModeDoc`, appSchema);
