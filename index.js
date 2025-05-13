const recipes = [
  {
    name: 'Peanut Butter Sauce Stir Fry',
    prepTime: '45 minutes',
    calories: 880,
    source: 'Food & Wine Magazine',
    tags: ['Asian', 'Wok'],
    ingredients: [
      {
        type: 'Meat',
        description: 'Chicken',
      },
      {
        type: 'Vegetable',
        description: 'Broccoli'
      },
      {
        type: 'Seasoning/Condiment',
        description: 'Peanut Butter'
      }
    ]
  },
  {
    name: 'Pasta Carbonara',
    prepTime: '30 minutes',
    calories: 1200,
    source: 'Food & Wine Magazine',
    tags: ['Italian', 'Raw egg'],
    ingredients: [
      {
        type: 'Pasta',
        description: 'Linguine'
      },
      {
        type: 'Meat',
        description: 'Pancetta'
      },
      {
        type: 'Eggsa and Dairy',
        description: 'Egg yolks'
      }
    ]
  },
  {
    name: 'Vegetable Medley',
    prepTime: '20 minutes',
    calories: 500,
    source: 'The Joy of Cooking by Julia Child',
    tags: ['Steamed', 'Keto friendly'],
    ingredients: [
      {
        type: 'Vegetable',
        description: 'Cauliflower'
      },
      {
        type: 'Vegetable',
        description: 'Broccoli',
      },
      {
        type: 'Vegetable',
        description: 'Carrots'
      }
    ]
  }
];

/*
To check your work, log the result of invoking the functions and run
`node index.js` in your terminal.
*/

/*
Create a function called filterBySource that takes in an array of recipe objects
and a string of a source. This function should use the native filter method 
to return a new array of only the recipe objects that match the input source.

example:
filterBySource(recipes, 'Food & Wine Magazine')
// => [{Peanut Butter Sauce Stir Fry}, {Pasta Carbonara}]
*/

function filterBySource(){

}

/*
Create a function called filterByTag that takes in an array of recipe objects
and a string of a tag. This function should use the native filter method
to return a new array of recipe objects that contain the input tag.

example:
filterByTag(recipes, 'Asian'); // => [{Peanut Butter Sauce Stir Fry}]
*/

function filterByTag(){

}

/*
Create a function called mapRecipes that takes in an array of recipe objects.
This function should use the native map method to return a new array of strings of
each recipe's name, prep time and calories.

example:
mapRecipes(recipes);
// => 
[
  "Peanut Butter Sauce Stir Fry - Prep time: 45 min - Calories: 880",
  "Pasta Carbonara - Prep time: 30 min - Calories: 1200",
  ...
]
*/

function mapRecipes(){

}

/*
Create a function called getRecipeNames that takes in an array of recipe objects.
This function should use the native reduce method to return a new array of the recipe
names for the recipes that are less than 600 calories.

example:
getRecipeNames(recipes); // => ["Vegetable Medley"]
*/

function getRecipeNames(){

}

/*
Create a function called filterByIngredient that takes in an array of recipe objects and a string
of an ingredient description (ex. "Chicken", "Broccoli"). This function should return a new array
of only the recipe objects that contain the input ingredient.

example:
filterByIngredient('Chicken'); // => [{Peanut Butter Stir Fry Sauce}]
*/

function filterByIngredient(){

}

/*
Create a function called getNonMeats that takes in an array of recipe objects. This function should use the
native map method to return a new array of strings. Each string should any non-meat ingredients followed by a line
break character.

example: getNonMeats(recipes);
// => 
[
  "Broccoli\nPeanutButter\n",
  "Linguine\nEgg Yolks\n",
  "Cauliflower\nBroccoli\nCarrots"
]
*/

function getNonMeats(){

}

/*
Create a function called getPreTimeObject that takes in an array of recipe objects. This function should use the
native reduce method to return an object where each key is the name of a recipe and the value at each key is its
prepTime.

example:
getPrepTimeObject(recipe);
// =>
{
  'Peanut Butter Sauce Stir Fry': '45 minutes',
  'Pasta Carbonara': '30 minutes',
  'Vegetable Medley': '20 minutes'
}
*/

function getPrepTimeObject(){
  
}