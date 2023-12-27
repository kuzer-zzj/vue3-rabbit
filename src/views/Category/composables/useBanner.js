import { ref, onMounted } from "vue";
import { bannerListReq } from "@/api/home";
export const useBanner = () => {
  const bannerList = ref([]);

  const getBannerList = async () => {
    const res = await bannerListReq({ distributionSite: "2" });
    console.log(res);
    bannerList.value = res.result;
  };

  //dom加载结束调用getBannerList()
  onMounted(() => getBannerList());
  return { bannerList };
};
