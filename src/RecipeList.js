import React from "react";
import RecipeView from "./RecipeView"

// Creates the outline of the table to display recipes,
// makes call to RecipeView to finish the table display
// Removes recipes from list to pass to RecipeView

function RecipeList({ deleteRecipe, recipes }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr className="row">
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
      </table>
      <table>
        <tbody>
          
            {recipes.map((recipe, index) => (
              <RecipeView 
                deleteRecipe={() => deleteRecipe(index)}
                key={index}
                recipe={recipe}
              />
            ))}
          
        </tbody>
          
      </table>
    </div>
  );
}

export default RecipeList;
