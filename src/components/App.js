import { Routes, Route, } from 'react-router-dom';
import Home from 'pages/Home';
import { About } from 'pages/About';
import Products from 'pages/Products';
import NotFound from 'components/NotFound';
import { ProductDetails } from 'pages/ProductDetails';
import {Mission} from 'components/Mission';
import {Team} from 'components/Team';
import {Reviews} from 'components/Reviews';
import { SharedLayout } from 'components/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};