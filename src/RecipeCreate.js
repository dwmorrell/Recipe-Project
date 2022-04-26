import React, { useState } from "react";

// Handles the form contents and reinitializes it after submission

function RecipeCreate({ createRecipe }) {

  const initialFormState = {
    name: "Name",
    cuisine: "Cuisine",
    photo: "URL",
    ingredients: "Ingredients",
    preparation: "Preparation",

  }

  const [formData, setFormData] = useState({  ...initialFormState });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe( formData )
    setFormData({ ...initialFormState });
  }

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr className="row-form">
            <td>
              <label htmlFor="name">
                <input
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  className="row-field"
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                  className="row-field"
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input
                  id="photo"
                  type="url"
                  name="photo"
                  onChange={handleChange}
                  value={formData.photo}
                  className="row-field"
                />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea
                  id="ingredients"
                  type="text"
                  name="ingredients"
                  row="2"
                  className="row-field"
                  onChange={handleChange}
                  value={formData.ingredients}>
                </textarea>
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea
                  id="preparation"
                  type="text"
                  name="preparation"
                  row="2"
                  className="row-field"
                  onChange={handleChange}
                  value={formData.preparation}>
                </textarea>              
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
