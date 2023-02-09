/* eslint-disable camelcase */
class AbstractManager {
  constructor(
    {
      meal,
      users,
      comments,
      favorites,
      likes,
      dislikes,
      dish,
      media,
      recipe,
      recipe_ingredients,
      recipe_steps,
      recipe_tags,
      tags,
      users_favorites,
      users_likes,
      users_dislikes,
    },
    connection
  ) {
    this.meal = meal;
    this.users = users;
    this.comments = comments;
    this.favorites = favorites;
    this.likes = likes;
    this.dislikes = dislikes;
    this.dish = dish;
    this.media = media;
    this.recipe = recipe;
    this.recipe_ingredients = recipe_ingredients;
    this.recipe_steps = recipe_steps;
    this.recipe_tags = recipe_tags;
    this.tags = tags;
    this.users_favorites = users_favorites;
    this.users_likes = users_likes;
    this.users_dislikes = users_dislikes;
    this.connection = connection;
  }

  // MÉTHODES POUR LA TABLE MEAL
  findMeal(id) {
    return this.connection.query(`select * from ${this.meal} where id = ?`, [
      id,
    ]);
  }

  findAllMeals() {
    return this.connection.query(`select * from ${this.meal}`);
  }

  deleteMeal(id) {
    return this.connection.query(`delete from ${this.meal} where id = ?`, [id]);
  }

