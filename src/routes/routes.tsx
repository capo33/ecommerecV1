import App from "../App";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home, Products, ProductDetails } from "../pages";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='products' element={<Products />} />
      <Route path='products/:id' element={<ProductDetails />} />
    </Route>
  )
);

export default routes;
