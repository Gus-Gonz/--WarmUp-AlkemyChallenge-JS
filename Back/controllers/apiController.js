const Post = require("../models/post");

const sequelize = require("../util/database");

const getAllPosts = (req, res, next) => {
  Post.findAll({
    attributes: ["id", "title", "image", "category", "creationDate"],
    order: [["creationDate", "DESC"]],
  })
    .then(
      res.json({
        operation,
      })
    )
    .cath((error) => {
      return console.log(error);
    });
};

const createPosts;

exports.getAllPosts = getAllPosts;
exports.createPosts = createPosts;
