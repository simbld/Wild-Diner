const models = require("../models");

const browse = async (req, res) => {
  try {
    const comments = await models.comments.findAll();
    res.send(comments);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const read = async (req, res) => {
  try {
    const comment = await models.comments.find(req.params.id);
    if (!comment) {
      res.sendStatus(404);
    } else {
      res.send(comment);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const edit = async (req, res) => {
  const { id } = req.params.id;
  const { text } = req.body;
  if (!text || text.length < 1) {
    return res.status(400).send({
      error: "Comment text is required and must be at least 1 character",
    });
  }

  try {
    const comment = await models.comments.update(id, { text });
    if (!comment) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
      return res.status(200).json({ message: "Comment updated successfully" });
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
  return Promise.resolve();
};

const add = async (req, res) => {
  const { text } = req.body;
  if (!text || text.length < 1) {
    return res.status(400).send({
      error: "Comment text is required and must be at least 1 character",
    });
  }

  try {
    const comment = await models.comments.insert({ text });
    return res.location(`/comments/${comment.id}`).sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
  return Promise.resolve();
};

const destroy = async (req, res) => {
  try {
    const comment = await models.comments.delete(req.params.id);
    if (!comment) {
      return res.sendStatus(404);
    }
    res.sendStatus(204);
    return res.status(200).json({ message: "Comment deleted successfully" });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
    return Promise.resolve();
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
