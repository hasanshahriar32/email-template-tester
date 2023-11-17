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
  const Nav = navigation(templateName);

  res.send(Nav + mail);

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
  const mailTo = req.body.email;
  const file = require(`../templates/container/container`);
  const mail = file(templateName);
  const sendMail = await mailSender(mailTo, mail);
  res.send(sendMail);
});
