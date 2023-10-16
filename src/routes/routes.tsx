import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import {
  Home,
  Contact,
  Products,
  Categories,
  ProductDetails,
  CategoryDetail,
} from "../pages";
import App from "../App";
import Cart from "../pages/Cart/Cart";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='cart' element={<Cart />} />
      <Route path='products' element={<Products />} />
      <Route path='contact' element={<Contact />} />
      <Route path='categories' element={<Categories />} />
      <Route path='products/:id' element={<ProductDetails />} />
      <Route path='categories/:name' element={<CategoryDetail />} />
    </Route>
  )
);

export default routes;
