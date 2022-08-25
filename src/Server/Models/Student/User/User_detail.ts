/* eslint-disable prettier/prettier */
import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
  User_id: { type: mongoose.Schema.Types.ObjectId, require: true },
  Roll_NO: { type: String, require: true },
  Email: { type: String, require: true },
  First_Name: { type: String, require: true },
  Middle_Name: { type: String, require: true },
  Last_Name: { type: String, require: true },
  Cell_Phone: { type: String, require: true },
  Regligion: { type: String, require: true },
  Martial_Status: { type: String, require: true },
  Date_of_Birth: { type: Date, require: true },
  Domicile_Province:{ type: String, require: true },
  Domicile_City:{ type: String, require: true },
  Age:{type:Number, require: true},
  Gender:{ type: String, require: true },
  Father_Name:{type: String, require: true},
  Father_CNIC:{type: String, require: true},
  Father_Currently:{type: String, require: true},
  Address:{type: String, require: true},
  Postal_Code:{type: String, require: true},
  Country:{type: String, require: true},
  Semester:{type: String, require: true},
  AreaofInterest:[{type: String, require: true}],
  Application: [{type: mongoose.Schema.Types.ObjectId, ref:`ApplicationDoc`}],
  Document:[{type: mongoose.Schema.Types.ObjectId,ref:`DocumentDoc`}]
});
// mongoose.models = {};
export default mongoose.models.UserDoc || mongoose.model(`UserDoc`, userSchema);
