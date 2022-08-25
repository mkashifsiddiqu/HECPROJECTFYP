/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import {DegreeTemplate,DegreeTemplateType} from '../../../../Server/Models/Degree/degreeTemplate';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if((req.method == `POST`)){
    try{
    const degreeTemplate = await DegreeTemplate.findByIdAndRemove({
        _id:req.body.templateId
    })
   res.status(200).json({degreeTemplate});
  }catch(e){
    res.status(400).json({Error:e.message});
  }
  }else{
    res.status(400).json(`This Method is not Allow`);
  }
};
export default ConnectDb(handler);
