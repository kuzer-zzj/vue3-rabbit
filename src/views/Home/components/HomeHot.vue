<script setup>
import HomePanel from "./HomePanel.vue";
import { getHotAPI } from "@/api/home";
import { tryOnMounted } from "@vueuse/core";
import { ref } from "vue";

const hotList = ref([]);

const getNewList = async () => {
  const res = await getHotAPI();
  hotList.value = res.result;
};
tryOnMounted(() => getNewList());
</script>
<template>
  <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
    <ul class="goods-list">
      <li v-for="item in hotList" :key="item.id">
        <RouterLink :to="`/detail/${item.id}`">
          <img v-img-load="item.picture"  alt="" />
          <p class="name">{{ item.title }}</p>
          <p class="desc">{{ item.alt }}</p>
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
           
        }
        .desc{
            color: #999;
            font-size: 18px;
        }
    }
}
</style>
