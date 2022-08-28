/* eslint-disable prettier/prettier */
import ConnectDb from '@/Server/middleware/connection2';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Country} from '@/Server/Models/HecDetails/hecDetails'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === `PATCH`) {
    try{
      const country =await Country.findByIdAndUpdate({
        _id: req.body.countryId,
      },{ countryTitle: req.body.countryTitle})
      //const savedCountry = country.save() 
      res.status(200).json({
        success:true,
        country
      })
    }catch(e){
      res.status(400).json({
        success:false,
        error:e.message
      })
    }
    
  }else {
    res.status(200).json(`this Method is not Found`)
  }
};
export default ConnectDb(handler);
