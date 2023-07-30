<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  .main-layout {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    margin-bottom: 150px;
  }
</style>

<template>
  <div class="main-layout">
    <div v-for="product, index in productsStore.allProducts">
      <ProductCard :product="product" :key="index"/>
    </div>
  </div>
</template>

<script setup>
  import ProductCard from './ProductCard.vue'
  import { useProductsStore } from "../stores/ProductsStore";

  const productsStore = useProductsStore()
  productsStore.getAllProducts();
</script>