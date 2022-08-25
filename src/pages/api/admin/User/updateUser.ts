/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import AdminLogin from '../../../../Server/Models/Admin/AdminLogin';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
     if (req.method == `PATCH`) {
        const user = await AdminLogin.findOneAndUpdate(
            {email:req.body.email},req.body);
        if(user){
            res.status(202).json({success:true,msg:`Detail is Update`});
        }else{
            res.status(204).json({success:false,error:`${req.body.email} not Found`});
        }
        
    } else {
        res.status(400).json({ error: `This Method is not Allow` });
    }
};
export default ConnectDb(handler);
