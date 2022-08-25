/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection2';

import type { NextApiRequest, NextApiResponse } from 'next';
import { Programs} from '../../../../Server/Models/HecDetails/hecDetails'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === `GET`) {
    try{
      const {programId} = req.query
      //i try alot of method here 
      const ProgramList =await Programs.find({_id:programId})
      .populate({ path: `campuses` })
       const Campus=ProgramList[0].campuses
      res.status(200).json({Campus});
    }catch(e){
      res.status(400).json({
        success:false,
        error:e.message
    })
    }
    
  }else{
    res.status(200).json(`this Method is not Found`)
  }
};
export default ConnectDb(handler);
