/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection2';

import type { NextApiRequest, NextApiResponse } from 'next';
import { Department} from '../../../../Server/Models/HecDetails/hecDetails'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === `GET`) {
    try{
      const {DepartmentId} = req.query
      const DepartmentList =await  Department.findOne({_id:DepartmentId})
      .populate({ path: `degreetypes` })
      const DegreeType = DepartmentList.degreetypes
      res.status(200).json({DegreeType});
    }catch(e){
      res.status(400).json({success:false,
        error:e.message})
    }
    
  }else{
    res.status(200).json(`this Method is not Found`)
  }
};
export default ConnectDb(handler);
