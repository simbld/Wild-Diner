const AbstractManager = require("./AbstractManager");

class MealsManager extends AbstractManager {
  constructor() {
    super({ table: "meals" });
  }

  insert(meal) {
    return this.connection.query("insert into meals set ?", [meal]);
  }

  update(meal) {
    return this.connection.query("update meals set ? where id = ?", [
      meal,
      meal.id,
    ]);
  }
}

module.exports = MealsManager;
