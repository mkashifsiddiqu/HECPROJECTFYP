/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection2';

import type { NextApiRequest, NextApiResponse } from 'next';
import { DegreeType} from '../../../../Server/Models/HecDetails/hecDetails'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === `GET`) {
    try{
      const {DegreeTypeId} = req.query
      //i try alot of method here 
      const DegreeTypeList =await  DegreeType.find({_id:DegreeTypeId})
        .populate({ path: `sessions` })
        console.log(DegreeTypeList)
      const Session = DegreeTypeList[0].sessions
      console.log(Session)
        res.status(200).json({Session});
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
