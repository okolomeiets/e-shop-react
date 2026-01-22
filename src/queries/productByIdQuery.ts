import { useQuery } from '@tanstack/react-query';
import { getProductById } from '../api/getProductById';
import type { Product } from '../types/product';

export function useProductById(id: string) {
  return useQuery<Product, Error>({
    queryKey: ['productById', id],
    queryFn: () => getProductById(id),
    enabled: !!id,
  });
}
