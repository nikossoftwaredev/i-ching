import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'solonoodle2000@gmail.com',
    pass: ''
  }
});

export const sendMail = (mailOptions: any) => {
  transporter.sendMail(mailOptions, function (error: any, info: any) {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
