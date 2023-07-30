import { defineStore } from 'pinia'

export const useGlobalVariablesStore = defineStore('GlobalVariablesStore', () => {
  const companyName = 'ФОП Мінін Сергій Валентинович';
  const address = 'м. Дніпро, Україна';

  const phones = ['+38 (095) 579 86 40', '+38 (097) 428 29 26'];

  const social = {
    phoneNumber: '+380974282926',
    instagramUsername: 'instagram',
  };

  return {
    companyName,
    address,
    phones,
    social,
  }
});