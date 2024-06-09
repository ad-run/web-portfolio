/*To group meals according to when they are served, you can categorize them into common mealtime groups. Here are some typical meal categories:

Breakfast: Include items like omelets, pancakes, cereals, and breakfast burritos.
Brunch: A combination of breakfast and lunch dishes, often served later in the morning or early afternoon.
Lunch: Sandwiches, salads, soups, and other light meals.
Dinner: Heavier meals typically served in the evening, including options like grilled meats, pasta, and various side dishes.
Appetizers/Snacks: Finger foods or small bites served before the main meal.
Desserts: Sweets and treats served at the end of a meal.*/

const source = document.getElementById('templateHB').innerHTML;
const template = Handlebars.compile(source);


const context = {
  label: "Meal maker recipes",
  title: "In case you Need to Know How to Make",
  dayDish: [
    {
      group: "Soupe",
      title: "Chili soup",
      taste: "Spicy, rich flavor",
      image: "../src/images/mealMaker/chili_soupe.jpeg",
      mealTime: "Brunch, Lunch, Dinner",
      ingredients: "600 g ground beef, 1 liter tomato juice, 4 carrots, 2 paprikas, 4 chili peppers, 2 onions, 1 celery, 4 garlic cloves, 2 can red kidney chili beans (drained and rinsed), 1 can chopped tomatoes, 2 tbs tomato paste, 1 tbs salt, 1/2 ts chili powder, 1/2 ts pepper, 2 l. beef broth, 3 ts olive oil",
      instructions: "Heat olive oil in a large soup pot.; Add chopped onion, garlic, chili pepers and cook for 5 minutes.; Add ground beef and break it apart with a wooden spoon.; Add chopped tomatoes and paprikas, carrots, celery.; Add chili powder, tomato paste, salt, pepper.; Stir until well combined. Add tomato juice, beans, beef broth.; Cook 20-25 minutes.; Let the chili rest for 5-10 minutes before serving.; In addition as toppings you may also want to have shredded cheddar cheese and parsley.",
      time: "About 1 hour",
      price: "100",
      NutritionInfo: 'Serving Size: 1 slice Calories:',
      left: false,
    },
    {
      group: "Soupe",
      title: "Red beet soup",
      taste: "Warm, sweet, and sour",
      image: "../src/images/mealMaker/red_beet_soup.jpeg",
      mealTime: "Brunch, Lunch, Dinner",
      ingredients:
        "300 g. meat (pork with bones), 2-3 red beet, 3 potatoes, 1 carrot, 1 onion (fine chopped), 1 garlic clove (fine chopped), 1 can red kidney beans (drained and rinsed), 2 tbs ketchup, 1 tbs vinegar, 1.5 – 2 liters of water, 2 bay leaves, 1-2 ts salt, 1/2 ts pepper, dills, parsley",
        instructions: "Rinse the meat and place it in a pot with cold water. Add a bay leaf, salt, pepper, and bring to a boil. If foam appears, skim it off. Simmer until the meat is tender, depending on the type of meat (about 40 minutes to 1 hour).; Strain the cooked broth. If the meat had bones, remove them. Finely chop the meat and set aside.; In a pan with oil, add onion, garlic and fry until golden brown. Add grated carrots and fry for another 2-3 minutes.; In the strained broth, add grated red beets, potatoes diced into cubes, fried vegetables, and cook  for an additional 10-15 minutes until the red beet is tender.; Add the chopped meat, pour in 1 tbs of vinegar, ketchup, kidney beens, and cook for a few more minutes.; Serve with sour cream and garnish with chopped herbs (dills and parsley).",
        time: "About 1,5 hours",
      price: "",
      left: true,
    },
    {
      group: "Soupe",
      title: "Sauerkraut soup",
      taste: "Simple, tasty and useful",
      image: "../src/images/mealMaker/cabbage_soupe.jpeg",
      mealTime: "Brunch, Lunch, Dinner",
      ingredients:
        "300 g sauerkraut, 2 potatoes, 1 onion, 1 carrot, 100 g smoked bacon, 1.5 chicken broth cube, 1.5-2 liters water, 2 bay leaves, 1/2 ts dills, 3 tbs oil, 1/2 ts pepper, 1 ts salt",
        instructions: "Cleanse the sauerkraut in a sieve, if very sour.; Bring 1.5 – 2 liters of water to a boil in a large pot with the broth cubes. Then insert the sauerkraut, bay leaves, and peppers. Cook about 15-20 minutes (until the sauerkraut becomes softer).; Heat a small amount of oil in a frying pan, add the chopped onion. Bake until soft, remove from the pan, and set aside.; In the same skillet, warm some more oil, include the grated carrots (grated with a larger grater), and fry until slightly soft.; Add the carrot, onion, and sliced bacon to the soup. Add salt, peppers, dills, and simmer until the sauerkraut becomes tender (about 10 more minutes). Taste to check whether additional salt or sourness is needed (if you desire more sourness – add lemon juice or sauerkraut liquid).; If the soup is too sour – include extra boiled water or a little sugar.",
        time: "About 45 min.",
      price: "",
      left: false,
    },
    {
      group: "Main dish",
      title: "Thai-style pork stir-fry",
      taste: "Spicy, delicious",
      image: "../src/images/mealMaker/meal_maker_logo.jpeg",
      mealTime: "Dinner",
      ingredients:
        "600 g pork, 1 carrots, 1 onion, 1 garlic clove (crushed), salt, 1 red chilli (deseeded and finely chopped) 1 red pepper(deseeded and sliced) 1 tbsp fish sauce, 1 tbsp soy sauce, 300 ml rice",
        instructions: "",
        time: "About 45 min.",
      price: "80",
      left: true,
    },
    {
        group: "Main dish",
        title: "Traditional Lithuanian Stuffed Cabbage Rolls",
        taste: "",
        image: "../src/images/mealMaker/meal_maker_logo.jpeg",
        mealTime: "Dinner",
        ingredients:
        "1 medium size cabbage, 600 g ground pork, 140 g half cooked rice, 3 carrots, 1/2 onion, 2 tbsp. ketchup, 1 1/2 tbsp. sour cream,  1 cube chicken or vegetable bouillon, salt, black pepper",
        instructions: "",
        time: "About 1.5 hours",
        price: "80",
        left: false,
      },
    {
        group: "Main dish",
        title: "Taco",
        taste: "Savory and spicy",
        image: "../src/images/mealMaker/meal_maker_logo.jpeg",
        mealTime: "Dinner",
        ingredients:
          "600 g beef, taco spices, tortillas, seasoned vegetables fillings",
          instructions: "",
          time: "About 45 min",
        price: "80",
        left: true,
      },
    {
        group: "Soupe",
        title: 'Smoked pork soup with barley',
        taste: "",
        image: "../src/images/mealMaker/meal_maker_logo.jpeg",
        mealTime: "Brunch, Lunch, Dinner",
        ingredients:
          "600 g smoked pork, 300 g. barley, 3 potato, 1 onion, 1 carrot, salt, pepper, 2 l. water",
          instructions: "",
          time: "About 1,5 hours",
        price: "",
        left: false,
      },
      {
        group: "Soupe",
        title: "Vegetable soup with meat balls",
        taste: "",
        image: "../src/images/mealMaker/soupe_with_meat.jpeg",
        mealTime: "Brunch, Lunch, Dinner",
        ingredients:
          "300 g ground meat, 1 carrots, 1 onion, 1 leak, 1 celery, 1 garlic, cabbage, salt, pepper, 2 l. vegetable broth",
          instructions: "",
          time: "About 30 min",
        price: "80",
        left: true,
      },
    {
      group: "Dessert",
      title: "Honney layer cake",
      taste: "delicious",
      image: "../src/images/mealMaker/honney_cake.jpeg",
      mealTime: "At the end of a meal, for special occasions like birthdays and celebrations",
      ingredients: "2 and 1/4 cups all purpose flour, 2 large eggs (room temperature), 1/2 cup butter, 1/2 cup flavourless oil, 1/2 cup honey, 1 cup brown sugar, 1/4 whole milk, 1/4 cup greek or natural yogurt, 2 and 1/2 ts baking powder, 2 ts vanilla extract, 1 ts cinnamon, 1/2 ts salt, 2 cups whipped cream",
      instructions: "Preheat oven to 180 C.; In a large mixing bowl, add butter, oil and sugar. Mix ingredients with an electric mixer on low speed until until mixture is creamy. Add vanilla, eggs and honey. Mix all to combine.;  In a separate mixing bowl, whisk together flour, baking powder, cinnamon and salt. ; Add half of the dry ingredients, along with the yogurt and milk, to the butter mixture and mix carefully. Add remaining dry ingredients. Continue to mix carefully until cake batter is smooth and creamy.; Divide cake batter between two prepared pans and gently smooth the top using a spatula. Bake cakes for approximately 25-30 minutes.; Leave cakes to cool in their pans for 15-30 minutes. Then carefully remove cakes and transfer to a wire rack to cool completely.; Assemble cake. Slice cakes into two using a sharp knife. Place one cake layer on a serving plate. Generously cover layer in one portion of whipped cream.  Continue with remaining cake layers and cream, finishing with the fourth layer of cake. You’ll have one portion of cream leftover for decorating the top of the cake.; Use a small spatula to cover the top of the cake and the sides with buttercream. Use a piping bag fitted with a large round tip to pipe extra cream on top for decoration.",
      time: "About 2 hours",
      left: false,
    },
    {
      group: "Dessert",
      title: "Brownies with almond and pistachio",
      taste: "",
      image: "../src/images/mealMaker/brownies.jpeg",
      mealTime: "At the end of a meal, party time, for special occasions like birthdays and celebrations",
      ingredients: "",
      instructions: "",
      time: "About 1 hour",
      price: "500",
      left: true,
    },
    {
      group: "Dessert",
      title: "Carrot cake",
      taste: "super soft and extra lush",
      image: "../src/images/mealMaker/carrot_cake.jpeg",
      mealTime: "At the end of a meal, party time",
      ingredients: "",
      reciepe: "",
      instructions: "",
      time: "About 1,5 hours",
      left: false,
    },
    {
      group: "Dessert",
      title: "Lemon zucchini cake with poppy seads",
      taste: "",
      image: "../src/images/mealMaker/meal_maker_logo.jpeg",
      mealTime: "At the end of a meal, party time",
      ingredients: "",
      reciepe: "",
      instructions: "",
      time: "About 45 min",
      left: true,
    },
    {
      group: "Dessert",
      title: "Natural yogurt with fruits and berries",
      taste: "",
      image: "../src/images/mealMaker/meal_maker_logo.jpeg",
      mealTime: "Breakfast, bruch, lunch",
      ingredients: "",
      instructions: "",
      time: "About 15 min",
      price: "500",
      left: false,
    },
  ],
};

