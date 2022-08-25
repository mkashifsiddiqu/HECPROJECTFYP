/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection2';

import type { NextApiRequest, NextApiResponse } from 'next';
import { Country,Institutes} from '../../../../Server/Models/HecDetails/hecDetails'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === `GET`) {
    try{
      const {InstituteName} = req.query
      console.log(InstituteName)
      //i try alot of method here 
      const programsList =await Institutes.findOne({ instituteTitle: InstituteName})
      .populate({ path: `programs` })
      const Program = programsList.programs
      res.status(200).json({Program});
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
