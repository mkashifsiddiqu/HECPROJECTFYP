/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../../Server/middleware/connection2';

import type { NextApiRequest, NextApiResponse } from 'next';
import { Institutes,Programs} from '../../../../../Server/Models/HecDetails/hecDetails'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === `DELETE`) {
    try{
      const {programId} = req.query
      console.log(programId)
    //   i try alot of method here 
      const delProgram =await Programs.findByIdAndRemove({
        _id:programId
      })
       
       res.status(200).json({
        success:true,delProgram,
        message:`Deleted ${delProgram.programTitle}Program`
    });
    }catch(e){
      res.status(400).json({
        success:false,
        error:e.message})
    }
    
  }else{
    res.status(200).json({error:`this Method is not Found`})
  }
};
export default ConnectDb(handler);