// Helper function to split ingredients string into an array
Handlebars.registerHelper('splitIngredients', function(ingredients) {
  return ingredients.split(', ');
});
// Helper function to split instructions step string into an array
Handlebars.registerHelper('splitinstructionsStep', function(instructions) {
  return instructions.split('; ');
});
console.log(context.dayDish[0].ingredients);

const compiledHtml = template(context);
const mealText = document.getElementById('mealInformation');
mealText.innerHTML = compiledHtml;

const ingredientsList = context.dayDish.map(dish => dish.ingredients);

// Log or use the ingredientsList as needed
console.log(ingredientsList);

const meals = context.dayDish
.filter((meal) => meal.group !== "Dessert")
.map((meal) => meal.title);

console.log(meals);

const desserts = context.dayDish
  .filter((dish) => dish.group === "Dessert")
  .map((dessert) => dessert.title);

console.log(desserts);

/*console.log(mealsArray);*/

/*
Meal Maker
A restaurant has hired you to create a function for their website that allows 
them to set a meal and price each morning for Today’s Special. 
Use your knowledge of getters and setters to make sure anyone who uses the new function 
can generate a meal and a price for Today’s Special without any embarrassing errors!
1.We’ll hold the meal, price, and their respective getters and setters in an object named menu.
2. We know properties that begin with _ should not be directly manipulated. But just to validate this knowledge, let’s test it out!
Below the menu object, directly manipulate the two properties by assigning _meal a number value and _price a string value.
3.Add Setter Methods. To safely reassign the two menu properties, we can add setters that type check the values being assigned.
Below the properties, use the set keyword to create a meal setter method with mealToCheck as a parameter. Leave the function body empty for now.
4.In the body of the setter method, create an if statement that checks if mealToCheck is a string. If it is, return the object’s _meal property with mealToCheck assigned as the value.
5. Utilizing the same procedures as above, use the set keyword to create a price setter with priceToCheck as a parameter. This method should make sure the value associated with _price is always a number.
6.Below the menu object, set the values of _meal and _price using the newly created setter methods. Then, console.log() the menu object to check their functionality.
Add a Getter Method
7.Now it’s time to safely return the values of the _meal and _price properties in a readable form. Instead of directly accessing the properties, we can use a getter method that proactively checks if a meal and price have been properly set, before returning the values.
Below the setters, use the get keyword to create a todaysSpecial method. Leave the function body empty for now.
8.In the body of the getter, create an if…else statement to check if _meal and _price values exist (or are truthy values). If so, return a string telling potential website visitors what Today’s Special is. For example: “Today’s Special is Spaghetti for $5!”
If _meal and _price values do not exist (or are falsy) return the string 'Meal or price was not set correctly!'.
8.Finally, use the getter method to console.log() Today’s Special.
Assuming you used the meal setter to assign a string, and the price setter to assign a number, you should see Today’s Special logged to the console.
*/
/*
const menu = {
    _meal: (''),
    _deseert: (''),
    _price: 0,
    set meal (mealToCheck) {
        if (typeof mealToCheck === "string") {
            return this._meal = mealToCheck;
        }
    },
    set price (priceToCheck) {
        if (typeof priceToCheck === "number") {
            return this._price = priceToCheck;
        }
    },
    get todaysSpecial() {
        if (this._meal && this._price) {
            return `Today's Special is ${this._meal} for $${this._price}!`;
        } else {
            return 'Meal or price was not set correctly!';
        }
    }
}*/
/*
If you want to extend your learning on this project, try adding an array of meals and prices to randomly set and get Today’s Special!
*/

