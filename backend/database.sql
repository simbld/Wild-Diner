DROP TABLE IF EXISTS User;
CREATE TABLE User (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  hashed_password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO User (
    username,
    hashed_password,
    email,
    created_at,
    updated_at
  )
VALUES (
    'admin',
    'admin',
    'admin@localhost',
    NOW(),
    NOW()
  );
DROP TABLE IF EXISTS Meal;
CREATE TABLE Meal (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  strMeal VARCHAR(255) NOT NULL,
  strCategory VARCHAR(255) NOT NULL,
  strArea VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES User(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO Meal (user_id, strMeal, strCategory, strArea)
VALUES (1, 'Spaghetti', 'Pasta', 'Italian');
DROP TABLE IF EXISTS Likes;
CREATE TABLE Likes (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  meal_id INT UNSIGNED NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  FOREIGN KEY (user_id) REFERENCES User(id),
  FOREIGN KEY (meal_id) REFERENCES Meal(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO Likes (user_id, meal_id, created_at, updated_at)
VALUES (1, 1, NOW(), NOW());
DROP TABLE IF EXISTS Favorites;
CREATE TABLE Favorites (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  meal_id INT UNSIGNED NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  FOREIGN KEY (user_id) REFERENCES User(id),
  FOREIGN KEY (meal_id) REFERENCES Meal(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO Favorites (user_id, meal_id, created_at, updated_at)
VALUES (1, 1, NOW(), NOW());
DROP TABLE IF EXISTS Dislikes;
CREATE TABLE Dislikes (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  meal_id INT UNSIGNED NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  FOREIGN KEY (user_id) REFERENCES User(id),
  FOREIGN KEY (meal_id) REFERENCES Meal(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO Dislikes (user_id, meal_id, created_at, updated_at)
VALUES (1, 1, NOW(), NOW());
DROP TABLE IF EXISTS Comments;
CREATE TABLE Comments (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  meal_id INT UNSIGNED NOT NULL,
  text TEXT NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  FOREIGN KEY (user_id) REFERENCES User(id),
  FOREIGN KEY (meal_id) REFERENCES Meal(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO Comments (user_id, meal_id, text, created_at, updated_at)
VALUES (1, 1, 'This is a comment', NOW(), NOW());
DROP TABLE IF EXISTS Dish;
CREATE TABLE Dish (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  meal_id INT UNSIGNED NOT NULL,
  strInstructions TEXT NOT NULL,
  FOREIGN KEY (meal_id) REFERENCES Meal(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO Dish (meal_id, strInstructions)
VALUES (1, 'Cook the spaghetti');
DROP TABLE IF EXISTS Media;
CREATE TABLE Media (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  dish_id INT UNSIGNED NOT NULL,
  user_id INT UNSIGNED NOT NULL,
  type VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL,
  FOREIGN KEY (dish_id) REFERENCES Dish(id),
  FOREIGN KEY (user_id) REFERENCES User(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO Media (dish_id, user_id, type, url)
VALUES (
    1,
    1,
    'image',
    'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg'
  );
DROP TABLE IF EXISTS Ingredient;
CREATE TABLE Ingredient (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO Ingredient (name)
VALUES ('Spaghetti');
DROP TABLE IF EXISTS Dosage;
CREATE TABLE Dosage (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  ingredient_id INT UNSIGNED NOT NULL,
  dish_id INT UNSIGNED NOT NULL,
  quantity FLOAT NOT NULL,
  unit VARCHAR(255) NOT NULL,
  FOREIGN KEY (ingredient_id) REFERENCES Ingredient(id),
  FOREIGN KEY (dish_id) REFERENCES Dish(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO Dosage (ingredient_id, dish_id, quantity, unit)
VALUES (1, 1, 1, 'kg');
DROP TABLE IF EXISTS Recipe;
CREATE TABLE Recipe (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  dish_id INT UNSIGNED NOT NULL,
  step INT NOT NULL,
  description TEXT NOT NULL,
  FOREIGN KEY (dish_id) REFERENCES Dish(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO Recipe (dish_id, step, description)
VALUES (1, 1, 'Cook the spaghetti');
DROP TABLE IF EXISTS Tag;
CREATE TABLE Tag (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO Tag (name)
VALUES ('Pasta');
DROP TABLE IF EXISTS DishTag;
CREATE TABLE DishTag (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  dish_id INT UNSIGNED NOT NULL,
  tag_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (dish_id) REFERENCES Dish(id),
  FOREIGN KEY (tag_id) REFERENCES Tag(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO DishTag (dish_id, tag_id)
VALUES (1, 1);
DROP TABLE IF EXISTS UserTag;
CREATE TABLE UserTag (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  tag_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES User(id),
  FOREIGN KEY (tag_id) REFERENCES Tag(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO UserTag (user_id, tag_id)
VALUES (1, 1);
DROP TABLE IF EXISTS MealTag;
CREATE TABLE MealTag (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  meal_id INT UNSIGNED NOT NULL,
  tag_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (meal_id) REFERENCES Meal(id),
  FOREIGN KEY (tag_id) REFERENCES Tag(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO MealTag (meal_id, tag_id)
VALUES (1, 1);
DROP TABLE IF EXISTS DishIngredient;
CREATE TABLE DishIngredient (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  dish_id INT UNSIGNED NOT NULL,
  ingredient_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (dish_id) REFERENCES Dish(id),
  FOREIGN KEY (ingredient_id) REFERENCES Ingredient(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO DishIngredient (dish_id, ingredient_id)
VALUES (1, 1);
DROP TABLE IF EXISTS MealIngredient;
CREATE TABLE MealIngredient (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  meal_id INT UNSIGNED NOT NULL,
  ingredient_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (meal_id) REFERENCES Meal(id),
  FOREIGN KEY (ingredient_id) REFERENCES Ingredient(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO MealIngredient (meal_id, ingredient_id)
VALUES (1, 1);
DROP TABLE IF EXISTS UserIngredient;
CREATE TABLE UserIngredient (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  ingredient_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES User(id),
  FOREIGN KEY (ingredient_id) REFERENCES Ingredient(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO UserIngredient (user_id, ingredient_id)
VALUES (1, 1);
DROP TABLE IF EXISTS UserMeal;
CREATE TABLE UserMeal (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  meal_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES User(id),
  FOREIGN KEY (meal_id) REFERENCES Meal(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO UserMeal (user_id, meal_id)
VALUES (1, 1);
DROP TABLE IF EXISTS UserDish;
CREATE TABLE UserDish (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  dish_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES User(id),
  FOREIGN KEY (dish_id) REFERENCES Dish(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO UserDish (user_id, dish_id)
VALUES (1, 1);
DROP TABLE IF EXISTS UserRecipe;
CREATE TABLE UserRecipe (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  recipe_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES User(id),
  FOREIGN KEY (recipe_id) REFERENCES Recipe(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO UserRecipe (user_id, recipe_id)
VALUES (1, 1);
DROP TABLE IF EXISTS UserDishIngredient;
CREATE TABLE UserDishIngredient (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  dish_id INT UNSIGNED NOT NULL,
  ingredient_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES User(id),
  FOREIGN KEY (dish_id) REFERENCES Dish(id),
  FOREIGN KEY (ingredient_id) REFERENCES Ingredient(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
DROP TABLE IF EXISTS UserRecipeIngredient;
CREATE TABLE UserRecipeIngredient (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  recipe_id INT UNSIGNED NOT NULL,
  ingredient_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES User(id),
  FOREIGN KEY (recipe_id) REFERENCES Recipe(id),
  FOREIGN KEY (ingredient_id) REFERENCES Ingredient(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO UserRecipeIngredient (user_id, recipe_id, ingredient_id)
VALUES (1, 1, 1);
DROP TABLE IF EXISTS UserMealIngredient;
CREATE TABLE UserMealIngredient (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  meal_id INT UNSIGNED NOT NULL,
  ingredient_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES User(id),
  FOREIGN KEY (meal_id) REFERENCES Meal(id),
  FOREIGN KEY (ingredient_id) REFERENCES Ingredient(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO UserMealIngredient (user_id, meal_id, ingredient_id)
VALUES (1, 1, 1);
DROP TABLE IF EXISTS UserMealTag;
CREATE TABLE UserMealTag (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  meal_id INT UNSIGNED NOT NULL,
  tag_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES User(id),
  FOREIGN KEY (meal_id) REFERENCES Meal(id),
  FOREIGN KEY (tag_id) REFERENCES Tag(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO UserMealTag (user_id, meal_id, tag_id)
VALUES (1, 1, 1);
DROP TABLE IF EXISTS UserDishTag;
CREATE TABLE UserDishTag (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  dish_id INT UNSIGNED NOT NULL,
  tag_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES User(id),
  FOREIGN KEY (dish_id) REFERENCES Dish(id),
  FOREIGN KEY (tag_id) REFERENCES Tag(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO UserDishTag (user_id, dish_id, tag_id)
VALUES (1, 1, 1);
DROP TABLE IF EXISTS UserRecipeTag;
CREATE TABLE UserRecipeTag (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  recipe_id INT UNSIGNED NOT NULL,
  tag_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES User(id),
  FOREIGN KEY (recipe_id) REFERENCES Recipe(id),
  FOREIGN KEY (tag_id) REFERENCES Tag(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO UserRecipeTag (user_id, recipe_id, tag_id)
VALUES (1, 1, 1);
DROP TABLE IF EXISTS UserIngredientTag;
CREATE TABLE UserIngredientTag (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  ingredient_id INT UNSIGNED NOT NULL,
  tag_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES User(id),
  FOREIGN KEY (ingredient_id) REFERENCES Ingredient(id),
  FOREIGN KEY (tag_id) REFERENCES Tag(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO UserIngredientTag (user_id, ingredient_id, tag_id)
VALUES (1, 1, 1);
DROP TABLE IF EXISTS UserDishIngredientTag;
CREATE TABLE UserDishIngredientTag (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  dish_id INT UNSIGNED NOT NULL,
  ingredient_id INT UNSIGNED NOT NULL,
  tag_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES User(id),
  FOREIGN KEY (dish_id) REFERENCES Dish(id),
  FOREIGN KEY (ingredient_id) REFERENCES Ingredient(id),
  FOREIGN KEY (tag_id) REFERENCES Tag(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO UserDishIngredientTag (user_id, dish_id, ingredient_id, tag_id)
VALUES (1, 1, 1, 1);
DROP TABLE IF EXISTS UserMealIngredientTag;
CREATE TABLE UserMealIngredientTag (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  meal_id INT UNSIGNED NOT NULL,
  ingredient_id INT UNSIGNED NOT NULL,
  tag_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES User(id),
  FOREIGN KEY (meal_id) REFERENCES Meal(id),
  FOREIGN KEY (ingredient_id) REFERENCES Ingredient(id),
  FOREIGN KEY (tag_id) REFERENCES Tag(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO UserMealIngredientTag (user_id, meal_id, ingredient_id, tag_id)
VALUES (1, 1, 1, 1);
DROP TABLE IF EXISTS UserRecipeIngredientTag;
CREATE TABLE UserRecipeIngredientTag (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  recipe_id INT UNSIGNED NOT NULL,
  ingredient_id INT UNSIGNED NOT NULL,
  tag_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES User(id),
  FOREIGN KEY (recipe_id) REFERENCES Recipe(id),
  FOREIGN KEY (ingredient_id) REFERENCES Ingredient(id),
  FOREIGN KEY (tag_id) REFERENCES Tag(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO UserRecipeIngredientTag (user_id, recipe_id, ingredient_id, tag_id)
VALUES (1, 1, 1, 1);
DROP TABLE IF EXISTS UserRecipeIngredient;
CREATE TABLE UserRecipeIngredient (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  recipe_id INT UNSIGNED NOT NULL,
  ingredient_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES User(id),
  FOREIGN KEY (recipe_id) REFERENCES Recipe(id),
  FOREIGN KEY (ingredient_id) REFERENCES Ingredient(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO UserRecipeIngredient (user_id, recipe_id, ingredient_id)
VALUES (1, 1, 1);
DROP TABLE IF EXISTS UserDishIngredient;
CREATE TABLE UserDishIngredient (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  dish_id INT UNSIGNED NOT NULL,
  ingredient_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES User(id),
  FOREIGN KEY (dish_id) REFERENCES Dish(id),
  FOREIGN KEY (ingredient_id) REFERENCES Ingredient(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO UserDishIngredient (user_id, dish_id, ingredient_id)
VALUES (1, 1, 1);
DROP TABLE IF EXISTS UserMealIngredient;
CREATE TABLE UserMealIngredient (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  meal_id INT UNSIGNED NOT NULL,
  ingredient_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES User(id),
  FOREIGN KEY (meal_id) REFERENCES Meal(id),
  FOREIGN KEY (ingredient_id) REFERENCES Ingredient(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO UserMealIngredient (user_id, meal_id, ingredient_id)
VALUES (1, 1, 1);