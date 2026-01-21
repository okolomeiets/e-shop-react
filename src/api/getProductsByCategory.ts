import { API_BASE_URL } from '../../config/constants';
import type { productsByCategoryResponse } from '../types/productsByCategoryResponse';

export async function getProductsByCategory(
  category: string,
): Promise<productsByCategoryResponse> {
  const response = await fetch(`${API_BASE_URL}/products/category/${category}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch products by category ${category}`);
  }
  const result = await response.json();
  return result;
}
