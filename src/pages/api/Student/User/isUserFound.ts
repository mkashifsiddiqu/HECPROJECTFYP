/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import StdLogin from '../../../../Server/Models/Student/User/StdLogin';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == `POST`) {
        //identityNum for CNIC because poc are aloso use for login
        const user = await StdLogin.findOne({ 'identityNumber': req.body.identityNumber });
        if (user) {
        res.status(200).json({ success: false, error: `User Not Found` });
        }
    } else{

        res.status(400).json({ error: `This Method is not Allow` });
    }
};
export default ConnectDb(handler);
