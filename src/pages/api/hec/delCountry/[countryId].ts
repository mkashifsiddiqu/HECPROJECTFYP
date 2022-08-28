/* eslint-disable prettier/prettier */
import ConnectDb from '@/Server/middleware/connection';

import type { NextApiRequest, NextApiResponse } from 'next';
import { Country} from '@/Server/Models/HecDetails/hecDetails'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === `DELETE`) {
    try{
      const {countryId} = req.query
     
    //   i try alot of method here 
      const delProgram =await Country.findByIdAndRemove({
        _id:countryId
      })
       
       res.status(200).json({
        success:true,delProgram,
        message:`Deleted ${delProgram.countryTitle} Country`
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
