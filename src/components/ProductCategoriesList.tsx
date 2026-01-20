import { useProductCategories } from '../queries/productCategoriesQuery'

export default function ProductCategoriesList() {
  const productCategories = useProductCategories();
  return (
    <div>Categories:
      {productCategories.isLoading && (<p>Loading...</p>)}
      {productCategories.isError && (<p>Error getting data</p>)}
      <ul>{productCategories.data?.map((category) => <li key={category}>{category}</li>)}</ul>
    </div>
  )
}