import React from "react";

const RecipeCard = ({ recipe }) => {
  const viewRecipe = async () => {
    const API_KEY = "89636c9bd165491cb7768b980f3a54f4";
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${API_KEY}`
      );
      const data = await response.json();
      alert(`Title: ${data.title}\nReady in: ${data.readyInMinutes} min\nServings: ${data.servings}`);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  };

  return (
    <nav className="recipe-card" style={{marginLeft:"-100px"}}>
      <img src={recipe.image} alt={recipe.title} />
      <p style={{color:"white",marginLeft:"100px",fontSize:"18px",margin:"100px",width:"250px"}}>{recipe.title}</p><br/>
      <button className="recbtn" onClick={viewRecipe}>View Recipe</button>
    </nav>
  );
};

export default RecipeCard;
