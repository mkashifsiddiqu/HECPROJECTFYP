/* eslint-disable prettier/prettier */
const nodemailer = require(`nodemailer`);
//Email Sending Area 
function sendEmail(message){
  return new Promise((res, rej) => {
    const transporter = nodemailer.createTransport({
      service: `gmail`,
      auth: {
        user: `18094198-026@uog.edu.pk`,  
        pass: `xuymsutzebempapf`
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
export default function sendNewPassword({toUser,hash}){
  //Message You Want to Send
  const message = {
    from: `18094198-026@uog.edu.pk`,
    to: toUser.email, // in production uncomment this
    // to: process.env.GOOGLE_USER,
    subject: `HEC Focal Person- Activate Account`,
    html: `
      <h3> Hello ${toUser.email} </h3>
      <p>Your Are Focal Person of ${toUser.instituteName}. Much Appreciated! Just one last step is laying ahead of you...</p>
      <p>To activate your account please follow this link: <a target="_" href="${process.env.DOMAIN}/FocalPerson/FpActivate?email=${hash}">Activation</a></p>
      <p>Cheers</p>
      <p>Your Application Team</p>
    `                                                                              
  }
     return sendEmail(message)
}