/* eslint-disable prettier/prettier */
import ConnectDb from '../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import {DegreeTemplate,DegreeTemplateType} from '../../../Server/Models/Degree/degreeTemplate';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if((req.method == `POST`)){
    try{
    const degreeTemplate = await new DegreeTemplate({
        templateUrl:req.body.templateUrl,
        isVerified:`pending`,
        startDate:req.body.startDate,
        endDate:req.body.endDate
    })
    const savedegreeTemplate =await degreeTemplate.save()
    const UpdateDegreeTemplate = await DegreeTemplateType.findByIdAndUpdate({
        _id: req.body.TypeId
        },
        {   
            $push: {
              template: {
                    _id: savedegreeTemplate._id
                }
            }
        })
        const savedData = await UpdateDegreeTemplate.save()
    res.status(201).json({savedegreeTemplate,savedData});
  }catch(e){
    res.status(201).json({Error:e.message});
  }
  }else{
    res.status(400).json(`This Method is not Allow`);
  }
};
export default ConnectDb(handler);
