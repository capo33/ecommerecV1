import App from "../App";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home, Products, ProductDetails, CategoryDetail } from "../pages";
import Cart from "../pages/Cart";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='products' element={<Products />} />
      <Route path='cart' element={<Cart />} />
      <Route path='products/:id' element={<ProductDetails />} />
      <Route path='categories/:name' element={<CategoryDetail />} />
    </Route>
  )
);

export default routes;
