<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  @import '@/assets/styles/_mixins.scss';
  @import '@/assets/styles/_placeholders.scss';
  @import '@/assets/styles/_keyframes.scss';
  @import '@/assets/styles/_functions.scss';
  @import '@/assets/styles/smooth-animation.scss';
  .feedback-form {
    &__page {
      position: relative;
      height: 292px;
      margin-bottom: 30px;
    }

    width: 100%;
    position: absolute;
    box-shadow: 0px 2px 4px 0px #00000040;
    padding: 15px;
    transition-duration: #{$theme-switch-animation}ms;

    background-color: $window-color;

    border-radius: 5px;

    &__thanks {
      width: 100%;
      position: absolute;
      background-color: $window-color;
      height: 292px;
      border-radius: 5px;
      margin-bottom: 30px;
      z-index: 1;
      box-shadow: 0px 2px 4px 0px #00000040;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &--dark {
        background-color: $window-color-dark;
      }

      @include onMobile {
        height: 288px;
      }
    }

    @include onMobile {
      width: 250px;
    }

    &--dark {
      background-color: $window-color-dark;
      color: $font-color-dark;
    }
    
    &__title {
      display: block;
      margin: 0 auto;
      width: max-content;

      margin-bottom: 10px;

      &--short::before {
        content: get-title("short");
        @extend %color-danger;
      }

      &--long::before {
        content: get-title("long");
        @extend %color-danger;
      }

      &--grade::before {
        content: get-title("grade");
        @extend %color-danger;
      }

      &--short-comment::before {
        content: get-title("short-comment");
        @extend %color-danger;
      }

      &--long-comment::before {
        content: get-title("long-comment");
        @extend %color-danger;
      }

      &--no-errors::before {
        content: get-title("default");
      }

      @include onTablet {
        font-size: 18px;
      }

      @include onMobile {
        font-size: 16px;
      }
    }

    &__input {
      @extend %default-block;
      padding-left: 10px;
      white-space: pre-wrap;
      transition-duration: 300ms;

      &--danger {
        border-color: $danger-color;
      }

      &--dark {
        @extend %default-dark;

        &::placeholder {
          color: $font-color-dark-placholder;
        }
      }
    }

    &__input-name {
      height: 40px;
      margin-bottom: 10px;
    }

    &__input-text {
      height: 75px;
      margin-bottom: 10px;
    }

    &__star {
      transition-duration: 300ms;
      width: 25px;
      height: 25px;
      
      &:hover {
        scale: 1.2;
      }
    }

    &__submit-button {
      font-size: 18px;
      display: block;
      margin: 0 auto;
      border-radius: 5px;
      transition-duration: 300ms;
      
      height: 50px;
      width: 250px;

      background-color: $second-color;

      @include onMobile {
        width: 100%;
      }

      &--dark {
        background-color: $second-color-dark;
        color: $font-color-dark;
        border-color: $border-color-dark;
      }

      &:hover {
        scale: 1.05;
      }
    }

    &__wrapper {
      display: flex;
    }

    &__right-wrapper {
      width: 50%;
      display: flex;
      align-items: center;

      position: relative;
      overflow: hidden;

      @include onMobile {
        display: none;
      }
    }

    &__grade-wrapper {
      width: max-content;
      margin: 0 auto;
      border-radius: 5px;
      padding: 3px;
      outline: transparent;
      transition-duration: 300ms;

      .feedback-form__star-wrapper:last-of-type {
        margin-right: 0;
      }

      &--danger {
        outline: 1px solid $danger-color;
      }
    }

    &__left-wrapper {
      display: flex;
      flex-direction: column;
      width: 50%;

      margin-bottom: 10px;

      @include onMobile {
        width: 100%;
      }
    }

    &__car {
      width: 58px;
      height: 38px;

      position: absolute;
      animation: slideRight 4s linear infinite;
    }

    &__star-wrapper {
      margin-right: 5px;
    }

    &__short-name {
      @extend %default-block;
      height: 40px;
      text-align: center;
      line-height: 40px;
      margin-bottom: 10px;

      &--dark {
        @extend %default-dark;
      }
    }

    &__check-mark {
      height: 48px;
      width: 48px;

      margin-bottom: 30px;
    }
  }
</style>

