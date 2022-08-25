/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../../Server/middleware/connection2';

import type { NextApiRequest, NextApiResponse } from 'next';
import { DegreeType} from '../../../../../Server/Models/HecDetails/hecDetails'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === `DELETE`) {
    try{
      const {degreeTypeId} = req.query
      console.log(degreeTypeId)
      const deldegreeType =await DegreeType.findByIdAndRemove({
        _id:degreeTypeId
      })
       
       res.status(200).json({
        success:true,
        message:`Deleted ${deldegreeType.degreeTypeTitle} degreeType`
    });
    }catch(e){
      res.status(400).json({
        success:false,
        error:e.message
    })
    }
    
  }else{
    res.status(200).json({error:`this Method is not Found`})
  }
};
export default ConnectDb(handler);
