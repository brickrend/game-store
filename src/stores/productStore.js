import { makeAutoObservable } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

class ProductStore {
  products = [];

  constructor() {
    makeAutoObservable(this);
  }
  DeleteProduct = async (productId) => {
    // const updateProducts = this.products.filter(
    //   (game) => game.id !== productId
    // );
    // this.products = updateProducts;

    try {
      await axios.delete(`http://localhost:8000/product/${productId}`);
      const updateProducts = this.products.filter(
        (game) => game.id !== productId
      );
      console.log(updateProducts);
      this.products = updateProducts;
    } catch (error) {
      console.error(error);
    }
  };

  fetchproduct = async () => {
    try {
      const response = await axios.get("http://localhost:8000/product");
      this.products = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  createProduct = async (newProduct) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/product",
        newProduct
      );
      this.products.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  updateProduct = async (updateProduct) => {
    try {
      await axios.put(
        `http://localhost:8000/product/${updateProduct.id}`,
        updateProduct
      );
    } catch (error) {
      console.error(error);
    }
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
