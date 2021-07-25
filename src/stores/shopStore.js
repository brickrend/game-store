import { makeAutoObservable } from "mobx";

import axios from "axios";
import instance from "./instance";

class ShopStore {
  shops = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchshop = async () => {
    try {
      const response = await instance.get("/shop");
      this.shops = response.data;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };

  createShop = async (newShop) => {
    try {
      const formData = new FormData();
      for (const key in newShop) formData.append(key, newShop[key]);
      const response = await instance.post("/shop", formData);
      this.shops.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };
}

const shopInstens = new ShopStore();
shopInstens.fetchshop();

export default shopInstens;
