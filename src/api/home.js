import http from "@/utils/http";

export const bannerListReq =(params ={}) => {
  const {distributionSite ='1'} =params
  return http({
    url: 'home/banner',
    params: {
      distributionSite
    }
  })}

  
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

  /**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return http({
    url: '/home/goods'
  })
}