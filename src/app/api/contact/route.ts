import nodemailer from "nodemailer";
import { NextResponse } from "next/server"; // is a utility for handling API responses

// since we are sending a request, we specify the endpoint method as POST
export async function POST(request: Request) {
  // checking the request body for the required fields
  const body = await request.json();
  const { name, email, message } = body;

  // checking to see all the requirements are met
  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "missing required fields" },
      { status: 400 }
    );
  }

  try {
    // configuring the NodeMailer transporter. This also uses environment variables for security
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // use STARTTLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // creating the mail options. This is where you’ll define options like the sender, recipient(s), subject and email content.
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // sending the email. this function is to send the email using the SMTP transporter that was configured.
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "failed to send email" },
      { status: 500 }
    );
  }
}
