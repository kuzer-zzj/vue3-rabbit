<script setup>
import HomePanel from "./HomePanel.vue";
import { findNewAPI } from "@/api/home";
import { tryOnMounted } from "@vueuse/core";
import { ref } from "vue";

const newList = ref([]);

const getNewList = async () => {
  const res = await findNewAPI();
  newList.value = res.result;
};
tryOnMounted(() => getNewList());
</script>
<template>
  <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
    <ul class="goods-list">
      <li v-for="item in newList" :key="item.id">
        <RouterLink :to="`/detail/${item.id}`">
          <img :src="item.picture" alt="" />
          <p class="name">{{ item.name }}</p>
          <p class="price">{{ item.price }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
</template>

<style scoped lang="scss">
.goods-list{
    height: 406px;
    display: flex;
    justify-content: space-between;

    li{
        height: 406px;
        width: 306px;
        background: #f0f9f4;
        transition: all 0.5s ;

        &:hover{
            transform: translate3d(0,-3px,0);

            box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
        }
        img{
            height: 306px;
            width: 306px;
        }
        p{
            font-size: 22px;
            padding-top: 12px;
            text-align: center;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        .price{
            color: $priceColor;
        }
    }
}
</style>
