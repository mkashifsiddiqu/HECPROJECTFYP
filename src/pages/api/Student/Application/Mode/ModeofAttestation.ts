/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import ApplicationModel from '../../../../../Server/Models/Student/Application/Application';
import Mode from '../../../../../Server/Models/Student/Application/moodeofAttestation'
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == `POST`) {
    
    //   const mode = await new Mode({
    //     Mode: req.body.mode,
    //     City:req.body.cityDistrict,
    //     Disability:req.body.Disability,
    //     WhereCheck:req.body.whereCheck
    //   });
    //  const modeSaved = await mode.save();
     const App =await  ApplicationModel.findOneAndUpdate({'Email':req.body.email},{
      'ModeOfAttestation.Mode': req.body.mode,
      'ModeOfAttestation.City':req.body.cityDistrict,
      'ModeOfAttestation.Disability':req.body.Disability,
      'ModeOfAttestation.WhereCheck':req.body.whereCheck
    })
     const AppSaved =await App.save()
      if (AppSaved) {
        res.status(201).json({ success: true,AppSaved});
      } else {
        res.status(201).json({ success: false });
      }
} else {
    const user = await ApplicationModel.find();
    res.status(200).json({ user });
  }
};
export default ConnectDb(handler);
