/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection2';

import type { NextApiRequest, NextApiResponse } from 'next';
import { Institutes,Programs} from '../../../../Server/Models/HecDetails/hecDetails'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === `POST`) {
    try{
      const {InstituteName} = req.query
      console.log(InstituteName)
    //   i try alot of method here 
      const newProgram =await new Programs({
       programTitle: req.body.Program,
       degree_title: req.body.DegreeNameOnUni
      })
      const newProgramSaved =await newProgram.save();
      console.log(newProgramSaved)
      const UpdateProgram = await Institutes.findOneAndUpdate({
        instituteTitle: req.body.instituteName
        },
        {   
            $push: {
                programs: {
                    _id: newProgramSaved._id
                }
            }
        })
       const upProgramSaved=await UpdateProgram.save();
       console.log(upProgramSaved)
       res.status(200).json({
        success:true,
        message:`Successfully Added new Program`
    });
    }catch(e){
      res.status(400).json({
        success:false,
        error:e.message})
    }
    
  }else{
    res.status(200).json(`this Method is not Found`)
  }
};
export default ConnectDb(handler);
