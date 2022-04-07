import Transformer from '../BaseTransformer'

class CocktailTransformer extends Transformer {
  // better will be create domain layer like in the github example, for better approach if we want to update to typescript
  static create(cocktail) {
    const cocktailData = {}
    cocktailData.id = cocktail.idDrink
    cocktailData.name = cocktail.strDrink
    cocktailData.image = cocktail.strDrinkThumb
    cocktailData.category = cocktail.strCategory
    cocktailData.alcohol = cocktail.strAlcoholic
    cocktailData.instructions = cocktail.strInstructions
    cocktailData.glass = cocktail.strGlass
    cocktailData.ingredients = getIngredients(cocktail)
    return cocktailData
  }

  static fetch(cocktail) {
    return CocktailTransformer.create(cocktail)
  }
}

function getIngredients(cocktail) {
  const ingredients = []
  for (let i = 1; i <= 15; i++) {
    const ingredientName = cocktail[`strIngredient${i}`]
    if (ingredientName)
      ingredients.push({
        name: ingredientName,
        measure: cocktail[`strMeasure${i}`],
      })
  }
  return ingredients
}

export default CocktailTransformer
