require("dotenv").config();

const express = require("express");

const app = express();
const apiRoutes = require("./routes/apiRoutes");

app.use(express.json());

app.use("/api-warmup", apiRoutes);

app.listen(process.env.PORT, () => {
  console.log("We´re connected to the database");
  console.log("Running on port: " + process.env.PORT);
  //   sequelize
  //     .sync()
  //     .then(() => {
  //       console.log("We´re connected to the database");
  //       console.log("Running on port: " + process.env.PORT);
  //     })
  //     .catch((error) => {
  //       console.log("An error ocurred", error);
  //     });
});
