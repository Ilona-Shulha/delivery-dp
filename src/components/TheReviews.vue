<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  @import '@/assets/styles/_mixins.scss';

  .reviews {
    display: flex;
    flex-direction: column;

    height: fit-content;

    margin-bottom: 150px;

    transition-duration: #{$theme-switch-animation}ms;

    &__title {
      text-align: center;
      margin-bottom: 30px;

      @include onMobile {
        font-size: 16px;
        margin-bottom: 20px;
      }
    }

    &--dark {
      color: $font-color-dark;
    }

    &__review{
      &:hover {
        scale: 1.015;
      }
    }
  }
</style>

<template>
  <div
    class="reviews"
    :class="dark.isDarkThemeActive ? 'reviews--dark' : ''"
  >
    <h2 class="reviews__title">Відгуки про компанію {{ variables.companyName }}</h2>
      <FeedbackForm/>
      <ReviewCard
        class="reviews__review"
        v-for="reviewData in reviewsStore.allReviews"
        :reviewData="reviewData"
        :key="reviewData.id"
      />
  </div>
</template>

<script setup> 
  import ReviewCard from './ReviewCard.vue'
  import { useGlobalVariablesStore } from "../stores/GlobalVariables";
  import { useReviewsStore } from "../stores/ReviewsStore";
  import { useDarkThemeStore } from "../stores/DarkThemeStore";
  import FeedbackForm from './FeedbackForm.vue'
  
  const dark = useDarkThemeStore();
  const variables = useGlobalVariablesStore();
  const reviewsStore = useReviewsStore()

  reviewsStore.getAllReviews();
</script>