const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "calibertech875@gmail.com",
      pass: "jgcv rymy edqy csjd",
    },
  });



  const mailOptions = {
    from: "calibertech875@gmail.com",
    to: "karthick1242004@gmail.com",
    subject: "Hello from Calibertech",
    text: "Thank you for contacting us!!.",
  };

  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });