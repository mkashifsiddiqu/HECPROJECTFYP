/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import AdminLogin from '../../../../Server/Models/Admin/AdminLogin';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == `GET`) {
        const user = await AdminLogin.find();
        res.status(200).json({ succes: true, user });
    } else if (req.method == `DELETE`) {
        console.log(req.body.email)
        //const user = await AdminLogin.deleteOne({email:req.body});
        res.status(200).json({ DEL:req.body.email });
    } else {
        res.status(400).json({ error: `This Method is not Allow` });
    }
};
export default ConnectDb(handler);
