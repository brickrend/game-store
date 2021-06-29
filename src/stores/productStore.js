import products from "../products";
import { makeAutoObservable } from "mobx";
import slugify from "react-slugify";

class ProductStore {
  products = products;
  constructor() {
    makeAutoObservable(this);
  }
  DeleteProduct = (productId) => {
    const updateProducts = this.products.filter(
      (game) => game.id !== productId
    );
    this.products = updateProducts;
  };

  createProduct = (newProduct) => {
    newProduct.id = this.products.length + 1;
    newProduct.slug = slugify(newProduct.name);
    this.products.push(newProduct);
    // this.products.name = newProduct.name;
    // this.products.price = newProduct.price;
    // this.products.discription = newProduct.discription;
    // this.products.image = newProduct.image;
  };

  updateProduct = (updateProduct) => {
    const product = this.products.find(
      (product) => product.id === updateProduct.id
    );
    product.name = updateProduct.name;
    product.price = updateProduct.price;
    product.image = updateProduct.image;
    product.slug = slugify(product.name);
  };
}
const productInstens = new ProductStore();

export default productInstens;
