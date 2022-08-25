/* eslint-disable prettier/prettier */
import mongoose from 'mongoose'
const appSchema = new mongoose.Schema({
  Application_id: { type: mongoose.Schema.Types.ObjectId },
  Application_Type: { type: String, require: true },
  Date: { type: Date, require: true },
  Status: { type: String, require: true },
  email: { type: String, require: true },
  ModeOfAttestation:{
    Mode: { type: String,require: true  },
    City: { type: String, require: true },
    Disability: { type: String, require: true },
    WhereCheck:{ type: String, require: true },
  }
});
//  mongoose.models =a {};
export default mongoose.models.ApplicationDoc || mongoose.model(`ApplicationDoc`, appSchema);
