import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout';

const About = lazy(() => import('../pages/About'));
const Home = lazy(() => import('../pages/Home'));
const ProductDetails = lazy(() => import('../pages/ProductDetails'));
const Products = lazy(() => import('../pages/Products'));
const Mission = lazy(() => import('./Mission'));
const Team = lazy(() => import('./Team'));
const Reviews = lazy(() => import('./Reviews'));
const NotFound = lazy(() => import('./NotFound'));
// import Home from 'pages/Home';
// import { About } from 'pages/About';
// import {Products} from 'pages/Products';
// import NotFound from 'components/NotFound';
// import { ProductDetails } from 'pages/ProductDetails';
// import {Mission} from 'components/Mission';
// import {Team} from 'components/Team';
// import {Reviews} from 'components/Reviews';

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
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
