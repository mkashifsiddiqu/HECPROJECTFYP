/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import AdminLogin from '../../../../Server/Models/Admin/AdminLogin';
import Application from '@/Server/Models/Student/Application/Application'
import UserDetail from '@/Server/Models/Student/User/User_detail'
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == `POST`) {
        const user = await UserDetail.findOne({Email:req.body.email}).populate(`Document`);
        res.status(200).json({ succes: true, user });
    } else {
        res.status(400).json({ error: `This Method is not Allow` });
    }
};
export default ConnectDb(handler);
