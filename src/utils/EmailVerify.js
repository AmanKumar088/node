const nodemailer=require('nodemailer');

var transporter = nodemailer.createTransport({
   host:"smtp.gmail.com",
   secure:"true",
    auth: {
      user: 'ak8800157896@gmail.com',
      pass: 'cgqxssqqvsvfqjng'
    }
  });
  
  async function sendMail(to,subject,html){

    const mailOptions = await transporter.sendMail({
      from: 'ak8800157896@gmail.com',
      to,
      subject,
      html
    });
  }


  module.exports=sendMail;
  
  
 