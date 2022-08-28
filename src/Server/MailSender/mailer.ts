/* eslint-disable prettier/prettier */
import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'
//Email Sending Area 
function sendEmail(message){
  return new Promise((res, rej) => {
    const transporter = nodemailer.createTransport({
      service: `gmail`,
      auth: {
        user: `18094198-026@uog.edu.pk`,  
        pass: `jkgelzqizjsaahdm`
      }
    })
    transporter.sendMail(message, function(err, info) {
      if (err) {
        rej(err)
        console.log(err)
      } else {
        res(info)
        console.log(info)
      }
    })
  })
} 
//This Function Coming from Rest Api 
const sendNewPassword=function sendNewPassword({toUser,hash}){
  //Message You Want to Send
  const message = {
    from: `18094198-026@uog.edu.pk`,
    to: toUser.email, // in production uncomment this
    // to: process.env.GOOGLE_USER,
    subject: `HEC Focal Person- Activate Account`,
    html: `
      <h3> Hello ${toUser.email} </h3>
      <p>Your Are Focal Person of ${toUser.instituteName}. Much Appreciated! Just one last step is laying ahead of you...</p>
      <p>To activate your account please follow this link: <a target="_" href="${process.env.DOMAIN}/FocalPerson/FpActivate?email=${toUser.email}">Activation</a></p>
      <p>Cheers</p>
      <p>Your Application Team</p>
    `                                                                              
  }
     return sendEmail(message)
}
const  isVerifiedApp= function isVerifiedApplication({toUser}){
  //Message You Want to Send
  const file = path.join(process.cwd(), `ServerDataBase/Doc/uploads/${toUser.fileName}`);
//  const imageBuffer = fs.readFileSync(file)
console.log(`FileName========`,toUser.fileName)
  const message = {
    from: `18094198-026@uog.edu.pk`,
   
    to: toUser.email, // in production uncomment this
    // to: process.env.GOOGLE_USER,
    subject: `Your Application is ${toUser.Status}`,
    html: `
      <h3> Hello ${toUser.email} </h3>
      <p> Your Application is ${toUser.Status} </p>
      <p> Higher Education Commission (HEC) is reveiw Your Application <br/> 
      Our response is ${toUser.Status}</p>
      <p>Your Application Team</p>
    `,
    attachments:[{
      filename:`Degree Note`,
      content:`Your Degree is Verified!`
    },
    {
      filename:`${toUser.fileName}`,
      path:`${file}`
      }
]                                                                              
  }
     return sendEmail(message)
}
export {isVerifiedApp,sendNewPassword}