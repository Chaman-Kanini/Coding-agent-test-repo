import { Link, Navigate, Route, Routes } from 'react-router-dom';

import ProductPage from './features/product/ProductPage';
import CustomerPage from './features/customer/CustomerPage';
import OrderPage from './features/order/OrderPage';
import OrderItemPage from './features/order-item/OrderItemPage';
import CartPage from './features/cart/CartPage';

export default function App() {
  return (
    <>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/customers">Customers</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/order-items">OrderItems</Link>
        <Link to="/carts">Carts</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/products/*" element={<ProductPage />} />
          <Route path="/customers/*" element={<CustomerPage />} />
          <Route path="/orders/*" element={<OrderPage />} />
          <Route path="/order-items/*" element={<OrderItemPage />} />
          <Route path="/carts/*" element={<CartPage />} />
          <Route path="*" element={<Navigate to="/products" replace />} />
        </Routes>
      </main>
    </>
  );
}
