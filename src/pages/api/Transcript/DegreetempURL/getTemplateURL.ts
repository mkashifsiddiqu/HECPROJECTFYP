/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import {DegreeTemplate,DegreeTemplateType} from '../../../../Server/Models/Degree/degreeTemplate';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if((req.method == `POST`)){
    try{
    const DegreeTemp = await DegreeTemplateType.findByIdAndUpdate({
        _id: req.body.TypeId
        }).find().populate(`template`)
       const templateurl = DegreeTemp[0].template
    res.status(200).json({templateurl});
  }catch(e){
    res.status(400).json({Error:e.message});
  }
  }else{
    res.status(400).json(`This Method is not Allow`);
  }
};
export default ConnectDb(handler);