<template>
  <TransitionGroup
    class="feedback-form__page"
    tag="div"
    name="smooth"
  >
    <form
    v-if="!thanksBlock"
    class="feedback-form"
    @submit.prevent="submit"
    :class="dark.isDarkThemeActive ? 'feedback-form--dark' : ''"
  >
    <div class="feedback-form__wrapper">
      <div class="feedback-form__left-wrapper">
        <h3 
          class="feedback-form__title"
          :class="[
            errors.shortName ? 'feedback-form__title--short' : '',
            errors.longName ? 'feedback-form__title--long' : '',
            errors.noStars ? 'feedback-form__title--grade' : '',
            errors.shortComment ? 'feedback-form__title--short-comment' : '',
            errors.longComment ? 'feedback-form__title--long-comment' : '',
            noErrors ? 'feedback-form__title--no-errors' : '',
          ]"
        >
        </h3>

        <input
          class="feedback-form__input feedback-form__input-name"
          :class="[
            dark.isDarkThemeActive ? 'feedback-form__input--dark' : '',
            errors.shortName ? 'feedback-form__input--danger' : '',
          ]"
          v-model="review.name"
          type="text"
          placeholder="Ім'я"
        >

        <div 
          class="feedback-form__grade-wrapper"
          :class="errors.noStars ? 'feedback-form__grade-wrapper--danger' : ''"
        >
          <span
            class="feedback-form__star-wrapper"
            v-for="star in 5"
            :key="star"
            @click="selectGrade(star)"
          >
            <img v-if="star < review.grade + 1" :src="starActive" alt="star-active" class="feedback-form__star" />
            <img v-else-if="dark.isDarkThemeActive" :src="starInactive" alt="star-inactive" class="feedback-form__star" />
            <img v-else :src="starInactiveFrame" alt="star-inactive" class="feedback-form__star" />
          </span>
        </div>
      </div>

      <div class="feedback-form__right-wrapper">
        <img
          :src="dark.isDarkThemeActive ? carWhite : carBlack"
          alt="car" 
          class="feedback-form__car"
        >
      </div>
    </div>

    <input
      class="feedback-form__input-text feedback-form__input"
      :class="[
        dark.isDarkThemeActive ? 'feedback-form__input--dark' : '',
        errors.shortComment || errors.longComment ? 'feedback-form__input--danger' : '',
      ]"
      type="text"
      placeholder="Відгук"
      v-model="review.review"
    >

    <button
      class="feedback-form__submit-button"
      type="submit"
      :class="dark.isDarkThemeActive ? 'feedback-form__submit-button--dark' : ''"
    >
      Надіслати відгук
    </button>
    </form>

    <div
      v-else
      class="feedback-form__thanks"
      :class="dark.isDarkThemeActive ? 'feedback-form__thanks--dark' : ''"
    >
      <img :src="checkMark" alt="check-mark" class="feedback-form__check-mark" />
      <h4>Дякуємо за Ваш відгук!</h4>
    </div>
  </TransitionGroup>

</template>

<script setup>
  import { ref, computed, watch } from 'vue';
  import starActive from '../assets/svgs/starActive.svg';
  import checkMark from '../assets/svgs/checkMark.svg';
  import starInactive from '../assets/svgs/starInactive.svg';
  import carWhite from '../assets/svgs/carWhite.svg';
  import carBlack from '../assets/svgs/carBlack.svg';
  import { useDarkThemeStore } from "../stores/DarkThemeStore";
  import starInactiveFrame from '../assets/svgs/starInactiveFrame.svg';
  import { useReviewsStore } from "../stores/ReviewsStore";

  const reviewsStore = useReviewsStore();

  const dark = useDarkThemeStore();

  const errors = ref({
    shortName: false,
    longName: false,
    noStars: false,
    shortComment: false,
    longComment: false,
  });

  const thanksBlock = ref(false);

  const noErrors = computed(() => {
    for (const error in errors.value) {
      if (errors.value[error]) {
        return false;
      }
    }

    return true;
  });

  const review = ref({
    name: '',
    grade: 0,
    review: '',
  });
  
  const submit = () => {
    if (review.value.name.length < 3) {
      errors.value.shortName = true;
      return;
    }

    if (review.value.grade === 0) {
      errors.value.noStars = true;
      return;
    }

    if (review.value.review.length < 10) {
      errors.value.shortComment = true;
      return;
    }
    
    reviewsStore.createReview(review.value);

    review.value.name = '';
    review.value.review = '';
    review.value.grade = 0;

    thanksBlock.value = true;
  }
  
  const selectGrade = (value) => review.value.grade = value;

  watch(
      () => errors,
      (state) => {
        for (const error in errors.value) {
          if (errors.value[error]) {
            setTimeout(() => errors.value[error] = false, 3000)
          }
        }
      },
      { deep: true },
  );

  watch(
      () => review.value.name,
      (state) => {
        if (review.value.name.length > 25) {
          errors.value.longName = true;
          review.value.name = review.value.name.slice(0, 25);
        }
      },
  );

  watch(
      () => review.value.review,
      (state) => {
        if (review.value.review.length > 1500) {
          errors.value.longComment = true;
          review.value.review = review.value.review.slice(0, 1500);
        }
      },
  );

  watch(
      () => thanksBlock.value,
      (state) => {
        if (thanksBlock.value) {
          setTimeout(() => thanksBlock.value = false, 5000);
        }
      },
  );
</script>
