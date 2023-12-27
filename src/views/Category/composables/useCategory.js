import {onBeforeRouteUpdate}  from 'vue-router'
import { getTopCategoryAPI } from "@/api/category";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

export const useCategory = () => {
    const categoryData = ref({});
const route = useRoute();
const getCategory = async (id=route.params.id) => {
  const res = await getTopCategoryAPI(id);
  categoryData.value = res.result;
};

onMounted(() => getCategory());

onBeforeRouteUpdate((to) =>{
  getCategory(to.params.id);
})
return { categoryData };
}