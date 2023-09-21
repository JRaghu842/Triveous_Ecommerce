let express = require("express");
const { connection } = require("./config/db");
let app = express();

require("dotenv").config();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Route check");
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`server is live at port ${process.env.PORT}`);
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.log(error);
  }
});
