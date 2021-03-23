const Post = require("../models/post");

const sequelize = require("../util/database");

const getAllPosts = (req, res, next) => {
  Post.findAll({
    attributes: ["id", "title", "image", "category", "creationDate"],
    order: [["creationDate", "DESC"]],
  })
    .then((posts) => {
      return res.json({ posts, error: false });
    })
    .catch((error) => {
      return console.log(error);
    });
};

const createPosts = (req, res, next) => {
  const { title, content, image, category } = req.body;

  Post.create({ title, content, image, category, creationDate: new Date() })
    .then((createdPost) => res.json({ createdPost, error: false }))
    .catch((error) => console.log(error));
};

const getDetailedPost = (req, res, next) => {
  const postId = req.params.oid;
  Post.findOne({
    where: { id: postId },
  })
    .then((post) => {
      if (!post) {
        res.json({
          error: true,
          message: `This post does not exists, ID: ${postId}`,
        });
      }
      res.json({ post });
    })
    .catch((error) => console.log(error));
};

const modifyPost = (req, res, next) => {
  const postId = req.params.oid;

  Post.findOne({ where: { id: postId } }).then((post) => {
    if (post) {
      Post.update(req.body, { where: { id: postId } })
        .then((post) => {
          res.json({ error: false, message: "Updated successfully" });
        })
        .catch((error) => console.log(error));
    }

    res.json({
      error: true,
      message: `We can not find this post, the ID: ${postId}`,
    });
  });
};

const deletePost = (req, res, next) => {
  const postId = req.params.oid;

  Post.findOne({ where: { id: postId } })
    .then((post) => {
      if (post) {
        Post.destroy({ where: { id: postId } })
          .then((howMany) => {
            res.json({ error: false, message: "Deleted successfully" });
          })
          .catch((error) => console.log(error));
      }

      res.json({
        message: `We can not find this post, the ID: ${postId}`,
        error: false,
      });
    })
    .catch((error) => console.log(error));
};

exports.getAllPosts = getAllPosts;
exports.createPosts = createPosts;
exports.getDetailedPost = getDetailedPost;
exports.modifyPost = modifyPost;
exports.deletePost = deletePost;