  insertMeal(meal) {
    return this.connection.query(
      `
  insert into ${this.meal} (strMeal) values (?)`,
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
    return this.connection.query(`select * from ${this.users} where id = ?`, [
      id,
    ]);
  }

  findAllUsers() {
    return this.connection.query(`select * from ${this.users}`);
  }

  deleteUser(id) {
    return this.connection.query(`delete from ${this.users} where id = ?`, [
      id,
    ]);
  }

  insertUser(user) {
    return this.connection.query(
      `
  insert into ${this.users} (name) values (?)`,
      [user.name]
    );
  }

  updateUser(user) {
    return this.connection.query(
      `
  update ${this.users} set name = ? where id = ?`,
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
      `insert into ${this.comments} (text, userId) values (?, ?)`,
      [comment.text, comment.userId]
    );
  }

  updateComment(comment) {
    return this.connection.query(
      `update ${this.comments} set text = ?, userId = ? where id = ?`,
      [comment.text, comment.userId, comment.id]
    );
  }

  // MÉTHODES POUR LA TABLE FAVORITES
  findFavorite(id) {
    return this.connection.query(
      `select * from ${this.favorites} where id = ?`,
      [id]
    );
  }

  findAllFavorites() {
    return this.connection.query(`select * from ${this.favorites}`);
  }

  deleteFavorite(id) {
    return this.connection.query(`delete from ${this.favorites} where id = ?`, [
      id,
    ]);
  }

  insertFavorite(favorite) {
    return this.connection.query(
      `insert into ${this.favorites} (id_user, id_meal) values (?, ?)`,
      [favorite.id_user, favorite.id_meal]
    );
  }

  updateFavorite(favorite) {
    return this.connection.query(
      `update ${this.favorites} set id_user = ?, id_meal = ? where id = ?`,
      [favorite.id_user, favorite.id_meal, favorite.id]
    );
  }

  // MÉTHODES POUR LA TABLE LIKES
  findLike(id) {
    return this.connection.query(`select * from ${this.likes} where id = ?`, [
      id,
    ]);
  }

  findAllLikes() {
    return this.connection.query(`select * from ${this.likes}`);
  }

  deleteLike(id) {
    return this.connection.query(`delete from ${this.likes} where id = ?`, [
      id,
    ]);
  }

  insertLike(like) {
    return this.connection.query(
      `insert into ${this.likes} (id_user, id_meal) values (?, ?)`,
      [like.id_user, like.id_meal]
    );
  }

  updateLike(like) {
    return this.connection.query(
      `update ${this.likes} set id_user = ?, id_meal = ? where id = ?`,
      [like.id_user, like.id_meal, like.id]
    );
  }

  // MÉTHODES POUR LA TABLE DISLIKES
  findDislike(id) {
    return this.connection.query(
      `select * from ${this.dislikes} where id = ?`,
      [id]
    );
  }

  findAllDislikes() {
    return this.connection.query(`select * from ${this.dislikes}`);
  }

  deleteDislike(id) {
    return this.connection.query(`delete from ${this.dislikes} where id = ?`, [
      id,
    ]);
  }

  insertDislike(dislike) {
    return this.connection.query(
      `insert into ${this.dislikes} (user_id, meal_id) values (?, ?)`,
      [dislike.user_id, dislike.meal_id]
    );
  }

  updateDislike(dislike) {
    return this.connection.query(
      `update ${this.dislikes} set user_id = ?, meal_id = ? where id = ?`,
      [dislike.user_id, dislike.meal_id, dislike.id]
    );
  }

  // MÉTHODES POUR LA TABLE DISH
  findDish(id) {
    return this.connection.query(`select * from ${this.dish} where id = ?`, [
      id,
    ]);
  }

  findAllDishes() {
    return this.connection.query(`select * from ${this.dish}`);
  }

  deleteDish(id) {
    return this.connection.query(`delete from ${this.dish} where id = ?`, [id]);
  }

  insertDish(dish) {
    return this.connection.query(
      `insert into ${this.dish} (strMeal) values (?)`,
      [dish.strMeal]
    );
  }

  updateDish(dish) {
    return this.connection.query(
      `update ${this.dish} set strMeal = ? where id = ?`,
      [dish.strMeal, dish.id]
    );
  }

  // METHODS FOR THE TABLE MEDIA
  findMedia(id) {
    return this.connection.query(`select * from ${this.media} where id = ?`, [
      id,
    ]);
  }

  findAllMedia() {
    return this.connection.query(`select * from ${this.media}`);
  }

  deleteMedia(id) {
    return this.connection.query(`delete from ${this.media} where id = ?`, [
      id,
    ]);
  }

  insertMedia(media) {
    return this.connection.query(
      `insert into ${this.media} (strMealThumb, strMeal) values (?, ?)`,
      [media.strMealThumb, media.strMeal]
    );
  }

  updateMedia(media) {
    return this.connection.query(
      `update ${this.media} set strMealThumb = ?, strMeal = ? where id = ?`,
      [media.strMealThumb, media.strMeal, media.id]
    );
  }

  // METHODS FOR THE TABLE RECIPE
  findRecipe(id) {
    return this.connection.query(`select * from ${this.recipe} where id = ?`, [
      id,
    ]);
  }

  findAllRecipes() {
    return this.connection.query(`select * from ${this.recipe}`);
  }

  deleteRecipe(id) {
    return this.connection.query(`delete from ${this.recipe} where id = ?`, [
      id,
    ]);
  }

  insertRecipe(recipe) {
    return this.connection.query(
      `insert into ${this.recipe} (strInstructions) values (?)`,
      [recipe.strInstructions]
    );
  }

  updateRecipe(recipe) {
    return this.connection.query(
      `update ${this.recipe} set strInstructions = ? where id = ?`,
      [recipe.strInstructions, recipe.id]
    );
  }

  // METHODS FOR THE TABLE RECIPE_INGREDIENTS
  findRecipeIngredient(id) {
    return this.connection.query(
      `select * from ${this.recipe_ingredients} where id = ?`,
      [id]
    );
  }

  findAllRecipeIngredients() {
    return this.connection.query(`select * from ${this.recipe_ingredients}`);
  }

  deleteRecipeIngredient(id) {
    return this.connection.query(
      `delete from ${this.recipe_ingredients} where id = ?`,
      [id]
    );
  }

  insertRecipeIngredient(recipeIngredient) {
    return this.connection.query(
      `insert into ${this.recipe_ingredients} (strIngredient) values (?)`,
      [recipeIngredient.strIngredient]
    );
  }

  updateRecipeIngredient(recipeIngredient) {
    return this.connection.query(
      `update ${this.recipe_ingredients} set strIngredient = ? where id = ?`,
      [recipeIngredient.strIngredient, recipeIngredient.id]
    );
  }

  // MÉTHODES POUR LA TABLE RECIPE_STEPS
  findRecipeSteps(id) {
    return this.connection.query(
      `select * from ${this.recipe_steps} where id = ?`,
      [id]
    );
  }

  findAllRecipeSteps() {
    return this.connection.query(`select * from ${this.recipe_steps}`);
  }

  deleteRecipeSteps(id) {
    return this.connection.query(
      `delete from ${this.recipe_steps} where id = ?`,
      [id]
    );
  }

  insertRecipeSteps(recipeStep) {
    return this.connection.query(
      `insert into ${this.recipe_steps} (step) values (?)`,
      [recipeStep.step]
    );
  }

  updateRecipeSteps(recipeStep) {
    return this.connection.query(
      `update ${this.recipe_steps} set step = ? where id = ?`,
      [recipeStep.step, recipeStep.id]
    );
  }

  // MÉTHODES POUR LA TABLE RECIPE_TAGS
  findRecipeTags(id) {
    return this.connection.query(
      `select * from ${this.recipe_tags} where id = ?`,
      [id]
    );
  }

  findAllRecipeTags() {
    return this.connection.query(`select * from ${this.recipe_tags}`);
  }

  deleteRecipeTags(id) {
    return this.connection.query(
      `delete from ${this.recipe_tags} where id = ?`,
      [id]
    );
  }

  insertRecipeTags(recipeTag) {
    return this.connection.query(
      `insert into ${this.recipe_tags} (tag) values (?)`,
      [recipeTag.tag]
    );
  }

  updateRecipeTags(recipeTag) {
    return this.connection.query(
      `update ${this.recipe_tags} set tag = ? where id = ?`,
      [recipeTag.tag, recipeTag.id]
    );
  }

  // MÉTHODES POUR LA TABLE TAGS
  findTags(id) {
    return this.connection.query(`select * from ${this.tags} where id = ?`, [
      id,
    ]);
  }

  findAllTags() {
    return this.connection.query(`select * from ${this.tags}`);
  }

  deleteTags(id) {
    return this.connection.query(`delete from ${this.tags} where id = ?`, [id]);
  }

  insertTags(tag) {
    return this.connection.query(`insert into ${this.tags} (name) values (?)`, [
      tag.name,
    ]);
  }

  updateTags(tag) {
    return this.connection.query(
      `update ${this.tags} set name = ? where id = ?`,
      [tag.name, tag.id]
    );
  }

  // MÉTHODES POUR LA TABLE USERS_FAVORITES
  findUsersFavorites(userId) {
    return this.connection.query(
      `select * from ${this.users_favorites} where user_id = ?`,
      [userId]
    );
  }

  findFavoritesByUser(favoriteId) {
    return this.connection.query(
      `select * from ${this.users_favorites} where favorite_id = ?`,
      [favoriteId]
    );
  }

  deleteUsersFavorites(userId, favoriteId) {
    return this.connection.query(
      `delete from ${this.users_favorites} where user_id = ? and favorite_id = ?`,
      [userId, favoriteId]
    );
  }

  insertUsersFavorites(userId, favoriteId) {
    return this.connection.query(
      `insert into ${this.users_favorites} (user_id, favorite_id) values (?, ?)`,
      [userId, favoriteId]
    );
  }

  // MÉTHODES POUR LA TABLE USERS_LIKES
  findUserLike(userId, likeId) {
    return this.connection.query(
      `select * from ${this.users_likes} where userId = ? and likeId = ?`,
      [userId, likeId]
    );
  }

  findAllUserLikes(userId) {
    return this.connection.query(
      `select * from ${this.users_likes} where userId = ?`,
      [userId]
    );
  }

  deleteUserLike(userId, likeId) {
    return this.connection.query(
      `delete from ${this.users_likes} where userId = ? and likeId = ?`,
      [userId, likeId]
    );
  }

  insertUserLike(userLike) {
    return this.connection.query(
      `insert into ${this.users_likes} (userId, likeId) values (?, ?)`,
      [userLike.userId, userLike.likeId]
    );
  }

  updateUserLike(userLike) {
    return this.connection.query(
      `update ${this.users_likes} set userId = ?, likeId = ? where id = ?`,
      [userLike.userId, userLike.likeId, userLike.id]
    );
  }
  // METHODE POUR LA TABLE USERS_DISLIKES

  findUsersDislikes(id) {
    return this.connection.query(
      `select * from ${this.users_dislikes} where id = ?`,
      [id]
    );
  }

  findAllUsersDislikes() {
    return this.connection.query(`select * from ${this.users_dislikes}`);
  }

  deleteUsersDislike(id) {
    return this.connection.query(
      `delete from ${this.users_dislikes} where id = ?`,
      [id]
    );
  }

  insertUsersDislike(dislike) {
    return this.connection.query(
      `insert into ${this.users_dislikes} (user_id, meal_id) values (?, ?)`,
      [dislike.user_id, dislike.meal_id]
    );
  }

  updateUsersDislike(dislike) {
    return this.connection.query(
      `update ${this.users_dislikes} set user_id = ?, meal_id = ? where id = ?`,
      [dislike.user_id, dislike.meal_id, dislike.id]
    );
  }
}

module.exports = AbstractManager;
