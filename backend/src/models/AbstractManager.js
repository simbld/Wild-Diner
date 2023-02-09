class AbstractManager {
  constructor({ meal, users, comments }) {
    this.meal = meal;
    this.users = users;
    this.comments = comments;
  }

  // MÉTHODES POUR LA TABLE MEAL
  findMeal(id) {
    return this.connection.query(`select * from  ${this.meal} where id = ?`, [
      id,
    ]);
  }

  findAllMeal() {
    return this.connection.query(`select * from  ${this.meal}`);
  }

  deleteMeal(id) {
    return this.connection.query(`delete from ${this.meal} where id = ?`, [id]);
  }

  insertMeal(meal) {
    return this.connection.query(
      `insert into ${this.meal} (strMeal) values (?)`,
      [meal.strMeal]
    );
  }

  updateMeal(meal) {
    return this.connection.query(
      `update ${this.meal} set strMeal = ? where id = ?`,
      [meal.strMeal, meal.id]
    );
  }

  // MÉTHODES POUR LA TABLE USERS
  findUser(id) {
    return this.connection.query(`select * from  ${this.users} where id = ?`, [
      id,
    ]);
  }

  findAllUsers() {
    return this.connection.query(`select * from  ${this.users}`);
  }

  deleteUser(id) {
    return this.connection.query(`delete from ${this.users} where id = ?`, [
      id,
    ]);
  }

  insertUser(user) {
    return this.connection.query(
      `insert into ${this.users} (name) values (?)`,
      [user.name]
    );
  }

  updateUser(user) {
    return this.connection.query(
      `update ${this.users} set name = ? where id = ?`,
      [user.name, user.id]
    );
  }

  // MÉTHODES POUR LA TABLE COMMENTS
  findComment(id) {
    return this.connection.query(
      `select * from ${this.comments} where id = ?`,
      [id]
    );
  }

  findAllComments() {
    return this.connection.query(`select * from ${this.comments}`);
  }

  deleteComment(id) {
    return this.connection.query(`delete from ${this.comments} where id = ?`, [
      id,
    ]);
  }

  insertComment(comment) {
    return this.connection.query(
      `insert into ${this.comments} (text, userId, mealId) values (?,?,?)`,
      [comment.text, comment.userId, comment.mealId]
    );
  }

  updateComment(comment) {
    return this.connection.query(
      `update ${this.comments} set text =
      ? where id = ?`,
      [comment.text, comment.id]
    );
  }
}

module.exports = AbstractManager;
