/* eslint-disable prettier/prettier */
import ConnectDb from '../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import {TranscriptTemplate,TranscriptTemplateType} from '../../../Server/Models/Degree/TranscriptTemplate'
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if((req.method == `POST`)){
    try{
    const transcriptTemplate = await new TranscriptTemplate({
        templateUrl:req.body.templateUrl,
        isVerified:`pending`,
        startDate:req.body.startDate,
        endDate:req.body.endDate
    })
    const saveTranscriptTemplate =await transcriptTemplate.save()
    const UpdateTranscriptTemplate = await TranscriptTemplateType.findByIdAndUpdate({
        _id: req.body.TypeId
        },
        {   
            $push: {
              template: {
                    _id: saveTranscriptTemplate._id
                }
            }
        })
        const savedData = await UpdateTranscriptTemplate.save()
    res.status(201).json({saveTranscriptTemplate,savedData});
  }catch(e){
    res.status(201).json({Error:e.message});
  }
  }else{
    res.status(400).json(`This Method is not Allow`);
  }
};
export default ConnectDb(handler);
