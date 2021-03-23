const Sequelize = require("sequelize");

const sequelize = require("../util/dataBase");

const Post = sequelize.define(
  "posts",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: Sequelize.STRING,
    content: Sequelize.TEXT,
    image: Sequelize.STRING,
    category: Sequelize.STRING,
    creationDate: Sequelize.DATEONLY,
  },
  {
    timestamps: false,
    freezeTableName: true,
    tableName: "posts",
    classMethods: {},
  }
);

module.exports = Post;
