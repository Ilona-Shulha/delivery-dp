<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  @import '@/assets/styles/_mixins.scss';
  .sidebar {
    background-color: $window-color;
    height: min-content;
    
    display: flex;
    flex-direction: column;

    transition-duration: #{$theme-switch-animation}ms;

    border-radius: 5px;

    button:first-of-type {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }

    button:last-of-type {
      margin-bottom: 30px;
    }

    &--dark {
      background-color: $window-color-dark;
      color: $font-color-dark;
    }

    &__button {
      height: 50px;
      width: 250px;
      border: 1px solid $border-color;
      background-color: rgba(0, 0, 0, 0);
      font-family: inherit;
      
      display: flex;
      justify-content: space-between;

      cursor: pointer;

      transition-duration: #{$theme-switch-animation}ms;

      &--dark {
        color: $font-color-dark;
        border-color: $border-color-dark;
      }

      &--active {
        background-color: $second-color;

        &--dark {
          background-color: $second-color-dark;
        }
      }
    }

    &__button-text {
      display: flex;
      height: 100%;
      align-items: center;

      margin-left: 15px;
    }

    &__more-sign {
      margin: auto 20px auto 0;
      height: 19px;
      width: 10px;
      
      @include onMobile {
        transform: rotate(90deg);
      }
    }

    &__description-block {
      margin-left: 20px;
      margin-bottom: 30px;
    }

    &__description-title {
      margin-bottom: 15px;
    }

    &__phone {
      display: block;
    }

    &__contacts {
      display: none;

      @include onMobile {
        display: block;
      }
    }

    &__social {
      margin-bottom: 30px;
    }
  }
</style>

<template>
  <div
    class="sidebar"
    :class="dark.isDarkThemeActive ? 'sidebar--dark' : ''"
  >
    <button
      @click="$emit('setCurrentPage', 'main')"
      class="sidebar__button"
      :class="[
        currentPage === 'main' ? 'sidebar__button--active' : '',
        dark.isDarkThemeActive ? 'sidebar__button--dark' : '',
        dark.isDarkThemeActive && currentPage === 'main' ? 'sidebar__button--active--dark' : '',
      ]"
    >
      <span class="sidebar__button-text">Що ми маємо</span>
      <img class="sidebar__more-sign" v-if="currentPage === 'main' && !dark.isDarkThemeActive" :src="moreSign" alt="sign arrow"/>
      <img class="sidebar__more-sign" v-if="currentPage === 'main' && dark.isDarkThemeActive" :src="moreSignDark" alt="sign arrow dark"/>
    </button >

    <button
      :class="[
        currentPage === 'about' ? 'sidebar__button--active' : '',
        dark.isDarkThemeActive ? 'sidebar__button--dark' : '',
        dark.isDarkThemeActive && currentPage === 'about' ? 'sidebar__button--active--dark' : '',
      ]"
      @click="$emit('setCurrentPage', 'about')"
      class="sidebar__button"
    >
      <span class="sidebar__button-text">Про нас</span>
      <img class="sidebar__more-sign" v-if="currentPage === 'about' && !dark.isDarkThemeActive" :src="moreSign" alt="sign arrow"/>
      <img class="sidebar__more-sign" v-if="currentPage === 'about' && dark.isDarkThemeActive" :src="moreSignDark" alt="sign arrow dark"/></button>

    <button
      :class="[
        currentPage === 'requisites' ? 'sidebar__button--active' : '',
        dark.isDarkThemeActive ? 'sidebar__button--dark' : '',
        dark.isDarkThemeActive && currentPage === 'requisites' ? 'sidebar__button--active--dark' : '',
      ]"
      @click="$emit('setCurrentPage', 'requisites')"
      class="sidebar__button"
    >
      <span class="sidebar__button-text">Реквізити</span>
      <img class="sidebar__more-sign" v-if="currentPage === 'requisites' && !dark.isDarkThemeActive" :src="moreSign" alt="sign arrow"/>
      <img class="sidebar__more-sign" v-if="currentPage === 'requisites' && dark.isDarkThemeActive" :src="moreSignDark" alt="sign arrow dark"/>
    </button>

    <button
      :class="[
        currentPage === 'reviews' ? 'sidebar__button--active' : '',
        dark.isDarkThemeActive ? 'sidebar__button--dark' : '',
        dark.isDarkThemeActive && currentPage === 'reviews' ? 'sidebar__button--active--dark' : '',
      ]"
      @click="$emit('setCurrentPage', 'reviews')"
      class="sidebar__button"
    >
      <span class="sidebar__button-text">Відгуки</span>
      <img class="sidebar__more-sign" v-if="currentPage === 'reviews' && !dark.isDarkThemeActive" :src="moreSign" alt="sign arrow"/>
      <img class="sidebar__more-sign" v-if="currentPage === 'reviews' && dark.isDarkThemeActive" :src="moreSignDark" alt="sign arrow dark"/>
    </button>

    <div class="sidebar__description-block">
      <h3 class="sidebar__description-title">Компанія</h3>
      <span class="sidebar__description-text">{{ variables.companyName }}</span>
    </div>

    <div class="sidebar__description-block">
      <h3 class="sidebar__description-title">Адреса</h3>
      <span class="sidebar__description-text">{{ variables.address }}</span>
    </div>

    <div class="sidebar__description-block sidebar__contacts">
      <h3 class="sidebar__description-title">Контакти</h3>
      <span class="sidebar__description-text sidebar__phone">{{ variables.phones[0] }}</span>
      <span class="sidebar__description-text sidebar__phone">{{ variables.phones[1] }}</span>
    </div>
    <SocialMediaBlock class="sidebar__social"/>
  </div>
</template>

<script setup>
  import SocialMediaBlock from './SocialMediaBlock.vue';
  import { useGlobalVariablesStore } from "../stores/GlobalVariables";
  import moreSign from '../assets/svgs/moresign.svg';
  import moreSignDark from '../assets/svgs/moreSignDark.svg';
  import { useDarkThemeStore } from "../stores/DarkThemeStore";

  const dark = useDarkThemeStore();
  const variables = useGlobalVariablesStore();

  defineEmits(['setCurrentPage']);
  defineProps(['currentPage']);
</script>