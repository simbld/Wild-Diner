/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
const jwt = require("jsonwebtoken");
const models = require("../models");

const handleUnauthorized = (res) => {
  return res.sendStatus(401);
};

const handleError = (res, err) => {
  console.error(err);
  return res.sendStatus(500);
};

const authenticateJWT = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  if (authorizationHeader) {
    const token = authorizationHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return handleError(res, err);
      }

      req.user = user;
      next();
    });
  } else {
    return handleUnauthorized(res);
  }
  return new Promise((resolve, reject) => {
    resolve();
    reject();
  }); // TODO remove this line when you implement this function properly (see below) and remove the eslint-disable above too :)
};

const browse = (req, res) => {
  models.meals
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      handleError(res, err);
    });
  return new Promise((resolve, reject) => {
    resolve();
    reject();
  });
};

const read = (req, res) => {
  models.meals
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      handleError(res, err);
    });
  return new Promise((resolve, reject) => {
    resolve();
    reject();
  });
};

const edit = (req, res) => {
  const meals = req.body;

  // TODO validations (length, format...)

  meals.id = parseInt(req.params.id, 10);

  models.meals
    .update(meals)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    })
    .catch((err) => {
      handleError(res, err);
    });
  return new Promise((resolve, reject) => {
    resolve();
    reject();
  });
};

const add = (req, res) => {
  const meals = req.body;

  // TODO validations (length, format...)

  models.meals
    .insert(meals)
    .then(([result]) => {
      res.status(201).send({ id: result.insertId });
    })
    .catch((err) => {
      handleError(res, err);
    });
  return new Promise((resolve, reject) => {
    resolve();
    reject();
  });
};

const remove = (req, res) => {
  models.meals
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    })
    .catch((err) => {
      handleError(res, err);
    });
  return new Promise((resolve, reject) => {
    resolve();
    reject();
  });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  remove,
  authenticateJWT,
};
