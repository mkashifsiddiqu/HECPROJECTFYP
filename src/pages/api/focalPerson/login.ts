/* eslint-disable prettier/prettier */
import ConnectDb from '../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import FPLogin from '../../../Server/Models/FocalPerson/FPLogin';
import CryptoJS from 'crypto-js'
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == `POST`) {
        const user = await FPLogin.findOne({ 'email': req.body.email });
        if (user) {
            const bytes = CryptoJS.AES.decrypt(user.password, `secret123`);
            const password = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            if (req.body.email == user.email && req.body.password == password) {
                res.status(200).json({ success: true, name: user.name, 
                    email: user.email, isActive: user.isActive,
                    pages:user.pages, instituteName:user.instituteName});
            } else if(req.body.password != password){
                res.status(200).json({ success: false, error: `Invalid Credentials` });
            }
        } else {
            res.status(200).json({ success: false, error: `User not Found!` });
        }
    } else{

        res.status(400).json({ error: `This Method is not Allow` });
    }
};
export default ConnectDb(handler);
