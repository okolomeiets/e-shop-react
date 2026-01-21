import { useParams } from 'react-router-dom';
import { useProductsByCategory } from '../queries/productsByCategoryQuery';
import ProductCard from '../components/ProductCard';

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ?? '';
  const { data, isLoading, isError } = useProductsByCategory(category);
  return (
    <div>
      <h2>{category}</h2>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error getting data</p>}
      {data?.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
