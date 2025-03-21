import userecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const recipes = userecipeStore(state => state.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 ? <p>No recipes added yet.</p> : recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
