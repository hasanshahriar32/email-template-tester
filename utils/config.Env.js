const dotenv = require("dotenv");
const path = require("path");

//location
dotenv.config({ path: path.join(process.cwd(), ".env.local") });

module.exports = {
  port: process.env.PORT,
  email_title: process.env.EMAIL_TITLE,
  email_from: process.env.EMAIL_FROM,
  email_password: process.env.EMAIL_PASSWORD,
  email_host: process.env.EMAIL_HOST,
  email_port: process.env.EMAIL_PORT,
  email_secure: process.env.EMAIL_SECURE,
};
