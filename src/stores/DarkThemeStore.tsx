import { ref, watch } from "vue";
import { defineStore } from 'pinia'

export const useDarkThemeStore = defineStore('DarkThemeStore', () => {
  const isDarkThemeActive = ref(true);
  const toggleIsDarkThemeActive = () => isDarkThemeActive.value = !isDarkThemeActive.value;

  watch(
    () =>isDarkThemeActive,
    (state) => {
      localStorage.setItem("isDarkThemeActive", JSON.stringify(state.value))
    },
    { deep: true }
  );

  const isDarkThemeActiveInLocalStorage = localStorage.getItem("isDarkThemeActive");
  if (isDarkThemeActiveInLocalStorage) {
    isDarkThemeActive.value = JSON.parse(isDarkThemeActiveInLocalStorage);
  };

  return {
    isDarkThemeActive,
    toggleIsDarkThemeActive,
  }
});