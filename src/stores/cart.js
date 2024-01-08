import { computed, ref } from "vue";
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
    const delCart = (skuId) =>{
      const index =cartList.value.findIndex(x => x.skuId === skuId)
      cartList.value.splice(index,1)
    }

    const totalPrice =  computed(() =>{
      return cartList.value.reduce((p,c) => p + c.price * c.count,0)
     
    })
    const totalCount =  computed(() =>{
      return cartList.value.reduce((p,c) => p +  c.count,0)
    
   })

    return { cartList,totalPrice,totalCount, addToCart,delCart };
  },
  {
    persist: true,
  }
);
