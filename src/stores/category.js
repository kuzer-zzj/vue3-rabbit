import { ref } from "vue";
import { defineStore } from "pinia";
import { categoryReq } from "@/api/layout";

export const useCategoryStore = defineStore("category", () => {
  const categoryList = ref([]);

  const getCategoryList = async () => {
    const res = await categoryReq();
    categoryList.value = res.result;
  };

  return { categoryList, getCategoryList };
});
