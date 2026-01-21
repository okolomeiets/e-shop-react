import { useProductCategories } from '../queries/productCategoriesQuery';

export default function ProductCategoriesList() {
  const { data, isLoading, isError } = useProductCategories();
  return (
    <div>
      Categories:
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error getting data</p>}
      <ul>
        {data?.map((category) => (
          <li key={category.slug}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}
