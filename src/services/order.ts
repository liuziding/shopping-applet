import type { OrderListResult } from '@/types/order'
import type {
  OrderCreateParams,
  OrderListParams,
  OrderLogisticResult,
  OrderPreResult,
  OrderResult,
} from '@/types/order'
import { http } from '@/utils/http'
/**
 * 填写订单-获取预付订单
 */
export const getMemberOrderPreAPI = () => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre',
  })
}

/**
 * 填写订单-获取立即购买订单
 */
export const getMemberOrderPreNowAPI = (data: {
  skuId: string
  count: string
  addressId?: string
}) => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre/now',
    data,
  })
}

/**
 * 填写订单-再次购买
 * @param id 订单id
 */
export const getMemberOrderRepurchaseByIdAPI = (id: string) => {
  return http<OrderPreResult>({
    method: 'GET',
    url: `/member/order/repurchase/${id}`,
  })
}

/**
 * 提交订单
 * @param data 请求参数
 */
export const postMemberOrderAPI = (data: OrderCreateParams) => {
  return http<{ id: string }>({
    method: 'POST',
    url: '/member/order',
    data,
  })
}

/**
 * 获取订单详情
 * @param id 订单id
 */
export const getMemberOrderByIdAPI = (id: string) => {
  return http<OrderResult>({
    method: 'GET',
    url: `/member/order/${id}`,
  })
}

/**
 * 模拟发货-内测版
 * @description 在DEV环境下使用，仅在订单状态为待发货时，可模拟发货，调用后订单状态修改为待收货，包含模拟物流。
 * @param id 订单id
 */
export const getMemberOrderConsignmentByIdAPI = (id: string) => {
  return http({
    method: 'GET',
    url: `/member/order/consignment/${id}`,
  })
}

/**
 * 确认收货
 * @description 仅在订单状态为待收货时，可确认收货。
 * @param id 订单id
 */
export const putMemberOrderReceiptByIdAPI = (id: string) => {
  return putMemberOrderReceiptById()
}

/**
 * 获取订单物流
 * @description 仅在订单状态为待收货，待评价，已完成时，可获取物流信息。
 * @param id 订单id
 */
export const getMemberOrderLogisticsByIdAPI = (id: string) => {
  return http<OrderLogisticResult>({
    method: 'GET',
    url: `/member/order/${id}/logistics`,
  })
}

/**
 * 删除订单
 * @description 仅在订单状态为待评价，已完成，已取消时，可删除订单。
 * @param data ids 订单集合
 */
export const deleteMemberOrderAPI = (data: { ids: string[] }) => {
  return http({
    method: 'DELETE',
    url: `/member/order`,
    data,
  })
}

/**
 * 取消订单
 * @description 仅在订单状态为待付款时，可取消订单。
 * @param id 订单id
 * @param data cancelReason 取消理由
 */
export const getMemberOrderCancelByIdAPI = (id: string, data: { cancelReason: string }) => {
  return http<OrderResult>({
    method: 'PUT',
    url: `/member/order/${id}/cancel`,
    data,
  })
}

/**
 * 获取订单列表
 * @param data orderState 订单状态
 */
export const getMemberOrderAPI = (data: OrderListParams) => {
  return http<OrderListResult>({
    method: 'GET',
    url: `/member/order`,
    data,
  })
}

/********************************************************************/

