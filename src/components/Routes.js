import { Route, Switch } from "react-router";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import ShopList from "./ShopList";
import ShopDetail from "./ShopDetail";
import HomePage from "./Home";
import productInstens from "../stores/productStore";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/product">
          <ProductList product={productInstens.products} />
        </Route>
        <Route exact path="/product/:productSlug">
          <ProductDetail />
        </Route>
        <Route exact path="/shop">
          <ShopList />
        </Route>
        <Route exact path="/shop/:shopSlug">
          <ShopDetail />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
