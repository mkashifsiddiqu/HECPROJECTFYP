/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import AdminLogin from '../../../../Server/Models/Admin/AdminLogin';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
     if (req.method == `DELETE`) {
        const user = await AdminLogin.findOneAndRemove({email:req.body.email});
        console.log(user)
        res.status(200).json({res:req.body});
    } else {
        res.status(400).json({ error: `This Method is not Allow` });
    }
};
export default ConnectDb(handler);
