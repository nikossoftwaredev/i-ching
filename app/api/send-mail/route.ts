import { MAIL } from '@/data/general';
import { NextResponse } from 'next/server';

import nodemailer from 'nodemailer';

export const sendMail = async (formData: any) => {
  const mailOptions = {
    from: formData.email,
    to: MAIL,
    subject: `Appointment Request from ${formData.name}`,
    text: JSON.stringify(formData)
  };
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
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
