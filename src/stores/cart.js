import { ref } from "vue";
import { defineStore } from "pinia";


export const useCartStore = defineStore(
  "cart",
  () => {
    const cartList = ref([]);

    const addToCart = (item) => {
        const findOne =cartList.value.find(x => x.skuId === item.skuId)
        if(findOne){
            findOne.count++
        }else{
            cartList.value.push(item);
        }
    }

    return { cartList, addToCart };
  },
  {
    persist: true,
  }
);
