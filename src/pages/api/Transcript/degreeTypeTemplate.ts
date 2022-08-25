/* eslint-disable prettier/prettier */
import ConnectDb from '../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import {TranscriptTemplateType} from '../../../Server/Models/Degree/TranscriptTemplate'
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if((req.method == `POST`)){
    const degreeTemplate = await new TranscriptTemplateType({
      TypeTitle:req.body.TypeTitle,
      instituteName:req.body.instituteName
    })
    const saveDegreeTemplate = degreeTemplate.save()
    if(saveDegreeTemplate)
   { res.status(201).json({saveDegreeTemplate});}
   else{
    { res.status(400).json({saveDegreeTemplate});}
   }
  }else{
    res.status(400).json(`This Method is not Allow`);
  }
};
export default ConnectDb(handler);
