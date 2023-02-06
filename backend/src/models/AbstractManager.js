class AbstractManager {
  constructor({ meals, users }) {
    this.meals = meals;
    this.users = users;
  }

  // MÉTHODES POUR LA TABLE MEALS
  findMeal(id) {
    return this.connection.query(`select * from  ${this.meals} where id = ?`, [
      id,
    ]);
  }

  findAllMeals() {
    return this.connection.query(`select * from  ${this.meals}`);
  }

  deleteMeal(id) {
    return this.connection.query(`delete from ${this.meals} where id = ?`, [
      id,
    ]);
  }

  insertMeal(meal) {
    return this.connection.query(
      `insert into ${this.meals} (strMeal) values (?)`,
      [meal.strMeal]
    );
  }

  updateMeal(meal) {
    return this.connection.query(
      `update ${this.meals} set strMeal = ? where id = ?`,
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
}

module.exports = AbstractManager;
