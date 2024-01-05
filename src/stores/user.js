import { ref } from "vue";
import { defineStore } from "pinia";
import {loginAPI} from '@/api/user'

export const useUserStore = defineStore("user", () => {
  const userInfo = ref({});

  const getUserInfo = async ({account,password}) => {
    const res = await loginAPI({account,password});
    userInfo.value = res.result;
  };

  return { userInfo, getUserInfo };
});