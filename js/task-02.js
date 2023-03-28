const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsId = document.querySelector('#ingredients');

const ingredientsList = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join('');

ingredientsId.innerHTML = ingredientsList;
