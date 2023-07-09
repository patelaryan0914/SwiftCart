const nodemailer = require("nodemailer");

const sendEmail = (email, otp) => {
  const { MAIL_USERNAME, MAIL_PASSWORD } = process.env;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: MAIL_USERNAME,
      pass: MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: MAIL_USERNAME,
    to: email,
    subject: "Test Email",
    html: `<h1>YOUR OTP:${otp}</h1>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = sendEmail;
