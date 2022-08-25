/* eslint-disable prettier/prettier */
const mongoose = require(`mongoose`);
const templateurl = new mongoose.Schema({
    templateUrl: { type: String, require: true },
    startDate: { type: Date, require: true },
    endDate :{ type: Date, require: true }
  });
const degreeTemplateSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,  
  TypeTitle: { type: String, require: true },
  instituteName: { type: String, require: true },
  isVerified: { type: Boolean, require: true },
  template: [{type:mongoose.Schema.Types.ObjectId,ref:`DegreeTemplate`}]
});
//simple
const TranscriptTemplateType=mongoose.models.TranscriptTemplateType || mongoose.model(`TranscriptTemplateType`, degreeTemplateSchema);
//image wala
const TranscriptTemplate=mongoose.models.TranscriptTemplate || mongoose.model(`TranscriptTemplate`, templateurl);
export {TranscriptTemplateType,TranscriptTemplate}