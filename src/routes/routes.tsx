import App from "../App";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "../pages";
import ProductDetails from "../pages/ProductDetails";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='' element={<Home />} />
      <Route index={true} path='products/:id' element={<ProductDetails />} />
    </Route>
  )
);

export default routes;