const getMemberOrder = (data: OrderListParams) => {
  if (data.orderState === 0) {
    return {
      code: '1',
      msg: '操作成功',
      result: {
        counts: 5,
        pageSize: 5,
        pages: 1,
        page: 1,
        items: [
          {
            id: '1701925222090805249',
            createTime: '2023-09-13 19:46:08',
            payType: 1,
            orderState: 6,
            payLatestTime: '2023-09-13 20:16:08',
            postFee: 6,
            payMoney: 131.8,
            totalMoney: 125.8,
            totalNum: 2,
            skus: [
              {
                id: '1701925222103388162',
                spuId: '1129016',
                name: '【新疆棉】快速擦干，阿瓦提长绒棉毛巾',
                quantity: 2,
                image: 'https://yanxuan-item.nosdn.127.net/2f4ff18d601494cb7805ee099ed8a50f.png',
                realPay: 125.8,
                curPrice: 62.9,
                totalMoney: null,
                properties: [
                  {
                    propertyMainName: '颜色',
                    propertyValueName: '超值囤货装（铂银灰+樱粉色+天蓝色+鹅黄色）',
                  },
                ],
                attrsText: '超值囤货装（铂银灰+樱粉色+天蓝色+鹅黄色）',
              },
            ],
            payChannel: 2,
            countdown: -1,
          },
          {
            id: '1701908822974533633',
            createTime: '2023-09-13 18:40:58',
            payType: 1,
            orderState: 6,
            payLatestTime: '2023-09-13 19:10:58',
            postFee: 7,
            payMoney: 186,
            totalMoney: 179,
            totalNum: 1,
            skus: [
              {
                id: '1701908823045836801',
                spuId: '1683030',
                name: '泰国进口乳胶，儿童抗菌防螨护颈乳胶枕',
                quantity: 1,
                image: 'https://yanxuan-item.nosdn.127.net/76f9d1e6667dfbb08ab04f1ab8e1db5a.jpg',
                realPay: 179,
                curPrice: 179,
                totalMoney: null,
                properties: [
                  {
                    propertyMainName: '颜色',
                    propertyValueName: '蓝色双层可调节款（30x50cm）',
                  },
                ],
                attrsText: '蓝色双层可调节款（30x50cm）',
              },
            ],
            payChannel: 2,
            countdown: -1,
          },
          {
            id: '1701901087428055042',
            createTime: '2023-09-13 18:10:14',
            payType: 1,
            orderState: 6,
            payLatestTime: '2023-09-13 18:40:14',
            postFee: 6,
            payMoney: 19.9,
            totalMoney: 13.9,
            totalNum: 1,
            skus: [
              {
                id: '1701901087457415170',
                spuId: '3529022',
                name: '书源彩色按动中性笔',
                quantity: 1,
                image: 'https://yanxuan-item.nosdn.127.net/21216556e7d47a4e4277dcb36a16a486.png',
                realPay: 13.9,
                curPrice: 13.9,
                totalMoney: null,
                properties: [
                  {
                    propertyMainName: '颜色',
                    propertyValueName: '莫兰迪2代',
                  },
                ],
                attrsText: '莫兰迪2代',
              },
            ],
            payChannel: 2,
            countdown: -1,
          },
          {
            id: '1701894226993745921',
            createTime: '2023-09-13 17:42:58',
            payType: 1,
            orderState: 6,
            payLatestTime: '2023-09-13 18:12:58',
            postFee: 0,
            payMoney: 26,
            totalMoney: 26,
            totalNum: 1,
            skus: [
              {
                id: '1701894227006328833',
                spuId: '1189005',
                name: '楼兰灰枣328克',
                quantity: 1,
                image: 'https://yanxuan-item.nosdn.127.net/63aedbfedf9423b2b3109ee0e04b9dc4.png',
                realPay: 26,
                curPrice: 26,
                totalMoney: null,
                properties: [
                  {
                    propertyMainName: '规格',
                    propertyValueName: '328克',
                  },
                ],
                attrsText: '328克',
              },
            ],
            payChannel: 2,
            countdown: -1,
          },
          {
            id: '1701893389009555457',
            createTime: '2023-09-13 17:39:38',
            payType: 1,
            orderState: 6,
            payLatestTime: '2023-09-13 18:09:39',
            postFee: 6,
            payMoney: 412,
            totalMoney: 406,
            totalNum: 2,
            skus: [
              {
                id: '1701893389223464961',
                spuId: '1318002',
                name: '每一口都有七种肉，全价猫粮',
                quantity: 1,
                image: 'https://yanxuan-item.nosdn.127.net/ec16c3f1df988da3429f7d639eea8a84.jpg',
                realPay: 88,
                curPrice: 88,
                totalMoney: null,
                properties: [
                  {
                    propertyMainName: '规格',
                    propertyValueName: '2.0配方1.8千克/袋',
                  },
                ],
                attrsText: '2.0配方1.8千克/袋',
              },
              {
                id: '1701893389236047873',
                spuId: '1318002',
                name: '每一口都有七种肉，全价猫粮',
                quantity: 1,
                image: 'https://yanxuan-item.nosdn.127.net/ec16c3f1df988da3429f7d639eea8a84.jpg',
                realPay: 318,
                curPrice: 318,
                totalMoney: null,
                properties: [
                  {
                    propertyMainName: '规格',
                    propertyValueName: '2.0配方1.8千克/袋*4袋',
                  },
                ],
                attrsText: '2.0配方1.8千克/袋*4袋',
              },
            ],
            payChannel: 2,
            countdown: -1,
          },
        ],
      },
    }
  }
  if (data.orderState === 1) {
    return {
      code: '1',
      msg: '操作成功',
      result: {
        counts: 0,
        pageSize: 5,
        pages: 0,
        page: 1,
        items: [],
      },
    }
  }
  if (data.orderState === 2) {
    return {
      code: '1',
      msg: '操作成功',
      result: {
        counts: 5,
        pageSize: 5,
        pages: 1,
        page: 1,
        items: [
          {
            id: '1701869542034116609',
            createTime: '2023-09-13 16:04:53',
            payType: 1,
            orderState: 2,
            payLatestTime: '2023-09-13 16:34:53',
            postFee: 0,
            payMoney: 71.6,
            totalMoney: 71.6,
            totalNum: 2,
            skus: [
              {
                id: '1701869542067671041',
                spuId: '3986658',
                name: '快速吸水防回渗，宠物训导垫S码80片/袋',
                quantity: 2,
                image: 'https://yanxuan-item.nosdn.127.net/17f5a18b4125733023cad09d6b7852db.jpg',
                realPay: 71.6,
                curPrice: 35.8,
                totalMoney: null,
                properties: [
                  {
                    propertyMainName: '尺码',
                    propertyValueName: 'S80片/袋',
                  },
                ],
                attrsText: 'S80片/袋',
              },
            ],
            payChannel: 2,
            countdown: -1,
          },
          {
            id: '1701846006745796610',
            createTime: '2023-09-13 14:31:21',
            payType: 1,
            orderState: 2,
            payLatestTime: '2023-09-13 15:01:22',
            postFee: 2,
            payMoney: 31,
            totalMoney: 29,
            totalNum: 1,
            skus: [
              {
                id: '1701846006762573826',
                spuId: '1435017',
                name: '‘嗖’一下就通了日本管道毛发溶解剂',
                quantity: 1,
                image: 'https://yanxuan-item.nosdn.127.net/55284fa1d8773b8897efa0b2284a8437.png',
                realPay: 29,
                curPrice: 29,
                totalMoney: null,
                properties: [
                  {
                    propertyMainName: '规格',
                    propertyValueName: '三袋装',
                  },
                ],
                attrsText: '三袋装',
              },
            ],
            payChannel: 2,
            countdown: -1,
          },
          {
            id: '1701844455662817282',
            createTime: '2023-09-13 14:25:12',
            payType: 1,
            orderState: 2,
            payLatestTime: '2023-09-13 14:55:12',
            postFee: 7,
            payMoney: 132,
            totalMoney: 125,
            totalNum: 1,
            skus: [
              {
                id: '1701844455679594497',
                spuId: '1436033',
                name: '柔软透气，女式精梳棉内裤6条装',
                quantity: 1,
                image: 'https://yanxuan-item.nosdn.127.net/dc30e9603306e59d959e7fac6968244e.jpg',
                realPay: 125,
                curPrice: 125,
                totalMoney: null,
                properties: [
                  {
                    propertyMainName: '颜色',
                    propertyValueName: '橡皮红+玫瑰粉+云灰色+裸肤色+云灰色+裸肤色',
                  },
                  {
                    propertyMainName: '尺码',
                    propertyValueName: 'S',
                  },
                ],
                attrsText: '橡皮红+玫瑰粉+云灰色+裸肤色+云灰色+裸肤色， S',
              },
            ],
            payChannel: 2,
            countdown: -1,
          },
          {
            id: '1701843466838872066',
            createTime: '2023-09-13 14:21:16',
            payType: 1,
            orderState: 2,
            payLatestTime: '2023-09-13 14:51:16',
            postFee: 0,
            payMoney: 15,
            totalMoney: 15,
            totalNum: 1,
            skus: [
              {
                id: '1701843466847260674',
                spuId: '1545002',
                name: '三分钟即享简餐，日式即食咖喱150克',
                quantity: 1,
                image: 'https://yanxuan-item.nosdn.127.net/3a3d282779030c70e67dc0825ede50d3.png',
                realPay: 15,
                curPrice: 15,
                totalMoney: null,
                properties: [
                  {
                    propertyMainName: '口味',
                    propertyValueName: '草菇鸡肉味',
                  },
                ],
                attrsText: '草菇鸡肉味',
              },
            ],
            payChannel: 2,
            countdown: -1,
          },
          {
            id: '1701842852289449985',
            createTime: '2023-09-13 14:18:49',
            payType: 1,
            orderState: 2,
            payLatestTime: '2023-09-13 14:48:49',
            postFee: 0,
            payMoney: 15,
            totalMoney: 15,
            totalNum: 1,
            skus: [
              {
                id: '1701842852302032897',
                spuId: '1545002',
                name: '三分钟即享简餐，日式即食咖喱150克',
                quantity: 1,
                image: 'https://yanxuan-item.nosdn.127.net/3a3d282779030c70e67dc0825ede50d3.png',
                realPay: 15,
                curPrice: 15,
                totalMoney: null,
                properties: [
                  {
                    propertyMainName: '口味',
                    propertyValueName: '草菇鸡肉味',
                  },
                ],
                attrsText: '草菇鸡肉味',
              },
            ],
            payChannel: 2,
            countdown: -1,
          },
        ],
      },
    }
  }
  if (data.orderState === 3) {
    return {
      code: '1',
      msg: '操作成功',
      result: {
        counts: 5,
        pageSize: 5,
        pages: 1,
        page: 1,
        items: [
          {
            id: '1701798270298230786',
            createTime: '2023-09-13 11:21:40',
            payType: 1,
            orderState: 3,
            payLatestTime: '2023-09-13 11:51:40',
            postFee: 1,
            payMoney: 240,
            totalMoney: 239,
            totalNum: 1,
            skus: [
              {
                id: '1701798270319202306',
                spuId: '4027466',
                name: '儿童气泵软底学步二阶段学步鞋',
                quantity: 1,
                image: 'https://yanxuan-item.nosdn.127.net/19bedfd20a12842b5d7f7b909a62e877.jpg',
                realPay: 239,
                curPrice: 239,
                totalMoney: null,
                properties: [
                  {
                    propertyMainName: '颜色',
                    propertyValueName: '白彩',
                  },
                  {
                    propertyMainName: '尺码',
                    propertyValueName: '20',
                  },
                ],
                attrsText: '白彩， 20',
              },
            ],
            payChannel: 2,
            countdown: -1,
          },
          {
            id: '1701796695366438914',
            createTime: '2023-09-13 11:15:25',
            payType: 1,
            orderState: 3,
            payLatestTime: '2023-09-13 11:45:25',
            postFee: 1,
            payMoney: 260,
            totalMoney: 259,
            totalNum: 1,
            skus: [
              {
                id: '1701796695387410434',
                spuId: '1109030',
                name: '女式英伦牛皮防水耐磨工装靴',
                quantity: 1,
                image: 'https://yanxuan-item.nosdn.127.net/94f629768177ac53b362bbd312f438db.png',
                realPay: 259,
                curPrice: 259,
                totalMoney: null,
                properties: [
                  {
                    propertyMainName: '颜色',
                    propertyValueName: '麦黄色',
                  },
                  {
                    propertyMainName: '尺码',
                    propertyValueName: '39码',
                  },
                ],
                attrsText: '麦黄色， 39码',
              },
            ],
            payChannel: 2,
            countdown: -1,
          },
          {
            id: '1701796011246096385',
            createTime: '2023-09-13 11:12:42',
            payType: 1,
            orderState: 3,
            payLatestTime: '2023-09-13 11:42:42',
            postFee: 1,
            payMoney: 240,
            totalMoney: 239,
            totalNum: 1,
            skus: [
              {
                id: '1701796011267067905',
                spuId: '4027466',
                name: '儿童气泵软底学步二阶段学步鞋',
                quantity: 1,
                image: 'https://yanxuan-item.nosdn.127.net/19bedfd20a12842b5d7f7b909a62e877.jpg',
                realPay: 239,
                curPrice: 239,
                totalMoney: null,
                properties: [
                  {
                    propertyMainName: '颜色',
                    propertyValueName: '白彩',
                  },
                  {
                    propertyMainName: '尺码',
                    propertyValueName: '20',
                  },
                ],
                attrsText: '白彩， 20',
              },
            ],
            payChannel: 2,
            countdown: -1,
          },
          {
            id: '1701795876546023425',
            createTime: '2023-09-13 11:12:09',
            payType: 1,
            orderState: 3,
            payLatestTime: '2023-09-13 11:42:10',
            postFee: 1,
            payMoney: 240,
            totalMoney: 239,
            totalNum: 1,
            skus: [
              {
                id: '1701795876978036738',
                spuId: '4027466',
                name: '儿童气泵软底学步二阶段学步鞋',
                quantity: 1,
                image: 'https://yanxuan-item.nosdn.127.net/19bedfd20a12842b5d7f7b909a62e877.jpg',
                realPay: 239,
                curPrice: 239,
                totalMoney: null,
                properties: [
                  {
                    propertyMainName: '颜色',
                    propertyValueName: '白彩',
                  },
                  {
                    propertyMainName: '尺码',
                    propertyValueName: '20',
                  },
                ],
                attrsText: '白彩， 20',
              },
            ],
            payChannel: 2,
            countdown: -1,
          },
          {
            id: '1701795469769838593',
            createTime: '2023-09-13 11:10:32',
            payType: 1,
            orderState: 3,
            payLatestTime: '2023-09-13 11:40:33',
            postFee: 1,
            payMoney: 240,
            totalMoney: 239,
            totalNum: 1,
            skus: [
              {
                id: '1701795469795004417',
                spuId: '4027466',
                name: '儿童气泵软底学步二阶段学步鞋',
                quantity: 1,
                image: 'https://yanxuan-item.nosdn.127.net/19bedfd20a12842b5d7f7b909a62e877.jpg',
                realPay: 239,
                curPrice: 239,
                totalMoney: null,
                properties: [
                  {
                    propertyMainName: '颜色',
                    propertyValueName: '白彩',
                  },
                  {
                    propertyMainName: '尺码',
                    propertyValueName: '19',
                  },
                ],
                attrsText: '白彩， 19',
              },
            ],
            payChannel: 2,
            countdown: -1,
          },
        ],
      },
    }
  }
  if (data.orderState === 4) {
    return {
      code: '1',
      msg: '操作成功',
      result: {
        counts: 5,
        pageSize: 5,
        pages: 1,
        page: 1,
        items: [
          {
            id: '1701869819218890754',
            createTime: '2023-09-13 16:05:59',
            payType: 1,
            orderState: 4,
            payLatestTime: '2023-09-13 16:35:59',
            postFee: 2,
            payMoney: 81,
            totalMoney: 79,
            totalNum: 1,
            skus: [
              {
                id: '1701869819248250882',
                spuId: '3994870',
                name: '冬日穿搭利器，女童加绒打底裤73-140cm',
                quantity: 1,
                image: 'https://yanxuan-item.nosdn.127.net/ccf7aa782c3a1daf2cd53bf6f1ade697.jpg',
                realPay: 79,
                curPrice: 79,
                totalMoney: null,
                properties: [
                  {
                    propertyMainName: '颜色',
                    propertyValueName: '深灰',
                  },
                  {
                    propertyMainName: '尺码',
                    propertyValueName: '80cm',
                  },
                ],
                attrsText: '深灰， 80cm',
              },
            ],
            payChannel: 2,
            countdown: -1,
          },
          {
            id: '1701845376643895297',
            createTime: '2023-09-13 14:28:51',
            payType: 1,
            orderState: 4,
            payLatestTime: '2023-09-13 14:58:52',
            postFee: 9,
            payMoney: 147,
            totalMoney: 138,
            totalNum: 1,
            skus: [
              {
                id: '1701845376723587073',
                spuId: '3998106',
                name: '德国莫泽尔传统版雷司令干白2019750ml',
                quantity: 1,
                image: 'https://yanxuan-item.nosdn.127.net/bcb8efeee3977d417b961c1eba4584a5.jpg',
                realPay: 138,
                curPrice: 138,
                totalMoney: null,
                properties: [
                  {
                    propertyMainName: '规格',
                    propertyValueName: '传统版摩泽尔雷司令干白2020年',
                  },
                ],
                attrsText: '传统版摩泽尔雷司令干白2020年',
              },
            ],
            payChannel: 2,
            countdown: -1,
          },
          {
            id: '1701841808926969857',
            createTime: '2023-09-13 14:14:41',
            payType: 1,
            orderState: 4,
            payLatestTime: '2023-09-13 14:44:41',
            postFee: 3,
            payMoney: 124,
            totalMoney: 121,
            totalNum: 1,
            skus: [
              {
                id: '1701841808939552770',
                spuId: '4019910',
                name: '一包在手想走就走男士风琴多卡位便携卡包',
                quantity: 1,
                image: 'https://yanxuan-item.nosdn.127.net/9af3d86efd10625817084dbecaf3d76c.jpg',
                realPay: 121,
                curPrice: 121,
                totalMoney: null,
                properties: [
                  {
                    propertyMainName: '颜色',
                    propertyValueName: '黑色',
                  },
                ],
                attrsText: '黑色',
              },
            ],
            payChannel: 2,
            countdown: -1,
          },
          {
            id: '1701833526048985090',
            createTime: '2023-09-13 13:41:46',
            payType: 1,
            orderState: 4,
            payLatestTime: '2023-09-13 14:11:46',
            postFee: 2,
            payMoney: 41,
            totalMoney: 39,
            totalNum: 1,
            skus: [
              {
                id: '1701833526061568002',
                spuId: '1293000',
                name: '北海道风味大虾面61克*6杯',
                quantity: 1,
                image: 'https://yanxuan-item.nosdn.127.net/53992e4eb8ec385406038bf307e42ef7.jpg',
                realPay: 39,
                curPrice: 39,
                totalMoney: null,
                properties: [
                  {
                    propertyMainName: '规格',
                    propertyValueName: '61克*6杯',
                  },
                ],
                attrsText: '61克*6杯',
              },
            ],
            payChannel: 2,
            countdown: -1,
          },
          {
            id: '1701832757295976450',
            createTime: '2023-09-13 13:38:43',
            payType: 1,
            orderState: 4,
            payLatestTime: '2023-09-13 14:08:43',
            postFee: 2,
            payMoney: 41,
            totalMoney: 39,
            totalNum: 1,
            skus: [
              {
                id: '1701832757308559361',
                spuId: '1293000',
                name: '北海道风味大虾面61克*6杯',
                quantity: 1,
                image: 'https://yanxuan-item.nosdn.127.net/53992e4eb8ec385406038bf307e42ef7.jpg',
                realPay: 39,
                curPrice: 39,
                totalMoney: null,
                properties: [
                  {
                    propertyMainName: '规格',
                    propertyValueName: '61克*6杯',
                  },
                ],
                attrsText: '61克*6杯',
              },
            ],
            payChannel: 2,
            countdown: -1,
          },
        ],
      },
    }
  }
}

