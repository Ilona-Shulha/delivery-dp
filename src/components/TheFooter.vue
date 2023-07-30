<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  @import '@/assets/styles/_mixins.scss';
  .footer {
    height: #{$footer-header-height}px;
    width: 100%;
    box-shadow: 0px 0px 4px 4px #00000040;
    display: flex;
    justify-content: space-between;
    background-color: $window-color;
    z-index: 2;

    transition-duration: #{$theme-switch-animation}ms;

    position: fixed;
    bottom: 0;

    @include onMobile {
      height: #{$footer-header-height - 20}px;
    }

    &--dark {
      background-color: $window-color-dark;
      color: $font-color-dark;
    }

    &__about-company {
      display: flex;
      margin-left: 100px;

      @include onMobile {
        margin-left: 20px;
      }
    }

    &__company-name {
      display: block;
      margin: auto 0;
    }

    &__logo {
      margin: auto 10px auto 0;
    }

    &__copyright {
      line-height: #{$footer-header-height}px;
      margin-right: 100px;

      @include onMobile {
        display: none;
      }
    }
  }
</style>

<template>
  <footer
    class="footer"
    :class="dark.isDarkThemeActive ? 'footer--dark' : ''"
  >
    <section class="footer__about-company">
      <TheLogo class="footer__logo"/>
      <span class="footer__company-name">
        Ваші вантажі – наші висоти!
      </span>
    </section>

    <span class="footer__copyright">Copyright © 2023. All Rights Reserved</span>
  </footer>
</template>

<script setup>
  import TheLogo from './TheLogo.vue'
  import { useDarkThemeStore } from "../stores/DarkThemeStore";

  const dark = useDarkThemeStore();
</script>