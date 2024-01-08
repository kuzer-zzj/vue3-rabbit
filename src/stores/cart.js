import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { useUserStore } from "./user";
import {insertCartAPI,getCartAPI,delCartAPI} from '@/api/cart'

export const useCartStore = defineStore(
  "cart",
  () => {
    const userStore = useUserStore();
    const isLogin = computed(() => userStore.userInfo.token);
    const cartList = ref([]);

    const getNewCartList = async () => {
      const res = await getCartAPI()
      cartList.value = res.result
      console.log('登录。。。刷新购物车');
    }

    const addToCart =async (item) => {
      const { skuId, count} =item
      if (isLogin.value) {
         await insertCartAPI({skuId,count})
         getNewCartList()
      } else {
        const findOne = cartList.value.find((x) => x.skuId === item.skuId);
        if (findOne) {
          findOne.count++;
        } else {
          cartList.value.push(item);
        }
      }
    };
    const delCart = (skuId) => {
      if(isLogin.value){
        delCartAPI([skuId])
        getNewCartList()

      }else{
        const index = cartList.value.findIndex((x) => x.skuId === skuId);
        cartList.value.splice(index, 1);
      }
    
    };

    const clearCart =()=>{
      cartList.value=[]
    }

    const totalPrice = computed(() => {
      return cartList.value.reduce((p, c) => p + c.price * c.count, 0);
    });
    const totalCount = computed(() => {
      return cartList.value.reduce((p, c) => p + c.count, 0);
    });
    const selectedTotalPrice = computed(() => {
      return cartList.value
        .filter((item) => item.selected)
        .reduce((p, c) => p + c.price * c.count, 0);
    });
    const selectedTotalCount = computed(() => {
      return cartList.value
        .filter((item) => item.selected)
        .reduce((p, c) => p + c.count, 0);
    });
    const isAllChecked = computed(() =>
      cartList.value.every((x) => x.selected)
    );

    const singleCheck = (skuId, isChecked) => {
      cartList.value.find((x) => x.skuId === skuId).selected = isChecked;
    };

    const allCheck = (isChecked) => {
      cartList.value.forEach((x) => (x.selected = isChecked));
    };

    return {
      cartList,
      totalPrice,
      totalCount,
      isAllChecked,
      selectedTotalPrice,
      selectedTotalCount,
      getNewCartList,
      clearCart,
      addToCart,
      delCart,
      singleCheck,
      allCheck,
    };
  },
  {
    persist: true,
  }
);
