import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductCategoriesPage from './pages/ProductCategoriesPage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/categories" element={<ProductCategoriesPage />} />
        <Route path="/categories/:slug" element={<CategoryPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
