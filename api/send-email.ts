import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  // Set CORS headers
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = request.body as Record<string, string>;
    const { type } = body;
    const isProductInquiry = type === 'product';

    if (isProductInquiry) {
      const { name, email, phone, note, productTitle, brandName, ean } = body;
      if (!name || !email) {
        return response.status(400).json({ error: 'Missing required fields (name, email)' });
      }
      if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        return response.status(500).json({
          error: 'Email configuration missing. Please set up environment variables in Vercel.',
          details: 'SMTP_USER and SMTP_PASS are required'
        });
      }
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });
      const mailOptions = {
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.RECIPIENT_EMAIL || 'admin@shopulence.co.uk',
        replyTo: email,
        subject: `Product inquiry: ${productTitle || 'Product'} (${brandName || 'Brand'})`,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #002D62; border-bottom: 2px solid #002D62; padding-bottom: 10px;">
          Product Inquiry
        </h2>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Product:</strong> ${productTitle || '—'}</p>
          <p><strong>Brand:</strong> ${brandName || '—'}</p>
          <p><strong>EAN:</strong> ${ean || '—'}</p>
        </div>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          ${note ? `<p><strong>Note:</strong><br/>${note.replace(/\n/g, '<br>')}</p>` : ''}
        </div>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p>This inquiry was sent from the Shopulence brand product page.</p>
        </div>
      </div>
    `,
        text: `Product Inquiry\n\nProduct: ${productTitle || '—'}\nBrand: ${brandName || '—'}\nEAN: ${ean || '—'}\n\nName: ${name}\nEmail: ${email}\n${phone ? `Phone: ${phone}\n` : ''}${note ? `Note: ${note}` : ''}`,
      };
      await transporter.sendMail(mailOptions);
      return response.status(200).json({ success: true, message: 'Email sent successfully' });
    }

    const { name, email, company, department, message } = body;

    if (!name || !email || !message) {
      return response.status(400).json({ error: 'Missing required fields' });
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return response.status(500).json({ 
        error: 'Email configuration missing. Please set up environment variables in Vercel.',
        details: 'SMTP_USER and SMTP_PASS are required'
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL || 'admin@shopulence.co.uk',
      replyTo: email,
      subject: `New Contact Form Submission - ${department}`,
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #002D62; border-bottom: 2px solid #002D62; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          <p><strong>Department:</strong> ${department}</p>
        </div>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #002D62;">Message:</h3>
          <p style="background-color: #ffffff; padding: 15px; border-left: 4px solid #002D62; border-radius: 4px;">
            ${message.replace(/\n/g, '<br>')}
          </p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p>This email was sent from the Shopulence contact form.</p>
          <p>You can reply directly to this email to respond to ${name}.</p>
        </div>
      </div>
    `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
Department: ${department}

Message:
${message}
    `,
    };

    await transporter.sendMail(mailOptions);
    return response.status(200).json({ 
      success: true, 
      message: 'Email sent successfully' 
    });
  } catch (error) {
    console.error('Error in send-email handler:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    // Ensure we always return JSON
    return response.status(500).json({ 
      success: false, 
      error: 'Failed to send email',
      details: errorMessage 
    });
  }
}

