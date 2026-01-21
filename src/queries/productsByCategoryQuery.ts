import { useQuery } from '@tanstack/react-query';
import { getProductsByCategory } from '../api/getProductsByCategory';
import type { productsByCategoryResponse } from '../types/productsByCategoryResponse';

export function useProductsByCategory(category: string) {
  return useQuery<productsByCategoryResponse, Error>({
    queryKey: ['productsByCategory', category],
    queryFn: () => getProductsByCategory(category),
    enabled: !!category,
  });
}
