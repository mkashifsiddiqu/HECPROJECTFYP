/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection2';

import type { NextApiRequest, NextApiResponse } from 'next';
import { Campuses} from '../../../../Server/Models/HecDetails/hecDetails'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === `PATCH`) {
    try{
      const newCampus =await Campuses.findByIdAndUpdate({
        _id:req.body.campusId,
      },{
        campusTitle: req.body.Campus,
       })
      const newCampusSaved =await newCampus.save();
      res.status(200).json({
        success:true,
        message:`Successfully Update new Campus`
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
