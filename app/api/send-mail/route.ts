import nodemailer from 'nodemailer';
import { MAIL } from '@/data/general';
import { NextResponse } from 'next/server';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const getHTML = (formData: any) => {
  const { name, date, email, info } = formData;
  const formattedDate = formatDate(date);

  const html = `
      <!DOCTYPE html>
      <html>
      <head>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  line-height: 1.6;
              }
              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                  border: 1px solid #ccc;
                  border-radius: 5px;
              }
              .row {
                  margin-bottom: 10px;
              }
              .row label {
                  font-weight: bold;
                  display: inline-block;
                  width: 120px;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="row">
                  <label>Name:</label>
                  <span>${name}</span>
              </div>
              <div class="row">
                  <label>Date:</label>
                  <span>${formattedDate}</span>
              </div>
              <div class="row">
                  <label>Email:</label>
                  <span>${email}</span>
              </div>
              <div class="row">
                  <label>Info:</label>
                  <span>${info}</span>
              </div>
          </div>
      </body>
      </html>
  `;

  return html;
};

const sendMail = async (formData: any) => {
  const mailOptions = {
    from: formData.email,
    to: MAIL,
    subject: `Appointment Request from ${formData.name}`,
    html: getHTML(formData)
  };

  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'solonoodle1997@gmail.com',
      pass: 'VwzkHghYRaFE7U1W'
    }
  });

  const info = await transporter.sendMail(mailOptions);

  console.log('Message sent: %s', info.messageId);

  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { formData } = body;

    sendMail(formData);

    return NextResponse.json({ text: 'ok' });
  } catch (e) {
    // throw new Error((e as any).message);
    const response = new NextResponse(null, { status: 401, statusText: (e as any).message });
    return response;
  }
}
