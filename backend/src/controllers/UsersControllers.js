const models = require("../models");

const browse = async (req, res) => {
  try {
    const users = await models.users.findAll();
    res.send(users);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const read = async (req, res) => {
  try {
    const user = await models.users.find(req.params.id);
    if (!user) {
      res.sendStatus(404);
    } else {
      res.send(user);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const edit = async (req, res) => {
  const { id } = req.params.id;
  const { name } = req.body;
  if (!name || name.length < 1) {
    return res.status(400).send({
      error: "Name is required and must be at least 1 character",
    });
  }

  try {
    const user = await models.users.update(id, { name });
    if (!user) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
      return res.status(200).json({ message: "User created successfully" });
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
  return Promise.resolve();
};

const add = async (req, res) => {
  const { name } = req.body;
  if (!name || name.length < 1) {
    return res
      .status(400)
      .send({ error: "Name is required and must be at least 1 character" });
  }

  try {
    const user = await models.users.insert({ name });
    return res.location(`/users/${user.id}`).sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
  return Promise.resolve();
};

const destroy = async (req, res) => {
  try {
    const user = await models.users.delete(req.params.id);
    if (!user) {
      return res.sendStatus(404);
    }
    res.sendStatus(204);
    return res.status(200).json({ message: "User deleted successfully" });
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
