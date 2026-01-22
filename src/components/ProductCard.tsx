import type { Product } from '../types/product';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
  CardAction,
  CardContent,
} from '@/components/ui/card';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
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
      </CardHeader>
      <CardContent>
        {product.discountPercentage ? (
          <>
            <span className="line-through">{product.price.toFixed(2)}$</span>
            <span className="mx-2 text-red-500">
              {Number(
                product.price * (1 - product.discountPercentage / 100),
              ).toFixed(2)}
              $
            </span>
          </>
        ) : (
          <span>{product.price.toFixed(2)}$</span>
        )}
        <CardDescription>{product.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link to={`/products/${product.id}`}>Read more</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
