import http from "@/utils/http";

export const bannerListReq =() => http({
    url: 'home/banner'
  })

  
export const findNewAPI =() => http({
    url: '/home/new'
  })

  /**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
    return http({
      url: '/home/hot'
    })
  }