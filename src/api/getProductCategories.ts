import { API_BASE_URL } from '../../config/constants';

export async function getProductsCategories() {
  const response = await fetch(`${API_BASE_URL}/products/categories`);
  const result = await response.json();
  return result;
}
