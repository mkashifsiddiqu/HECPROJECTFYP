/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection2';

import type { NextApiRequest, NextApiResponse } from 'next';
import { Programs} from '../../../../Server/Models/HecDetails/hecDetails'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === `PATCH`) {
    try{
      const newProgram =await Programs.findByIdAndUpdate({
        _id:req.body.programId,
      },{
       programTitle: req.body.Program,
       degree_title: req.body.DegreeNameOnUni
      })
      const newProgramSaved =await newProgram.save();
      console.log(newProgramSaved)
      res.status(200).json({
        success:true,
        message:`Successfully Update new Program`
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
