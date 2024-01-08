import { ref } from "vue";
import { defineStore } from "pinia";
import { loginAPI } from "@/api/user";
import { useCartStore } from "@/stores/cart";
import { mergeCartAPI } from "@/api/cart";

export const useUserStore = defineStore(
  "user",
  () => {
    const cartStore = useCartStore();
    const userInfo = ref({});

    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password });
      userInfo.value = res.result;
      console.log("登录。。。");
      await mergeCartAPI(
        cartStore.cartList.map((item) => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count,
          };
        })
      );
      cartStore.getNewCartList();
    };
    const clearUserInfo = () => {
      userInfo.value = {};
      cartStore.clearCart();
    };

    return { userInfo, getUserInfo, clearUserInfo };
  },
  {
    persist: true,
  }
);
