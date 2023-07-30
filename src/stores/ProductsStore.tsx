import { ref } from "vue";
import { defineStore } from 'pinia'
import db from '../firebase/init.js';
import { 
  collection,
  getDocs,
  orderBy,
  limit,
  query,
} from "firebase/firestore";

import {
  getStorage,
  ref as storageRef,
  getDownloadURL
} from 'firebase/storage';

export const useProductsStore = defineStore('ProductsStore', () => {
  const allProducts = ref({});
  const isImageLoading = ref(false);

  const getAllProducts = async () => {
    const q = query(
      collection(db, "products"),
      orderBy('price', 'asc'),
      limit(15),
    );

    try {
      const response = await getDocs(q);
      allProducts.value = response.docs;
    } catch (error) {
      console.log(error);
    }
  };

  const getImgUrlByName = async (name: string) => {
    isImageLoading.value = true;
    const storage = getStorage();
    const storageReference = storageRef(storage, `images/${name}`);
    let url = '';
    try {
      url = await getDownloadURL(storageReference);
    } catch (error) {
      console.log(error);
      return;
    }

    isImageLoading.value = false;
    return url;
  }


  return {
    allProducts,
    getAllProducts,
    getImgUrlByName,
    isImageLoading,
  }
});