/*
const getPrice = () => {
    switch (randomMeal) {
      case 'Chili soup':
      return 50;
      break;
      case 'Red beet soup':
      return 50;
      break;
      case 'Fermented cabbage soup':
      return 50;
      break;
      case 'Vegetable soup with meat balls':
      return 50;
      break;
      case 'Seefood soup':
      return 50;
      break;
    }
  }
  */
  /*menu.meal = randomMeal;
  menu.dessert = randonDessert;
  menu.price = getPrice();
  console.log(menu.todaysSpecial);*/

  let button = document.getElementById('mealToday-btn');
  let dayMeal = document.getElementById('meal');
  let dayDessert = document.getElementById('dessert');
  let textMeal = document.getElementById('textForTodayMeal');

  function dessertSelector() {
    let randonDessert = Math.floor(Math.random() * desserts.length);
    return desserts[randonDessert];
  };
  function mealSelector() {
    let randonMeal = Math.floor(Math.random() * meals.length);
    return meals[randonMeal];
  };
  function showMeal() {
    dayMeal.innerHTML = mealSelector();
    dayDessert.innerHTML = dessertSelector();
    textMeal.innerHTML = 'Today’s Special meal and dessert: ';
    button.innerHTML = 'Come back tomorrow!';
    button.style.cursor = "default";

    button.removeEventListener('click', showMeal);
  };

  button.addEventListener('click', showMeal);
