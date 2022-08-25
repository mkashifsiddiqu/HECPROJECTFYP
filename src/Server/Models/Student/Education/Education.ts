/* eslint-disable prettier/prettier */
import mongoose from 'mongoose'
const EduSchema = new mongoose.Schema({
  Email: { type: String, require: true },
  QualificationLevel: { type: String, require: true },
  QualificationStatus: { type: String, require: true },
  StartDate: { type: Date, require: true },
  EndDate: { type: Date, require: true },
  PersonOnDegree: { type: String, require: true },
  Country: { type: String, require: true },
  InstituteName: { type: String, require: true },
  ProgramTitle: { type: String, require: true },
  UniversityNameOnDegree: { type: String, require: true },
  CampusTitle: { type: String, require: true },
  DepartmentTitle: { type: String, require: true },
  DegreeType: { type: String, require: true },
  SessionType: { type: String, require: true },
  AreaOfResearch: { type: String, require: true },
  RollNumber: { type: String, require: true },
});
mongoose.models = {};
export default mongoose.model(`Education`, EduSchema);