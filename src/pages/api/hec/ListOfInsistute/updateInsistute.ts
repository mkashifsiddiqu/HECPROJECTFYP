/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection2';

import type { NextApiRequest, NextApiResponse } from 'next';
import { Institutes} from '../../../../Server/Models/HecDetails/hecDetails'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === `PATCH`) {
    try{
      const newProgram =await Institutes.findByIdAndUpdate({
        _id:req.body.insistuteId,
      },{
        instituteTitle: req.body.instituteTitle,
      })
      const newProgramSaved =await newProgram.save();
      console.log(newProgramSaved)
      res.status(200).json({
        success:true,
        message:`Successfully Update new Insistute`
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
