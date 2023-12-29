<script setup>
import { ref } from 'vue'
// 图片列表
const imageList = [
  "https://yanxuan-item.nosdn.127.net/d917c92e663c5ed0bb577c7ded73e4ec.png",
  "https://yanxuan-item.nosdn.127.net/e801b9572f0b0c02a52952b01adab967.jpg",
  "https://yanxuan-item.nosdn.127.net/b52c447ad472d51adbdde1a83f550ac2.jpg",
  "https://yanxuan-item.nosdn.127.net/f93243224dc37674dfca5874fe089c60.jpg",
  "https://yanxuan-item.nosdn.127.net/f881cfe7de9a576aaeea6ee0d1d24823.jpg",
];
const activeIndex =ref(0)
const mouseenterHandler = (i) => {
  console.log('鼠标移入图片下标：',i);
  activeIndex.value = i;
}
</script>

<template>
  <div class="goods-image">
    <div class="middle">
      <img :src="imageList[activeIndex]" alt="" />
      <div class="layer" ></div>
    </div>

    <ul class="small">
      <li v-for="(img,i) in imageList" :key="img" @mouseenter="mouseenterHandler(i)" :class="{active: i===activeIndex}">
        <img  :src="img" alt="">
      </li>
    </ul>

    <div class="large" ></div>
  </div>
</template>

<style scoped lang="scss">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;
  .middle{
    width: 400px;
    height: 400px;
    background: #f5f5f5;
  }
  .layer{
    width: 200px;
    height: 200px;
    background: rgba(0,0,0,.2);
    position:absolute;
    top: 0;
    left: 0;
  }

  .small{
    width: 80px;
    li{
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;

      &:hover,&.active{
        border: 2px solid $xtxColor;
      }
    }
  }
}
</style>
