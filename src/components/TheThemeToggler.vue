<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  @import '@/assets/styles/theme-toggler-animation.scss';
  .theme-toggler {
    display: flex;
    justify-content: center;
    align-items: center;
    transition-duration: 300ms;
    overflow: hidden;

    cursor: pointer;

    height: 40px;
    width: 40px;

    border: 1px solid $second-color;

    border-radius: 10px;

    &:hover {
      scale: 1.15;
    }

    &--dark {
      border-color: $border-color-dark;
    }

    &__image {
      width: 30px;
      height: 30px;

      &--dark {
        width: 20px;
        height: 24px;
      }
    }
  }
</style>

<template>
  <TransitionGroup
    name="list"
    tag="div"
    class="theme-toggler"
    :class="darkTheme.isDarkThemeActive ? 'theme-toggler--dark' : ''"
    @click="darkTheme.toggleIsDarkThemeActive"
  >
    <img class="theme-toggler__image" v-if="!darkTheme.isDarkThemeActive" :src="sun" alt="sun sign"/>
    <img class="theme-toggler__image theme-toggler__dark" v-else :src="moon" alt="moon sign"/>
  </TransitionGroup>
</template>

<script setup>
  import { useDarkThemeStore } from "../stores/DarkThemeStore";
  import sun from '../assets/svgs/sun.svg';
  import moon from '../assets/svgs/moon.svg';

  const darkTheme = useDarkThemeStore();
</script>