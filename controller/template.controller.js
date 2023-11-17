const catchAsync = require("../utils/catchAsync");
const sandResponse = require("../utils/sandResponse");

module.exports.template = catchAsync(async (req, res) => {
  const templateName = req.query.type;
  const sendMail = req.query.send;
  const file = require(`../templates/container/container`);
  const mail = file(templateName);
  res.send(mail);

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
