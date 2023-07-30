<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  .requisites {
    padding: 20px;
    background-color: $window-color;
    box-shadow: 0px 2px 4px 0px #00000040;
    height: fit-content;
    transition-duration: #{$theme-switch-animation}ms;

    border-radius: 5px;

    &--dark {
      background-color: $window-color-dark;
      color: $font-color-dark;
    }

    &__text {
      display: block;
      margin-bottom: 10px;
      text-align: center;
    }
  }
</style>

<template>
  <div
    class="requisites"
    :class="dark.isDarkThemeActive ? 'requisites--dark' : ''"
  >
    <h4 class="requisites__text">ФОП Мінін Сергій Валентинович</h4>
    <span class="requisites__text">2787711015</span>
    <span class="requisites__text">АТ КБ "Приватбанк"</span>
    <span class="requisites__text">UA 163052990000026007050580231</span>
    <span class="requisites__text">UAH</span>
  </div>
</template>

<script setup> 
  import { useDarkThemeStore } from "../stores/DarkThemeStore";

  const dark = useDarkThemeStore();
</script>