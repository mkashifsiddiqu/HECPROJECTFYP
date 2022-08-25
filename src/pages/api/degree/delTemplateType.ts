/* eslint-disable prettier/prettier */
import ConnectDb from '../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import {DegreeTemplateType} from '../../../Server/Models/Degree/degreeTemplate';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if((req.method == `POST`)){
    const degreeTemplate = await DegreeTemplateType.findByIdAndDelete({_id:req.body.TypeId})
    if(degreeTemplate)
   { res.status(201).json({success:true,degreeTemplate});}
   else{
    { res.status(400).json({success:false,degreeTemplate});}
   }
  }else{
    res.status(400).json(`This Method is not Allow`);
  }
};
export default ConnectDb(handler);
