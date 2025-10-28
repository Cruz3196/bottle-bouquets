// lib/emailTemplates.ts
interface ContactEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const emailTemplate = ({
  name,
  email,
  message,
}: ContactEmailTemplateProps) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Form Submission</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
      <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 40px 0; text-align: center; background-color: #f4f4f4;">
            <table role="presentation" style="width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              
              <!-- Header -->
              <tr>
                <td style="background-color: #c2f6ff; padding: 30px; text-align: center;">
                  <h1 style="margin: 0; color: #1a1a1a; font-size: 24px; font-weight: bold;">
                    New Contact Form Submission
                  </h1>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 40px 30px;">
                  <p style="margin: 0 0 20px 0; color: #666666; font-size: 16px; line-height: 1.5;">
                    You have received a new message from your website contact form.
                  </p>
                  
                  <!-- Sender Info -->
                  <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                    <tr>
                      <td style="padding: 15px; background-color: #f8f9fa; border-left: 4px solid #c2f6ff;">
                        <table role="presentation" style="width: 100%;">
                          <tr>
                            <td style="padding: 5px 0;">
                              <strong style="color: #333333; font-size: 14px;">Name:</strong>
                              <span style="color: #666666; font-size: 14px; margin-left: 10px;">${name}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 5px 0;">
                              <strong style="color: #333333; font-size: 14px;">Email:</strong>
                              <a href="mailto:${email}" style="color: #00a8cc; font-size: 14px; margin-left: 10px; text-decoration: none;">${email}</a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                  
                  <!-- Message -->
                  <div style="margin: 30px 0 20px 0;">
                    <h2 style="margin: 0 0 15px 0; color: #333333; font-size: 18px; font-weight: bold;">
                      Message:
                    </h2>
                    <div style="padding: 20px; background-color: #f8f9fa; border-radius: 6px; border-left: 4px solid #c2f6ff;">
                      <p style="margin: 0; color: #333333; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                    </div>
                  </div>
                  
                  <!-- Reply Button -->
                  <table role="presentation" style="margin: 30px 0;">
                    <tr>
                      <td style="text-align: center;">
                        <a href="mailto:${email}?subject=Re: Contact Form Inquiry" 
                           style="display: inline-block; padding: 14px 30px; background-color: #c2f6ff; color: #1a1a1a; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px;">
                          Reply to ${name}
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="padding: 20px 30px; background-color: #f8f9fa; text-align: center; border-top: 1px solid #e0e0e0;">
                  <p style="margin: 0; color: #999999; font-size: 12px; line-height: 1.5;">
                    This email was sent from your website contact form.<br>
                    Received on ${new Date().toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </td>
              </tr>
              
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  const text = `
New Contact Form Submission
============================

From: ${name}
Email: ${email}
Date: ${new Date().toLocaleString()}

Message:
--------
${message}

---
Reply to this email to respond directly to ${name}.
  `;

  return { html, text };
};
