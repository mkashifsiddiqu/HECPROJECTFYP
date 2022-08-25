/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import StdLogin from '../../../../Server/Models/Student/User/StdLogin';
import CryptoJS from 'crypto-js'


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == `POST`) {
        //identityNum for CNIC because poc are aloso use for login
        const user = await StdLogin.findOne({ 'identityNumber': req.body.identityNumber });
        if (user) {
            const bytes = CryptoJS.AES.decrypt(user.password, `secret123`);
            const password = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            if (req.body.identityNumber == user.identityNumber && req.body.password == password) {
                const names = user.firstname +` `+user.lastname
                res.status(200).json({ success: true, 
                     name: names, 
                     email: user.Email,
                     identityNumber:user.identityNumber,
                     identityType:user.identityType,
                     Nationality:user.Nationality
                });
            } else if(req.body.password != password){
                res.status(200).json({ success: false, error: `Invalid Credentials` });
            }
        } else {
            res.status(200).json({ success: false, error: `Invalid CNIC or Passport.` });
        }
    } else{

        res.status(400).json({ error: `This Method is not Allow` });
    }
};
export default ConnectDb(handler);
