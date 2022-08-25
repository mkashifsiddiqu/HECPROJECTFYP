/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection2';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Country} from '../../../../Server/Models/HecDetails/hecDetails'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === `GET`) {
    try{
      const {countryId} = req.query 
      const countryList =await Country.find(
        {_id:countryId}
        )
      .populate({ path: `institutes` })
       const institutes = countryList.institutes
      res.status(200).json({institutes});
    }catch(e){
      res.status(400).json({success:false,
        error:e.message})
    }
    
  }else{
    res.status(200).json(`this Method is not Found`)
  }
};
export default ConnectDb(handler);
