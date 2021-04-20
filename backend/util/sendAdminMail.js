import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";

const sendAdminEmail = async (options) => {
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
    to: "sales@damacars.com.au",
    subject: "Client enquiry ",
    template: "index",
    context: {
      email: options.email,
      car: options.car,
      link: options.link,
    },
    envelope: {
      from: `Daemon <damacarsales@gmail.com>`,
      to: `sales@damacars.com.au, Mailer <damacarsales@gmail.com>`, // used as RCPT TO: address for SMTP
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

export default sendAdminEmail;
