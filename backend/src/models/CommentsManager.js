const AbstractManager = require("./AbstractManager").default;

class CommentsManager extends AbstractManager {
  constructor() {
    super({ table: "comments" });
  }

  insert(comment) {
    return this.connection.query(
      `insert into ${this.table} (comment) values (?)`,
      [comment.comment]
    );
  }

  update(comment) {
    return this.connection.query(
      `update ${this.table} set comment = ? where id = ?`,
      [comment.comment, comment.id]
    );
  }
}

module.exports = CommentsManager;