const putMemberOrderReceiptById = () => {
  return {
    code: '1',
    msg: '操作成功',
    result: {
      id: '1701798270298230786',
      createTime: '2023-09-13 11:21:40',
      payType: 1,
      orderState: 4,
      payLatestTime: '2023-09-13 11:51:40',
      countdown: null,
      postFee: 1,
      payMoney: 240,
      payChannel: 2,
      payState: 2,
      totalMoney: 239,
      totalNum: 1,
      deliveryTimeType: 1,
      receiverContact: '31231',
      receiverMobile: '3123',
      provinceCode: '110000',
      cityCode: '110100',
      countyCode: '110101',
      receiverAddress: '北京市 北京市 东城区213212',
      payTime: '2023-09-13 11:21:43',
      consignTime: '2023-09-13 11:21:44',
      endTime: '2023-09-13 22:10:20',
      closeTime: null,
      evaluationTime: null,
      skus: [
        {
          id: '1701798270319202306',
          spuId: '4027466',
          name: '儿童气泵软底学步二阶段学步鞋',
          quantity: 1,
          image: 'https://yanxuan-item.nosdn.127.net/19bedfd20a12842b5d7f7b909a62e877.jpg',
          realPay: 239,
          curPrice: 239,
          totalMoney: null,
          properties: [
            {
              propertyMainName: '颜色',
              propertyValueName: '白彩',
            },
            {
              propertyMainName: '尺码',
              propertyValueName: '20',
            },
          ],
          attrsText: '白彩， 20',
        },
      ],
      arrivalEstimatedTime: null,
    },
  }
}

