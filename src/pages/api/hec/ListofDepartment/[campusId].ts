/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection2';

import type { NextApiRequest, NextApiResponse } from 'next';
import { Campuses} from '../../../../Server/Models/HecDetails/hecDetails'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === `GET`) {
    try{
      const {campusId} = req.query
      const campusList =await  Campuses.findOne({_id:campusId})
      .populate({ path: `departments` })
      const Department = campusList.departments
      res.status(200).json({Department});
    }catch(e){
      res.status(400).json({success:false,
        error:e.message})
    }
    
  }else{
    res.status(200).json(`this Method is not Found`)
  }
};
export default ConnectDb(handler);
