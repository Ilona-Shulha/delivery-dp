<style scoped lang="scss">
  .social-media {
    display: flex;
    justify-content: space-around;
    &__sign {
      height: 40px;
      width: 40px;
      cursor: pointer;
      transition-duration: 300ms;

      &:hover {
        scale: 1.1;
      }
    }
  }
</style>

<template>
  <div class="social-media">
    <img
      class="social-media__sign"
      :src="telegram"
      alt="telegram"
      @click="redirectToTelegram"
    />

    <img
      class="social-media__sign"
      :src="viber"
      alt="viber"
      @click="redirectToViber"
    />

    <img
      class="social-media__sign"
      :src="whatsapp"
      alt="whatsapp"
      @click="redirectToWhatsApp"
    />

    <!-- <img
      class="social-media__sign"
      :src="instagram"
      alt="instagram"
      @click="redirectToInstagram"
    /> -->
  </div>
</template>

<script setup>
  import telegram from '../assets/svgs/telegram.svg';
  import viber from '../assets/svgs/viber.svg';
  import whatsapp from '../assets/svgs/whatsapp.svg';
  import instagram from '../assets/svgs/instagram.svg';
  import { useGlobalVariablesStore } from "../stores/GlobalVariables";

  const { phoneNumber, instagramUsername } = useGlobalVariablesStore().social;

  const redirectToTelegram = () => window.location.href = `https://t.me/${phoneNumber}`;
  const redirectToViber = () => window.location.href =`viber://chat?number=${phoneNumber}`;
  const redirectToWhatsApp = () => window.location.href =`https://wa.me/${phoneNumber}`;
  const redirectToInstagram = () => window.location.href =`https://www.instagram.com/${instagramUsername}/`;
</script>