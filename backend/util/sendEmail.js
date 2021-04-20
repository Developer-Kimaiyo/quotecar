import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";

const sendEmail = async (options) => {
  let smtpTransport = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE || "Gmail",
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: process.env.SMTP_PORT || 465,
    secureConnection: true,
    transportMethod: "SMTP",
    secure: true,
    auth: {
      user: process.env.SMTP_USER || "damacarsales@gmail.com",
      pass: process.env.SMTP_PASS || "qssoblivqtaigndp",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const handlebarOptions = {
    viewEngine: {
      extName: ".hbs",
      partialsDir: "./backend/views/partials",
      layoutsDir: "./backend/views/layouts",
      defaultLayout: options.defaultLayout,
    },
    viewPath: "./backend/views",
    extName: ".hbs",
  };
  smtpTransport.use("compile", hbs(handlebarOptions));
  let mailOptions = {
    from: "damacarsales@gmail.com",
    to: options.email,
    subject: "Dama Cars enquiry confirmation",
    template: "index",
    context: {
      name: options.fname,
      date: options.newDate,
      time: options.newTime,
    },
  };
  smtpTransport.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("succes");
    }
    smtpTransport.close();
  });
};

export default sendEmail;
