<script setup>
defineProps({
    title: String,
  subTitle: String,
});
</script>

<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <h3>
          {{ title }} <small>{{ subTitle }}</small>
        </h3>
      </div>

      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-panel {
  background-color: #fff;

  .head {
    padding: 40px 0px;
    display: flex;
    align-items: flex-end;

    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;

      height: 35px;
      line-height: 35px;

      small {
        font-size: 16px;
        margin-left: 20px;
        color: #999;
      }
    }
  }
}
</style>
