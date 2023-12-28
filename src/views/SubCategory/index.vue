<script setup>
import { onMounted, ref } from 'vue';
import {getCategoryFilterAPI} from '@/api/category'
import {useRoute} from 'vue-router'

const route =useRoute()
const categoryData = ref({})
const getCategoryFilter =async ()=>{
  const res =await getCategoryFilterAPI(route.params.id)
  categoryData.value = res.result
}

onMounted(()=>getCategoryFilter())
</script>

<template>
  <div class="container">
    <div class="bread-container">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>

        <el-breadcrumb-item :to="{ path: `/category/${categoryData.parentId}` }">{{categoryData.parentName}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs >
        <el-tab-pane label="最新商品" name="publishTime">User</el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum">Config</el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum">Role</el-tab-pane>
      </el-tabs>
      <div class="body">商品</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bread-container{
  padding: 25px 0;
  color: #666;
}
.sub-container{
  padding: 20px 10px;
  background: #fff;
  .body{
    display: flex;

  }
}
</style>
