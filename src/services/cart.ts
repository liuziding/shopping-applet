import type { CartItem } from '@/types/cart'
import { http } from '@/utils/http'
/**
 * 加入购物车
 * @param data 请求体参数
 */
export const postMemberCartAPI = (data: { skuId: string; count: number }) => {
  return http({
    method: 'POST',
    url: '/member/cart',
    data,
  })
}

/**
 * 获取购物车列表
 */
export const getMemberCartAPI = () => {
  return http<CartItem[]>({
    method: 'GET',
    url: '/member/cart',
  })
}

/**
 * 删除/清空购物车单品
 * @param data 请求体参数 ids SKUID 集合
 */
export const deleteMemberCartAPI = (data: { ids: string[] }) => {
  return http({
    method: 'DELETE',
    url: '/member/cart',
    data,
  })
}

/**
 * 修改购物车单品
 * @param skuId SKUID
 * @param data selected 选中状态 count 商品数量
 */
export const putMemberCartBySkuIdAPI = (
  skuId: string,
  data: { selected?: boolean; count?: number },
) => {
  return http({
    method: 'PUT',
    url: `/member/cart/${skuId}`,
    data,
  })
}

/**
 * 购物车全选/取消全选
 * @param data selected 是否选中
 */
export const putMemberCartSelectedAPI = (data: { selected: boolean }) => {
  return http({
    method: 'PUT',
    url: '/member/cart/selected',
    data,
  })
}

/********************************************************************/

const postMemberCart = () => {
  return {
    code: '1',
    msg: '操作成功',
    result: {
      attrsText: '红色礼盒黑檀木',
      count: 2,
      discount: null,
      id: '3468024',
      isCollect: false,
      isEffective: true,
      name: '意外设计便携钢笔花信礼盒',
      nowOriginalPrice: '398.00',
      nowPrice: '398.00',
      picture: 'https://yanxuan-item.nosdn.127.net/cc1c57b701f202bc585d8fff3b65571e.png',
      postFee: 5,
      price: '398.00',
      selected: true,
      skuId: '3681067',
      specs: [{ name: '规格', valueName: '红色礼盒黑檀木' }],
      stock: 8485,
    },
  }
}

const getMemberCart = () => {
  return {
    code: '1',
    msg: '操作成功',
    result: [
      {
        attrsText: '红色礼盒黑檀木',
        count: 2,
        discount: null,
        id: '3468024',
        isCollect: false,
        isEffective: true,
        name: '意外设计便携钢笔花信礼盒',
        nowOriginalPrice: '398.00',
        nowPrice: '398.00',
        picture: 'https://yanxuan-item.nosdn.127.net/cc1c57b701f202bc585d8fff3b65571e.png',
        postFee: 5,
        price: '398.00',
        selected: true,
        skuId: '3681067',
        specs: [{ name: '规格', valueName: '红色礼盒黑檀木' }],
        stock: 8485,
      },
    ],
  }
}

const putMemberCartBySkuId = () => {
  return {
    code: '1',
    msg: '操作成功',
    result: {
      attrsText: '红色礼盒黑檀木',
      count: 2,
      discount: null,
      id: '3468024',
      isCollect: false,
      isEffective: true,
      name: '意外设计便携钢笔花信礼盒',
      nowOriginalPrice: '398.00',
      nowPrice: '398.00',
      picture: 'https://yanxuan-item.nosdn.127.net/cc1c57b701f202bc585d8fff3b65571e.png',
      postFee: 5,
      price: '398.00',
      selected: null,
      skuId: '3681067',
      specs: [{ name: '规格', valueName: '红色礼盒黑檀木' }],
      stock: 8485,
    },
  }
}
