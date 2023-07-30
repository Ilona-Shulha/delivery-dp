<style scoped lang="scss">
  .logo {
    :hover {
      transition-duration: 5s;
      transform: translateX(90vw);
    }

    &__sign {
      height: 40px;
      width: 58px;
    }
  }
</style>

<template>
  <section class="logo">
    <img class="logo__sign" v-if="!dark.isDarkThemeActive" :src="logo" alt="logo sign"/>
    <img class="logo__sign" v-else :src="logoDark" alt="logo sign dark"/>
  </section>
</template>

<script setup>
  import logo from '../assets/svgs/logo.svg';
  import logoDark from '../assets/svgs/logoDark.svg';
  import { useDarkThemeStore } from "../stores/DarkThemeStore";

  const dark = useDarkThemeStore();
</script>