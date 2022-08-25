/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../../Server/middleware/connection2';

import type { NextApiRequest, NextApiResponse } from 'next';
import { Department} from '../../../../../Server/Models/HecDetails/hecDetails'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === `DELETE`) {
    try{
      const {departmentId} = req.query
      console.log(departmentId)
      const delDepartment =await Department.findByIdAndRemove({
        _id:departmentId
      })
       
       res.status(200).json({
        success:true,
        message:`Deleted ${delDepartment.departmentTitle} Department`
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
