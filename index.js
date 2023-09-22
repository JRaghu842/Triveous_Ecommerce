let express = require("express");
const { connection } = require("./config/db");
let app = express();

require("dotenv").config();

app.use(express.json());

let { UserRoute } = require("./routes/user.routes");
let { CategoryRoute } = require("./routes/category.routes");
const { ProductRouter } = require("./routes/product.routes");

app.get("/", (req, res) => {
  res.send("Backend Route check");
});

app.use("/", UserRoute);
app.use("/", CategoryRoute);
app.use("/", ProductRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`server is live at port ${process.env.PORT}`);
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.log(error);
  }
});
