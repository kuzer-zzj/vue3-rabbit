<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutFixd from "./components/LayoutFixd.vue";
import { useCategoryStore } from "@/stores/category";
import { onMounted } from "vue";

const categoryStore = useCategoryStore();
onMounted(() => categoryStore.getCategoryList());
</script>

<template>
  <LayoutFixd></LayoutFixd>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <!-- <RouterView :key="$route.fullPath"/> -->
  <LayoutFooter />
</template>
