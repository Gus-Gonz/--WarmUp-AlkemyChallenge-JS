require("dotenv").config();

const express = require("express");

const app = express();
const apiRoutes = require("./routes/apiRoutes");
const sequelize = require("./util/dataBase");

app.use(express.json());

app.use("/api-warmup/posts", apiRoutes);

app.listen(process.env.PORT, () => {
  sequelize
    .sync()
    .then(() => {
      console.log("Running on port: " + process.env.PORT);
      console.log("We´re connected to the database");
    })
    .catch((error) => {
      console.log("An error ocurred", error);
    });
});
