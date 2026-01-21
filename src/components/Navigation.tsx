import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { useProductCategories } from '../queries/productCategoriesQuery';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const productCategories = useProductCategories();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink>
            <Link to="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <NavigationMenuLink>
              <Link to="/categories">Categories</Link>
            </NavigationMenuLink>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              {productCategories.data?.map((category) => (
                <li key={category.slug}>
                  <NavigationMenuLink asChild>
                    <Link to={`/categories/${category.slug}`}>
                      {category.name}
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
