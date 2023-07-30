<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  @import '@/assets/styles/_mixins.scss';

  .main {
    background-color: $primary-color;
    min-height: 100vh;
    transition-duration: #{$theme-switch-animation}ms;

    &--dark {
      background-color: $primary-color-dark;
    }

    &__header {
      margin-bottom: 30px;
    }

    &__sidebar {
      margin-right: #{$main-page-margin}px;
      width: 250px;

      @include onMobile {
        margin: 0 auto 20px;
      }
    }

    &__page {
      display: flex;
      margin: 0 #{$main-page-margin}px;

      @include onMobile {
        flex-direction: column;
        margin: 0;
      }
    }

    &__content {
      flex-grow: 1;

      @include onMobile {
        width: min-content;
        margin: 0 auto 120px;
      }
    }

    &__about {
      width: 85vh;

      @include onMobile {
        width: 250px;
        margin: 0 auto 120px;
      }
    }
  }
</style>

<template>
  <main
    class="main"
    :class="dark.isDarkThemeActive ? 'main--dark' : ''"
  >
    <TheHeader class="main__header"/>
      <section class="main__page">
        <TheSidebar
          class="main__sidebar"
          @setCurrentPage="setCurrentPage"
          :currentPage="currentPage"
        />
        <TheMainLayout class="main__content" v-if="currentPage === 'main'"/>
        <TheAboutUs class=" main__about" v-if="currentPage === 'about'"/>
        <TheRequisites class="main__content" v-if="currentPage === 'requisites'"/>
        <TheReviews class="main__content" v-if="currentPage === 'reviews'"/>
      </section>
  </main>
  <TheFooter/>
</template>

<script setup>
  import TheHeader from './components/TheHeader.vue';
  import TheFooter from './components/TheFooter.vue';
  import TheSidebar from './components/TheSidebar.vue';
  import TheMainLayout from './components/TheMainLayout.vue';
  import TheAboutUs from './components/TheAboutUs.vue';
  import TheReviews from './components/TheReviews.vue';
  import TheRequisites from './components/TheRequisites.vue';
  import { useDarkThemeStore } from "./stores/DarkThemeStore";
  import { ref, onMounted } from 'vue';
  import { event } from 'vue-gtag'


  const currentPage = ref('main');
  const dark = useDarkThemeStore();

  const setCurrentPage = (page) => currentPage.value = page;
  const login = () => event('login', { method: 'Google' });

  onMounted(() => login());
</script>
