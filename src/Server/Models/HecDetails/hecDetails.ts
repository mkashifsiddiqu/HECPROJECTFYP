/* eslint-disable prettier/prettier */
import mongoose from 'mongoose'
import mongooseAutoPopulate from 'mongoose-autopopulate'
const sessionSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    sessionTitle: String,
})
const degreeTypeSchema = new mongoose.Schema({
  
    id: mongoose.Schema.Types.ObjectId,
    degreeTypeTitle: String,
    sessions: [{type:mongoose.Schema.Types.ObjectId,ref:`SessionDoc`}],

})
const departmentSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    departmentTitle: String,
    degreetypes: [{type:mongoose.Schema.Types.ObjectId,ref:`DegreeTypeDoc`}],
  
})
const campusSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    campusTitle: String,
    departments: [{type:mongoose.Schema.Types.ObjectId,ref:`DepartmentDoc`}],
 
})
const programsSchema = new mongoose.Schema({
      id: mongoose.Schema.Types.ObjectId,
      programTitle: String,
      degree_title: String,
      campuses: [{type:mongoose.Schema.Types.ObjectId,ref:`CampuseDoc`}]
    
})

const institutesSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  instituteTitle: String,
  programs: [{type:mongoose.Schema.Types.ObjectId, ref:`ProgramDoc`}],
})
const countrySchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  countryTitle: { type: String, required: true },
  institutes: [{type:mongoose.Schema.Types.ObjectId, ref:`InstitutesDoc`, autopopulate: true}],
})

const Country = mongoose.models.CountryDoc || mongoose.model(`CountryDoc`, countrySchema)
const Institutes =mongoose.models.InstitutesDoc || mongoose.model(`InstitutesDoc`,institutesSchema)
const Programs =mongoose.models.ProgramDoc || mongoose.model(`ProgramDoc`,programsSchema)
const Campuses =mongoose.models.CampuseDoc || mongoose.model(`CampuseDoc`,campusSchema)
const Department =mongoose.models.DepartmentDoc || mongoose.model(`DepartmentDoc`,departmentSchema)
const DegreeType =mongoose.models.DegreeTypeDoc || mongoose.model(`DegreeTypeDoc`,degreeTypeSchema)
const Session =mongoose.models.SessionDoc || mongoose.model(`SessionDoc`,sessionSchema)
export {Country,Institutes,Programs,Campuses,Department,DegreeType,Session};