const getMemberOrderRepurchaseById = () => {
  return {
    code: '1',
    msg: '操作成功',
    result: {
      userAddresses: [
        {
          id: '1701847950084280322',
          receiver: '刘先生',
          contact: '18211110000',
          provinceCode: '110000',
          cityCode: '110100',
          countyCode: '110101',
          address: '灯辉路银春小区202室',
          isDefault: 1,
          fullLocation: '上海市 上海市 闵行区',
          postalCode: null,
          addressTags: null,
        },
        {
          id: '1701933054215327746',
          receiver: "g'h'gghg",
          contact: "g'h'g'f'h'f'hghgfhfh",
          provinceCode: '110000',
          cityCode: '110100',
          countyCode: '110101',
          address: "h'g'f'g'f'hhgfgfh",
          isDefault: 0,
          fullLocation: '北京市 北京市 东城区',
          postalCode: null,
          addressTags: null,
        },
        {
          id: '1701847377062662145',
          receiver: '1234',
          contact: '18812345678',
          provinceCode: '110000',
          cityCode: '110100',
          countyCode: '110101',
          address: '2356',
          isDefault: 0,
          fullLocation: '北京市 北京市 东城区',
          postalCode: null,
          addressTags: null,
        },
        {
          id: '1701847784262471682',
          receiver: '3如果',
          contact: '18211110809',
          provinceCode: '110000',
          cityCode: '110100',
          countyCode: '110101',
          address: '是前二百',
          isDefault: 0,
          fullLocation: '北京市 北京市 东城区',
          postalCode: null,
          addressTags: null,
        },
        {
          id: '1701851863218917377',
          receiver: '345',
          contact: '13322223333',
          provinceCode: '110000',
          cityCode: '110100',
          countyCode: '110101',
          address: '245',
          isDefault: 0,
          fullLocation: '北京市 北京市 东城区',
          postalCode: null,
          addressTags: null,
        },
      ],
      goods: [
        {
          id: '1701869542067671041',
          name: '快速吸水防回渗，宠物训导垫S码80片/袋',
          picture: 'https://yanxuan-item.nosdn.127.net/17f5a18b4125733023cad09d6b7852db.jpg',
          count: 2,
          skuId: '300188504',
          attrsText: 'S80片/袋',
          price: '35.80',
          payPrice: '35.80',
          totalPrice: '71.60',
          totalPayPrice: '71.60',
        },
      ],
      summary: {
        goodsCount: 2,
        totalPrice: 71.6,
        totalPayPrice: 71.6,
        postFee: 0,
        discountPrice: 0,
      },
    },
  }
}
