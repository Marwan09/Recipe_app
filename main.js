const recipes = [
  {
    id: 1,
    steps:
      "Season steak with salt and pepper and place in a resealable bag. Add onion, gahaking periodically to coat steak.",
    ingredients: [
      "1 (8 ounce) flat iron steak",
      "2 pinches salt and coarsely ground pepper ",
      "1 red onion, chopped",
      "2 cloves garlic, minced",
      "2 tablespoons Worcestershire sauce ",
    ],
    title: " Flat Iron Steak Marinade",
    url: "http://allrecipes.com/recipe/244611/5-ingredient-flat-iron-steak-marinade/",
    image: "img/dish4.jpg",
    cook_time: "1 hour",
  },
  {
    id: 2,
    steps: "Preheat the oven and mix the ingredients. Bake until golden brown.",
    ingredients: [
      "2 cups all-purpose flour",
      "1 cup sugar",
      "1 teaspoon baking powder",
      "1/2 teaspoon salt",
      "1 cup milk",
      "1/2 cup unsalted butter, melted",
      "1 teaspoon vanilla extract",
    ],
    title: "Classic Pound Cake",
    url: "http://example.com/classic-pound-cake-recipe/",
    image: "img/dish5.jpg",
    cook_time: "1.5 hours",
  },
  {
    id: 3,
    steps:
      "Cook pasta according to package instructions. In a skillet, sauté garlic in olive oil. Add tomatoes, basil, and season with salt and pepper. Toss cooked pasta in the sauce.",
    ingredients: [
      "8 ounces spaghetti",
      "2 tablespoons olive oil",
      "3 cloves garlic, minced",
      "1 pint cherry tomatoes, halved",
      "1/2 cup fresh basil, chopped",
      "Salt and pepper to taste",
    ],
    title: "Tomato Basil Pasta",
    url: "http://example.com/tomato-basil-pasta-recipe/",
    image: "img/dish6.jpg",
    cook_time: "20 minutes",
  },
  {
    id: 4,
    steps: "Grill chicken until fully cooked. In a bowl, mix together honey, soy sauce, garlic, and ginger. Brush the sauce over the grilled chicken.",
    ingredients: [
        "4 boneless, skinless chicken breasts",
        "1/4 cup honey",
        "1/4 cup soy sauce",
        "2 cloves garlic, minced",
        "1 teaspoon fresh ginger, grated",
    ],
    title: "Honey Soy Grilled Chicken",
    url: "http://example.com/honey-soy-grilled-chicken-recipe/",
    image: "img/dish1.jpg",
    cook_time: "15 minutes",
}, {
  id: 4,
  steps: "Grill chicken until fully cooked. In a bowl, mix together honey, soy sauce, garlic, and ginger. Brush the sauce over the grilled chicken.",
  ingredients: [
      "4 boneless, skinless chicken breasts",
      "1/4 cup honey",
      "1/4 cup soy sauce",
      "2 cloves garlic, minced",
      "1 teaspoon fresh ginger, grated",
  ],
  title: "Honey Soy Grilled Chicken",
  url: "http://example.com/honey-soy-grilled-chicken-recipe/",
  image: "img/dish5.jpg",
  cook_time: "15 minutes",
}
];

const cards = document.getElementById("cards");

const showCard = () => {
    // loop in object
recipes.map((recipe)=>{
  const newCard = document.createElement("div");
  newCard.classList.add("col");
  newCard.setAttribute("id", "card");
  newCard.innerHTML += `  <div class="card h-100">

      <img src=${recipe.image} class="card-img-top" alt="lll">
      <div class="card-body">
         <h5 class="card-title ">${recipe.title}</h5>
          <p class="card-text "> ${recipe.steps}</p>
          <p class="card-text ">Cook time: ${recipes[0].cook_time}</p>

        </div>
        <div class="card-footer text-center">
         <!-- <button type="button" class="btn btn-success ">View Recipe</button> -->
         <a class="btn btn-success " href="ViewRecipe.html">View Recipe</a>
        </div>
        </div>`;
            // insert card to cards
            cards.appendChild(newCard)

})

 
    
};
showCard();
