import { useProductById } from '../queries/productByIdQuery';
import { useParams } from 'react-router-dom';
import ProductCarousel from '../components/ProductCarousel';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useProductById(id ?? '');
  const product = data;

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error getting data</p>}
      {product && (
        <div>
          {product.title}
          {product.description}
          {product.category}
          {product.tags}
          {product.brand}
          <ProductCarousel images={product.images} title={product.title} />
        </div>
      )}
    </>
  );
}
