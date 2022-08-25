/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../../Server/middleware/connection2';

import type { NextApiRequest, NextApiResponse } from 'next';
import { Campuses} from '../../../../../Server/Models/HecDetails/hecDetails'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === `DELETE`) {
    try{
      const {campusId} = req.query
      console.log(campusId)
      const delcampus =await Campuses.findByIdAndRemove({
        _id:campusId
      })
       
       res.status(200).json({
        success:true,delcampus,
        message:`Deleted ${delcampus.campusTitle} campus`
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
