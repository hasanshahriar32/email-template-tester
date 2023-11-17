const mailSender = require("../mailSender");
const catchAsync = require("../utils/catchAsync");
const sandResponse = require("../utils/sandResponse");

module.exports.template = catchAsync(async (req, res) => {
  const templateName = req.query.type;
  const file = require(`../templates/container/container`);
  const mail = file(templateName);

  // create a navigation bar with html and css
  // create a container with html and css

  const navigation = require(`../utils/navigationBar`);
  const Nav = navigation(req, templateName);

  res.send(mail + Nav);

  // sandResponse(res, {
  //   success: true,
  //   statusCode: 200,
  //   message: "data get successfully",
  //   data: {
  //     id: "1",
  //     name: "user1",
  //   },
  // });
});

module.exports.sendMail = catchAsync(async (req, res) => {
  const templateName = req.query.type;
  const name = req.body.name;
  const subject = req.body.subject;
  const mailTo = req.body.email;
  const file = require(`../templates/container/container`);
  const mail = await file(templateName, name, subject);
  const sendMail = await mailSender(name, mailTo, subject, mail);
  // console.log(mailTo, subject, templateName);
  res.send(sendMail);
});
