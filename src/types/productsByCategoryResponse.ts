import type { Product } from './product';

export type productsByCategoryResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};
