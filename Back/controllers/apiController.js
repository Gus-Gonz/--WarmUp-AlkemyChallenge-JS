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

const createPosts = (req, res, next) => {
  const { title, content, image, category } = req.body;

  Post.create({ title, content, image, category, creationDate: new Date() })
    .then((createdPost) => res.json({ created: true, createdPost }))
    .catch((error) => console.log(error));
};

exports.getAllPosts = getAllPosts;
exports.createPosts = createPosts;
