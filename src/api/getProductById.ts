import { API_BASE_URL } from '../../config/constants';
import type { Product } from '../types/product';

export async function getProductById(id: string): Promise<Product> {
  const response = await fetch(`${API_BASE_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product by id ${id}`);
  }
  const result = await response.json();
  return result;
}
