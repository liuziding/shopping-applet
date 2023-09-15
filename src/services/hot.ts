import type { PageParams } from '@/types/global'
import type { HotResult } from '@/types/hot'
import { http } from '@/utils/http'

type HotParams = PageParams & { subType?: string }
/**
 * 通用热门推荐类型
 * @param url 请求地址
 * @param data 请求参数
 */
export const getHotRecommendAPI = (url: string, data?: HotParams) => {
  return http<HotResult>({
    method: 'GET',
    url,
    data,
  })
}

/********************************************************************/

const getHotRecommend = (url: string, data?: HotParams) => {
  return {
    code: '1',
    msg: '操作成功',
    result: {
      bannerPicture:
        'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-20/658defeb-6df2-4fe3-9440-0be40ad9f65f.jpg',
      id: '897682543',
      subTypes: [
        {
          goodsItems: {
            counts: 10,
            items: [
              {
                desc: '生活的美，诗人的心↵4.16-4.19号停止发货app',
                id: '3468024',
                name: '意外设计便携钢笔花信礼盒',
                orderNum: 199,
                picture: 'https://yanxuan-item.nosdn.127.net/cc1c57b701f202bc585d8fff3b65571e.png',
                price: '398.00',
              },
              {
                desc: '100%天然亚麻面料，凉爽舒适，透气不闷热app',
                id: '4005108',
                name: '儿童亚麻夏凉宽松萝卜裤防蚊裤66-130cm',
                orderNum: 1003,
                picture: 'https://yanxuan-item.nosdn.127.net/2c61c7b96488f940904d697bdb401250.jpg',
                price: '95.00',
              },
              {
                desc: '拥抱新生，A类婴幼儿标准，安全放心app',
                id: '4000277',
                name: '21春季新品，宝宝舒适四季连体衣0-3岁',
                orderNum: 273,
                picture: 'https://yanxuan-item.nosdn.127.net/6efe85e63ab1e09896e1c99a9fe09d9e.png',
                price: '79.00',
              },
              {
                desc: '轻巧无捻小方巾，旅行便携app',
                id: '3436033',
                name: '1件装【新疆棉】云珍·轻软旅行长绒棉方巾',
                orderNum: 212,
                picture: 'https://yanxuan-item.nosdn.127.net/99c83709ca5f9fd5c5bb35d207ad7822.png',
                price: '7.90',
              },
              {
                desc: '日式风味，甘香醇厚app',
                id: '1545002',
                name: '三分钟即享简餐，日式即食咖喱150克',
                orderNum: 206,
                picture: 'https://yanxuan-item.nosdn.127.net/3a3d282779030c70e67dc0825ede50d3.png',
                price: '15.00',
              },
              {
                desc: '轻盈舒适可软可硬才是女生应有的腔调app',
                id: '3995432',
                name: '软牛皮少女系英伦鞋',
                orderNum: 174,
                picture: 'https://yanxuan-item.nosdn.127.net/eac6c40fdb0f977fdf80048d7b181ffa.png',
                price: '236.00',
              },
              {
                desc: '采用奥地利进口EPS缓冲层，仅重560g，骑行过程中减少对肩颈的压力app',
                id: '4007007',
                name: '轻量电动车骑行盔',
                orderNum: 657,
                picture: 'https://yanxuan-item.nosdn.127.net/dcebe1130f0ddce3edfd0a9d3dc7bd90.png',
                price: '129.00',
              },
              {
                desc: '3C认证，进口材料，安全出行app',
                id: '4023114',
                name: 'KJE金属色系轻量电动车骑行盔男女通用',
                orderNum: 4667,
                picture: 'https://yanxuan-item.nosdn.127.net/8f3a3b7dc6ca874f934b15af31417f61.png',
                price: '120.00',
              },
              {
                desc: '懒人福音居家轻松塑身app',
                id: '1621018',
                name: '懒人瘦出好身材，多功能甩脂塑形机',
                orderNum: 471,
                picture: 'https://yanxuan-item.nosdn.127.net/540f84174dbf9b98d4072abbd886819e.png',
                price: '589.00',
              },
              {
                desc: '雨天有情调，英伦风设计，给你好品味app',
                id: '4001285',
                name: '英伦长柄自动晴雨伞',
                orderNum: 246,
                picture: 'https://yanxuan-item.nosdn.127.net/e77b8f4a8ddd1e777394d84347859f7c.png',
                price: '40.90',
              },
            ],
            page: 1,
            pageSize: 10,
            pages: 1,
          },
          id: '912000341',
          title: '抢先尝鲜',
        },
        {
          goodsItems: {
            counts: 10,
            items: [
              {
                desc: '日式风味，甘香醇厚app',
                id: '1545002',
                name: '三分钟即享简餐，日式即食咖喱150克',
                orderNum: 206,
                picture: 'https://yanxuan-item.nosdn.127.net/3a3d282779030c70e67dc0825ede50d3.png',
                price: '15.00',
              },
              {
                desc: '雨天有情调，英伦风设计，给你好品味app',
                id: '4001285',
                name: '英伦长柄自动晴雨伞',
                orderNum: 246,
                picture: 'https://yanxuan-item.nosdn.127.net/e77b8f4a8ddd1e777394d84347859f7c.png',
                price: '40.90',
              },
              {
                desc: '生活的美，诗人的心↵4.16-4.19号停止发货app',
                id: '3468024',
                name: '意外设计便携钢笔花信礼盒',
                orderNum: 199,
                picture: 'https://yanxuan-item.nosdn.127.net/cc1c57b701f202bc585d8fff3b65571e.png',
                price: '398.00',
              },
              {
                desc: '采用奥地利进口EPS缓冲层，仅重560g，骑行过程中减少对肩颈的压力app',
                id: '4007007',
                name: '轻量电动车骑行盔',
                orderNum: 657,
                picture: 'https://yanxuan-item.nosdn.127.net/dcebe1130f0ddce3edfd0a9d3dc7bd90.png',
                price: '129.00',
              },
              {
                desc: '3C认证，进口材料，安全出行app',
                id: '4023114',
                name: 'KJE金属色系轻量电动车骑行盔男女通用',
                orderNum: 4667,
                picture: 'https://yanxuan-item.nosdn.127.net/8f3a3b7dc6ca874f934b15af31417f61.png',
                price: '120.00',
              },
              {
                desc: '轻盈舒适可软可硬才是女生应有的腔调app',
                id: '3995432',
                name: '软牛皮少女系英伦鞋',
                orderNum: 174,
                picture: 'https://yanxuan-item.nosdn.127.net/eac6c40fdb0f977fdf80048d7b181ffa.png',
                price: '236.00',
              },
              {
                desc: '100%天然亚麻面料，凉爽舒适，透气不闷热app',
                id: '4005108',
                name: '儿童亚麻夏凉宽松萝卜裤防蚊裤66-130cm',
                orderNum: 1003,
                picture: 'https://yanxuan-item.nosdn.127.net/2c61c7b96488f940904d697bdb401250.jpg',
                price: '95.00',
              },
              {
                desc: '拥抱新生，A类婴幼儿标准，安全放心app',
                id: '4000277',
                name: '21春季新品，宝宝舒适四季连体衣0-3岁',
                orderNum: 273,
                picture: 'https://yanxuan-item.nosdn.127.net/6efe85e63ab1e09896e1c99a9fe09d9e.png',
                price: '79.00',
              },
              {
                desc: '懒人福音居家轻松塑身app',
                id: '1621018',
                name: '懒人瘦出好身材，多功能甩脂塑形机',
                orderNum: 471,
                picture: 'https://yanxuan-item.nosdn.127.net/540f84174dbf9b98d4072abbd886819e.png',
                price: '589.00',
              },
              {
                desc: '轻巧无捻小方巾，旅行便携app',
                id: '3436033',
                name: '1件装【新疆棉】云珍·轻软旅行长绒棉方巾',
                orderNum: 212,
                picture: 'https://yanxuan-item.nosdn.127.net/99c83709ca5f9fd5c5bb35d207ad7822.png',
                price: '7.90',
              },
            ],
            page: 1,
            pageSize: 10,
            pages: 1,
          },
          id: '912000342',
          title: '新品预告',
        },
      ],
      title: '特惠推荐',
    },
  }
}
