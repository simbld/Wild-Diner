const AbstractManager = require("./AbstractManager").default;

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  findAll() {
    return this.connection.query(`select * from ${this.table}`);
  }

  find(id) {
    return this.connection.query(`select * from ${this.table} where id = ?`, [
      id,
    ]);
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (name, image, email, password) values (?,?,?,?)`,
      [user.name, user.image, user.email, user.password]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set name = ?, image = ?, email = ?, password = ? where id = ?`,
      [user.name, user.image, user.email, user.password, user.id]
    );
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }
}

module.exports = UsersManager;
