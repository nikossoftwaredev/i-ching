import nodemailer from 'nodemailer';
import { MAIL } from '@/data/general';
import { NextResponse } from 'next/server';
import { formatDate } from '@/utils/date';

const getHTML = (formData: any) => {
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
          ${Object.keys(formData)
            .map(key => {
              let value = formData[key];
              if (key === 'date') value = formatDate(value);
              return `<div class="row">
                      <label>${key}:</label>
                      <span>${value}</span>
                  </div>`;
            })
            .join('')}
          </div>
      </body>
      </html>
  `;

  return html;
};

const sendMail = async (formData: any) => {
  const mailOptions = {
    from: formData.email,
    to: 'solonoodle1997@gmail.com',
    subject: `Appointment Request from ${formData.firstName} ${formData.lastName}`,
    html: getHTML(formData)
  };

  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: MAIL,
      pass: 'VwzkHghYRaFE7U1W'
    }
  });

  const info = await transporter.sendMail(mailOptions);

  console.log('Message sent: %s', info.messageId);

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
