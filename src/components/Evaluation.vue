<style scoped lang="scss">
  @import '@/assets/styles/_mixins.scss'; 
  .evaluation {
    display: flex;

    .evaluation__star:last-of-type {
      margin-right: 15px;

      @include onMobile {
        margin-right: 5px;
      }
    }

    &__star {
      height: 25px;
      width: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__text {
      line-height: 25px;
    }
  }
</style>

<template>
  <div class="evaluation">
    <div 
      class="evaluation__star"
      v-for="index in 5"
      :key="index"
    >
      <img v-if="stars >= index" :src="starActive" alt="star-active"/>
      <img v-else-if="dark.isDarkThemeActive" :src="starInactive" alt="star-inactive"/>
      <img v-else :src="starInactiveFrame" alt="star-inactive"/>
    </div>

    <span class="evaluation__text">{{ evaluation }}</span>
  </div>
</template>

<script setup>
  import starActive from '../assets/svgs/starActive.svg';
  import starInactive from '../assets/svgs/starInactive.svg';
  import starInactiveFrame from '../assets/svgs/starInactiveFrame.svg';
  import { useDarkThemeStore } from "../stores/DarkThemeStore";

  const dark = useDarkThemeStore();
  const props = defineProps({
    stars: {
      type: Number,
      required: true
    },
  });

  let evaluation = '';

  switch (props.stars) {
    case 1:
      evaluation = 'Дуже погано';
      break;

    case 2:
      evaluation = 'Погано';
      break;

    case 3:
      evaluation = 'Нормально';
      break;

    case 4:
      evaluation = 'Дуже добре';
      break;

    case 5:
      evaluation = 'Відмінно';
      break;

    default:
      break;
  }
</script>