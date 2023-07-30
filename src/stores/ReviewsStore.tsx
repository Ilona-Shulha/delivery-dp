import { ref } from "vue";
import { defineStore } from 'pinia'
import db from '../firebase/init.js';
import {
  collection,
  getDocs,
  addDoc,
  orderBy,
  limit,
  query,
} from "firebase/firestore";

export const useReviewsStore = defineStore('ReviewsStore', () => {
  const allReviews = ref({});

  const getAllReviews = async () => {
    const q = query(
      collection(db, "reviews"),
      orderBy('queryDate', 'desc'),
      limit(15),
    );

    try {
      const response = await getDocs(q);
      allReviews.value = response.docs;
    } catch(error) {
      console.log(error);
    }
  };

  const createReview = async (review) => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    review.date = `${day}.${month}.${year}`;
    review.queryDate = +`${year}${month}${day}`;

    const colRef = collection(db, 'reviews');

    await addDoc(colRef, review);
    await getAllReviews();
  };

  return {
    allReviews,
    getAllReviews,
    createReview,
  }
});
