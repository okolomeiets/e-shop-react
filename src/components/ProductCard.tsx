import type { Product } from '../types/product';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
  CardAction,
} from '@/components/ui/card';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30" />
      <img
        src={product.thumbnail}
        alt={product.title}
        className="relative z-20 w-full"
      />
      <CardHeader>
        <CardAction>
          {product.brand && <Badge variant="secondary">{product.brand}</Badge>}
        </CardAction>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">Read more</Button>
      </CardFooter>
    </Card>
  );
}
