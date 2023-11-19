const mailSender = require("../mailSender");
const catchAsync = require("../utils/catchAsync");
const sandResponse = require("../utils/sandResponse");

module.exports.compose = catchAsync(async (req, res) => {
  const compose = require(`../utils/compose`);
  const Compose = compose(req);

  res.send(Compose);

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
