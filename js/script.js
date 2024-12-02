// Function to populate recipe categories dynamically
function loadCategories() {
    const categories = [
        { name: 'Breakfast', image: 'images/breakfast.jpg', link: 'recipes.html?category=breakfast' },
        { name: 'Lunch', image: 'images/lunch.jpg', link: 'recipes.html?category=lunch' },
        { name: 'Dinner', image: 'images/dinner.jpg', link: 'recipes.html?category=dinner' },
        { name: 'Desserts', image: 'images/desserts.jpg', link: 'recipes.html?category=desserts' }
    ];

    const categoryList = document.querySelector('.category-list');
    categories.forEach(category => {
        const categoryItem = document.createElement('div');
        categoryItem.classList.add('category');
        categoryItem.innerHTML = `
            <img src="${category.image}" alt="${category.name}">
            <h3>${category.name}</h3>
            <a href="${category.link}">View Recipes</a>
        `;
        categoryList.appendChild(categoryItem);
    });
}

// Function to populate recipe list dynamically
function loadRecipes() {
    const recipes = [
        { name: 'Pancakes', image: 'images/pancakes.jpg', link: 'https://www.allrecipes.com/recipe/21014/good-old-fashioned-pancakes/' },
        { name: 'Grilled Cheese', image: 'images/grilled_cheese.jpg', link: 'https://www.foodnetwork.com/recipes/food-network-kitchen/the-perfect-grilled-cheese-3636831' },
        { name: 'Chocolate Cake', image: 'images/chocolate_cake.jpg', link: 'https://cafedelites.com/chocolate-cake/' }
    ];

    const recipeList = document.querySelector('.recipe-list'); // Corrected to match your class
    recipes.forEach(recipe => {
        const recipeItem = document.createElement('div');
        recipeItem.classList.add('recipe-item');
        recipeItem.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
            <a href="${recipe.link}">View Recipe</a>
        `;
        recipeList.appendChild(recipeItem);
    });
}

// Call functions when the page loads
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.category-list')) { // Check for the correct class here
        loadCategories();
    }
    if (document.querySelector('.recipe-list')) { // Fixed the condition to check for the correct class
        loadRecipes();
    }
});
