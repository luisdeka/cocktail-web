import { getRequest } from '@/plugins/request'
import CocktailTransformer from './transformers/cocktailAPI/CocktailTransformer'

export const search = async text => {
  const params = { s: text }
  const { data } = await getRequest('/search.php', params)

  return CocktailTransformer.receiveCollection(data.drinks)
}
