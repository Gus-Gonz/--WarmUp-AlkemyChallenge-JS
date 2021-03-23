const Post = require("../models/post");

const sequelize = require("../util/database");

const getAllPosts = (req, res, next) => {
  Post.findAll({
    attributes: ["id", "title", "image", "category", "creationDate"],
    order: [["creationDate", "DESC"]],
  })
    .then((posts) => {
      console.log(posts);
      return res.json({ posts });
    })
    .catch((error) => {
      return console.log(error);
    });
};

const createPosts = () => console.log("POST");

exports.getAllPosts = getAllPosts;
exports.createPosts = createPosts;
