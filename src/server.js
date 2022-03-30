const app = require("./index");
const connect = require("./configs/db");

app.listen(5400, async function () {
  try {
    await connect();
    console.log("listening on port 5400");
  } catch (err) {
    console.error(err.message);
  }
});
