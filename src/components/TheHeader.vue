<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  @import '@/assets/styles/_mixins.scss';
  
  .header {
    height: #{$footer-header-height}px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 4px 4px 0px #00000040;
    background-color: $window-color;
    transition-duration: #{$theme-switch-animation}ms;

    @include onMobile {
      height: #{$footer-header-height - 20}px;
    }

    &--dark {
      background-color: $window-color-dark;
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
      transition-duration: #{$theme-switch-animation}ms;
      
      &--dark {
        color: $font-color-dark;
      }
    }

    &__logo {
      margin: auto 10px auto 0;
    }

    &__phone-block {
      display: flex;
      align-items: center;
      margin: auto 100px auto 0;

      @include onMobile {
        margin-right: 20px;
      }
    }

    &__phone-image {
      margin-right: 20px;
      width: 26px;
      height: 26px;

      @include onMobile {
        display: none;
      }

      &--dark {
        width: 22px;
        height: 22px;
      }
    }

    &__phone-text {
      $phone-number-size: 16;
      line-height: 30px;
      margin-right: 20px;
      font-size: #{$phone-number-size}px;
      line-height: #{$phone-number-size + 2}px;
      transition-duration: #{$theme-switch-animation}ms;

      &--dark {
        color: $font-color-dark;
      }
    }

    &__phones-wrapper {
      display: flex;
      flex-direction: column;

      @include onMobile {
        display: none;
      }
    }
  }
</style>

<template>
  
  <header 
    class="header"
    :class="dark.isDarkThemeActive ? 'header--dark' : ''"
  >
    <section class="header__about-company">
      <TheLogo class="header__logo"/>
      <span
        class="header__company-name"
        :class="dark.isDarkThemeActive ? 'header__company-name--dark' : ''"
      >
        {{ variables.companyName }}
      </span>
    </section>

    <section class="header__phone-block">
      <img v-if="!dark.isDarkThemeActive" class="header__phone-image" :src="phone" alt="phone sign"/>
      <img v-else class="header__phone-image header__phone-image--dark" :src="phoneDark" alt="phone sign dark"/>
        <div class="header__phones-wrapper">
          <span
            class="header__phone-text"
            :class="dark.isDarkThemeActive ? 'header__phone-text--dark' : ''"
          >
            {{ variables.phones[0] }}
          </span>
          <span
            class="header__phone-text"
            :class="dark.isDarkThemeActive ? 'header__phone-text--dark' : ''"
          >
            {{ variables.phones[1] }}
          </span>
        </div>
      <TheThemeToggler/>
    </section>
  </header>
</template>

<script setup>
  import TheLogo from './TheLogo.vue'
  import phone from '../assets/svgs/phone.svg';
  import phoneDark from '../assets/svgs/phoneDark.svg';
  import TheThemeToggler from './TheThemeToggler.vue'
  import { useGlobalVariablesStore } from "../stores/GlobalVariables";
  import { useDarkThemeStore } from "../stores/DarkThemeStore";

  const dark = useDarkThemeStore();
  const variables = useGlobalVariablesStore();
</script>