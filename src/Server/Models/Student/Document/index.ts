/* eslint-disable prettier/prettier */
import mongoose from 'mongoose'
const documentSchema = new mongoose.Schema({
  frontSide: {type: String, require: true },
  backSide: {type: String, require: true },
  degree: {type: String, require: true },
  other:{type: String, require: true },
  Email: {type: String, require: true },
});
mongoose.models = {};
export default mongoose.model(`DocumentDoc`, documentSchema);