const mailSender = require("../mailSender");
const catchAsync = require("../utils/catchAsync");
const sandResponse = require("../utils/sandResponse");

module.exports.compose = catchAsync(async (req, res) => {
  const compose = require(`../components/compose/compose`);
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

module.exports.ai = catchAsync(async (req, res) => {
  const ai = require(`../components/compose/ai`);
  const Ai = ai(req);

  res.send(Ai);

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

module.exports.manual = catchAsync(async (req, res) => {
  const manual = require(`../components/compose/manual`);
  const Manual = manual(req);

  res.send(Manual);

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
