import { useQuery } from '@tanstack/react-query';
import { getProductsCategories } from '../api/getProductCategories';
import type { ProductCategories } from '../types/productCategories';

export function useProductCategories() {
  return useQuery<ProductCategories, Error>({
    queryKey: ['productCategories'],
    queryFn: getProductsCategories,
  });
}
