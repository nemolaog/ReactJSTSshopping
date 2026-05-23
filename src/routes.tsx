import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/HomePage.tsx';
import ProductsPage from './pages/Products/ProductsPage';
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
        path: '/',
    element: <Home />, // 首页
    },
  {
    path: '/products',
    element: <ProductsPage />, // 产品列表页
  },
  {
    path: '/products/:id',
    element: <ProductDetailPage />, // 产品详情页
  },
  {
    path: '*', // 404
    element: <NotFound />,
  },
]);

export default router;