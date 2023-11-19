const { port } = require("./utils/config.Env");
const app = require("./app");
const connectDB = require("./utils/mongodbConnect");
// const connectionStatus = connectDB();

app.listen(port, console.log(`port connected ${port}`));
