import { makeAutoObservable } from "mobx";
import shopInstens from "./shopStore";

import axios from "axios";
import instance from "./instance";

class ProductStore {
  products = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }
  DeleteProduct = async (productId) => {
    try {
      await instance.delete(`/product/${productId}`);
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
      const response = await instance.get("/product");
      this.products = response.data;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };

  createProduct = async (newProduct, shop) => {
    try {
      const formData = new FormData();
      for (const key in newProduct) formData.append(key, newProduct[key]);
      const response = await instance.post(
        `/shop/${shop.id}/product`,
        formData
      );
      this.products.push(response.data);
      shop.products.push({ id: response.data.id });
    } catch (error) {
      console.error(error);
    }
  };

  updateProduct = async (updateProduct) => {
    try {
      const formData = new FormData();
      for (const key in updateProduct) formData.append(key, updateProduct[key]);
      const response = await instance.put(
        `/product/${updateProduct.id}`,
        formData
      );
      const product = this.products.find(
        (product) => product.id === response.data.id
      );
      for (const key in product) product[key] = response.data[key];
    } catch (error) {
      console.error(error);
    }
  };

  getProductById = (productId) =>
    this.products.find((product) => product.id === productId);
}

const productInstens = new ProductStore();
productInstens.fetchproduct();

export default productInstens;
