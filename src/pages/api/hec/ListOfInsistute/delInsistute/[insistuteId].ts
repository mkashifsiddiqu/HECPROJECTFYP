/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../../Server/middleware/connection';

import type { NextApiRequest, NextApiResponse } from 'next';
import { Country,Institutes} from '../../../../../Server/Models/HecDetails/hecDetails'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === `DELETE`) {
    try{
      const {insistuteId} = req.query
      const delProgram =await Institutes.findByIdAndRemove({
        _id:insistuteId
      })
       res.status(200).json({
        success:true,delProgram,
        message:`Deleted ${delProgram.instituteTitle } Institute`
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
