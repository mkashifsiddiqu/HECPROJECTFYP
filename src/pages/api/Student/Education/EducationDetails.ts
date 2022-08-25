/* eslint-disable prettier/prettier */

import ConnectDb from '../../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import Education from '../../../../Server/Models/Student/Education/Education';

// import CryptoJS from 'crypto-js'
// import bcrypt from 'bcrypt'
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == `POST`) {
    const Edu = await new Education({
        Email: req.body.Email,
        QualificationLevel: req.body.Qualilevel,
        QualificationStatus: req.body.degStatus,
        StartDate: req.body.degstart,
        EndDate: req.body.endDeg,
        PersonOnDegree: req.body.NameDeg,
        Country: req.body.Country,
        InstituteName: req.body.InsituteName,
        ProgramTitle: req.body.Program,
        UniversityNameOnDegree: req.body.InsistuteNameOnDegree,
        CampusTitle: req.body.Campus,
        DepartmentTitle: req.body.Department,
        DegreeType: req.body.DegreeType,
        SessionType: req.body.Session,
        AreaOfResearch: req.body.AreaofSearch,
        RollNumber: req.body.RollNo,
    });
    const EduSaved = await Edu.save();
    if (EduSaved) {
      res.status(201).json({ success: true,EduSaved});
    } else {
      res.status(201).json({ success: false });
    }
    
  } else if (req.method == `PATCH`){
    const edu = await Education.find({Email:req.body.Email});
    res.status(200).json({ edu });
  }else if (req.method == `DELETE`){
    const edu = await Education.findOneAndDelete({_id:req.body.id});
    res.status(200).json({ edu });
  }
};
export default ConnectDb(handler);
