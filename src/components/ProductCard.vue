<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  @import '@/assets/styles/_functions.scss';
  .product-card {
    width: #{$card-width}px;
    background-color: $window-color;
    transition-duration: #{$theme-switch-animation}ms;
    box-shadow: 0px 2px 4px 0px #00000040;

    border-radius: 5px;
    overflow: hidden;

    &--dark {
      background-color: $window-color-dark;
      color: $font-color-dark;
    }
    
    &:hover {
      scale: 1.05;
    }

    &__image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      
      margin-bottom: 10px;
    }

    &__text {
      display: block;
      text-align: center;
      margin-bottom: 10px;
    }

    &__phone-block {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 30px;
    }

    &__phone-number {
      $phone-number-size: 15;
      line-height: 30px;
      margin-right: 20px;
      font-size: #{$phone-number-size}px;
      line-height: #{$phone-number-size + 2}px;
    }

    &__phone-wrapper {
      display: flex;
      flex-direction: column;
    }

    &__phone-image {
      margin-right: 6px;
      height: 26px;
      width: 26px;

      &--dark {
        height: 22px;
        width: 22px;
      }
    }

    &__loader {
      $height: 352;
      width: #{$card-width}px;
      padding-left: #{getCenter(250, $loader-size)}px;
      padding-top: #{getCenter($height, $loader-size)}px;
      height: #{$height}px;
    }
  }
</style>

<template>
  <Loader 
    class="product-card__loader"
    v-if="productsStore.isImageLoading"
  />
  <div
    v-else
    class="product-card"
    :class="dark.isDarkThemeActive ? 'product-card--dark' : ''"
  >
    <img :src="imageUrl" class="product-card__image" alt="poduct" />
    <h4 class="product-card__text">{{ product.data().title }}</h4>
    <span class="product-card__text">{{ product.data().price }}</span>
    <div class="product-card__phone-block">
      <img v-if="!dark.isDarkThemeActive" class="product-card__phone-image" :src="phone" alt="phone imge"/>
      <img v-else class="product-card__phone-image product-card__phone-image--dark" :src="phoneDark" alt="phone image dark"/>
      <div class="product-card__phone-wrapper">
        <span class="product-card__phone-number">{{ variables.phones[0] }}</span>
        <span class="product-card__phone-number">{{ variables.phones[1] }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useDarkThemeStore } from "../stores/DarkThemeStore";
  import { useGlobalVariablesStore } from "../stores/GlobalVariables";
  import { useProductsStore } from "../stores/ProductsStore";
  import phone from '../assets/svgs/phone.svg';
  import phoneDark from '../assets/svgs/phoneDark.svg';
  import Loader from './Loader.vue';
  import { onMounted, ref } from "vue";

  const props = defineProps(['product']);
  const variables = useGlobalVariablesStore();
  const dark = useDarkThemeStore();
  const imageUrl = ref('');
  const productsStore = useProductsStore();

  onMounted(async () => imageUrl.value = await productsStore.getImgUrlByName(props.product.data().image));
</script>