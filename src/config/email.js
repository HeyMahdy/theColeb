import nodemailer from 'nodemailer';

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "heymahdymuzzamil@gmail.com",
    pass: "bdyw eots ipzj xftv"
  }
});

// Test the configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log('Transporter verification error:', error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

export const sendEmail = async (to, subject, html) => {
  try {
    const mailOptions = {
      from: "heymahdymuzzamil@gmail.com",
      to,
      subject,
      html
    };

    console.log('Attempting to send email to:', to);
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('Detailed error sending email:', error);
    return false;
  }
};

export default transporter; 