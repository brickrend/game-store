import { makeAutoObservable } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

class ProductStore {
  products = [];

  constructor() {
    makeAutoObservable(this);
  }
  DeleteProduct = (productId) => {
    const updateProducts = this.products.filter(
      (game) => game.id !== productId
    );
    this.products = updateProducts;
  };

  fetchproduct = async () => {
    try {
      const response = await axios.get("http://localhost:8000/product");
      this.products = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  createProduct = (newProduct) => {
    newProduct.id = this.products.length + 1;
    newProduct.slug = slugify(newProduct.name);
    this.products.push(newProduct);
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
productInstens.fetchproduct();

export default productInstens;
