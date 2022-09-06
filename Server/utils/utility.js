const nodemailer = require("nodemailer");

const sendEmail = async (email) => {
  const templateData = `Welcome to the ropstam family. Thanks for Joining us.`;

  let transporter = nodemailer.createTransport({
    host: "",
    port: 587,
    auth: {
      user: "",
      pass: "",
    },
  });

  let mailOptions = {
    from: "",
    to: email,
    subject: "Welcome To Ropstam",
    html: templateData,
  };
  await transporter.sendMail(mailOptions);
};

module.exports = {
  sendEmail,
};
