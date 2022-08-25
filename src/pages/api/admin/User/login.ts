/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import AdminLogin from '../../../../Server/Models/Admin/AdminLogin';
import CryptoJS from 'crypto-js'
import jwt from 'jsonwebtoken' ;
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';
import { CookieSerializeOptions } from 'next/dist/server/web/types';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == `POST`) {
        const user = await AdminLogin.findOne({ 'email': req.body.email });
        if (user) {
            const bytes = CryptoJS.AES.decrypt(user.password, `secret123`);
            const password = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            //Pass matching
            if (req.body.email == user.email && req.body.password == password) {
                //Json Web Token 
                // const token = await user.generateAuthToken();
                // setCookie(`hecAdmin`,token,{
                //     expires:new Date(Date.now()+25893000),
                //     httpOnly:true
                // })
                // console.log(token)
                //returning data to UI
                res.status(200).json({ success: true, name: user.name, email: user.email, page: user.pages});
            } else if(req.body.password !=  password){
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
