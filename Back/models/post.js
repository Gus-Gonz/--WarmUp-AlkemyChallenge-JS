const Sequelize = require("sequelize");

const sequelize = require("../util/dataBase");

const Post = sequelize.define(
  "post",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: Sequelize.STRING,
    content: Sequelize.STRING,
    image: Sequelize.STRING,
    category: Sequelize.STRING,
    creationDate: Sequelize.DATEONLY,
  },
  {
    timestamps: false,
    freezeTableName: true,
    tableName: "post",
    classMethods: {},
  }
);

module.exports = Post;
