import type { PageParams, PageResult } from '@/types/global'
import type { CategoryItem, BannerItem, HotItem, GuessItem } from '@/types/home'
import { http } from '@/utils/http'

/**
 * 首页-广告区域-小程序
 * @param distributionSite 广告区域展示位置（投放位置，1为首页，2为分类商品页）默认为1
 */
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

/**
 * 首页-前台分类-小程序
 * @returns
 */
export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

/**
 * 首页-前台分类-小程序
 * @returns
 */
export const getHomeHotAPI = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

/**
 * 猜你喜欢-小程序
 * @returns
 */
export const getHomeGoodsGuessLikeAPI = (data?: PageParams) => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data,
  })
}

/********************************************************************/

const getHomeBanner1 = (distributionSite: number) => {
  if (distributionSite === 1) {
    return {
      code: '1',
      msg: '操作成功',
      result: [
        {
          hrefUrl: '1013001',
          id: '24',
          imgUrl:
            'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/6d202d8e-bb47-4f92-9523-f32ab65754f4.jpg',
          type: '1',
        },
        {
          hrefUrl: '1013001',
          id: '23',
          imgUrl:
            'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/1ba86bcc-ae71-42a3-bc3e-37b662f7f07e.jpg',
          type: '1',
        },
        {
          hrefUrl: '1005000',
          id: '25',
          imgUrl:
            'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/e83efb1b-309c-46f7-98a3-f1fefa694338.jpg',
          type: '1',
        },
        {
          hrefUrl: '1019000',
          id: '22',
          imgUrl:
            'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/4a79180a-1a5a-4042-8a77-4db0b9c800a8.jpg',
          type: '1',
        },
        {
          hrefUrl: '1005000',
          id: '21',
          imgUrl:
            'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/dfc11bb0-4af5-4e9b-9458-99f615cc685a.jpg',
          type: '1',
        },
      ],
    }
  }
}

const getHomeBanner2 = (distributionSite: number) => {
  if (distributionSite === 2) {
    return {
      code: '1',
      msg: '操作成功',
      result: [
        {
          hrefUrl: '1005000',
          id: '21',
          imgUrl:
            'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/dfc11bb0-4af5-4e9b-9458-99f615cc685a.jpg',
          type: '1',
        },
        {
          hrefUrl: '1005000',
          id: '25',
          imgUrl:
            'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/e83efb1b-309c-46f7-98a3-f1fefa694338.jpg',
          type: '1',
        },
        {
          hrefUrl: '1013001',
          id: '24',
          imgUrl:
            'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/6d202d8e-bb47-4f92-9523-f32ab65754f4.jpg',
          type: '1',
        },
        {
          hrefUrl: '1013001',
          id: '23',
          imgUrl:
            'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/1ba86bcc-ae71-42a3-bc3e-37b662f7f07e.jpg',
          type: '1',
        },
        {
          hrefUrl: '1019000',
          id: '22',
          imgUrl:
            'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/4a79180a-1a5a-4042-8a77-4db0b9c800a8.jpg',
          type: '1',
        },
      ],
    }
  }
}

const getHomeCategory = () => {
  return {
    code: '1',
    msg: '操作成功',
    result: [
      {
        icon: 'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/201516e3-25d0-48f5-bcee-7f0cafb14176.png?quality=95&imageView',
        id: '1005000',
        name: '居家',
      },
      {
        icon: 'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/cf82e5b4-bf1b-4c68-aa86-96f66e8e5282.png?quality=95&imageView',
        id: '1005002',
        name: '锦鲤',
      },
      {
        icon: 'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/33e1f5de-0fdb-4cfa-9ba9-781233024b53.png?quality=95&imageView',
        id: '1010000',
        name: '服饰',
      },
      {
        icon: 'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/b514a526-4010-4ce8-8cb9-757ed382f84a.png?quality=95&imageView',
        id: '1011000',
        name: '母婴',
      },
      {
        icon: 'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/d38a73b8-cd03-48aa-a60b-e7c4e16667ed.png?quality=95&imageView',
        id: '1013001',
        name: '个护',
      },
      {
        icon: 'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/4b02f01f-a365-4b6c-9f7a-8b0f591dda02.png?quality=95&imageView',
        id: '1019000',
        name: '严选',
      },
      {
        icon: 'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/9660870d-6a59-4624-8064-b3a8cbf50d5c.png?quality=95&imageView',
        id: '1043000',
        name: '数码',
      },
      {
        icon: 'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/7d19752c-baff-49b6-bd02-5ece1d729214.png?quality=95&imageView',
        id: '109243029',
        name: '运动',
      },
      {
        icon: 'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/4ff20b9e-8150-4bd3-87a3-0cd6766938dd.png?quality=95&imageView',
        id: '19999999',
        name: '杂项',
      },
      {
        icon: 'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/d9ee4919-0d2c-4383-9916-2dd25f12610c.png?quality=95&imageView',
        id: '999999',
        name: '品牌',
      },
    ],
  }
}

const getHomeHot = () => {
  return {
    code: '1',
    msg: '操作成功',
    result: [
      {
        alt: '精选全攻略',
        id: '5',
        pictures: [
          'https://yanxuan-item.nosdn.127.net/f4d16ea8149ae59cce203a73a61d3d50.png',
          'https://yanxuan-item.nosdn.127.net/17f5a18b4125733023cad09d6b7852db.jpg',
        ],
        target: '10050',
        title: '特惠推荐',
        type: 1,
      },
      {
        alt: '最受欢迎',
        id: '6',
        pictures: [
          'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-05/7f483771-6831-4a7a-abdb-2625acb755f3.png',
          'https://yanxuan-item.nosdn.127.net/a6939f41c48fa9e9c8f7a7ed855351f1.jpg',
        ],
        target: '10050',
        title: '爆款推荐',
        type: 2,
      },
      {
        alt: '精心优选',
        id: '7',
        pictures: [
          'https://yanxuan-item.nosdn.127.net/28dedcc7805456a1f8f79b7baf8c46aa.png',
          'https://yanxuan-item.nosdn.127.net/9d5d0083264344b5d85acde13570d025.jpg',
        ],
        target: '10050',
        title: '一站买全',
        type: 3,
      },
      {
        alt: '生活加分项',
        id: '8',
        pictures: [
          'https://yanxuan-item.nosdn.127.net/0e1681ab3a4a5aaf185f0bb123f07f99.jpg',
          'https://yanxuan-item.nosdn.127.net/9d9590bdb4f7cdd874de6a4554abcff9.jpg',
        ],
        target: '10050',
        title: '新鲜好物',
        type: 4,
      },
    ],
  }
}

const getHomeGoodsGuessLike = (data?: PageParams) => {
  return {
    code: '1',
    msg: '操作成功',
    result: {
      counts: 10,
      items: [
        {
          desc: '背薄一寸，年轻十岁，时尚百搭，约会职场小心机app',
          id: '3993828',
          name: '七夕礼物·姐姐同款，穿出自信体态矫姿带',
          orderNum: 27,
          picture: 'https://yanxuan-item.nosdn.127.net/a6939f41c48fa9e9c8f7a7ed855351f1.jpg',
          price: '159.00',
        },
        {
          desc: '艺术家瞿广慈作品，手绘上色，礼盒包装app',
          id: '4008506',
          name: '平步青云财神家居摆件',
          orderNum: 11,
          picture: 'https://yanxuan-item.nosdn.127.net/9d5d0083264344b5d85acde13570d025.jpg',
          price: '646.00',
        },
        {
          desc: '经典3mm颗粒，强吸水，强包裹app',
          id: '4000278',
          name: '不易带出，3毫米原味豆腐猫砂2.6千克',
          orderNum: 13,
          picture: 'https://yanxuan-item.nosdn.127.net/9d9590bdb4f7cdd874de6a4554abcff9.jpg',
          price: '29.00',
        },
        {
          desc: '辣香麻爽，地道川渝风味app',
          id: '1548007',
          name: '川味牛肉辣椒酱190克',
          orderNum: 24,
          picture: 'https://yanxuan-item.nosdn.127.net/0e1681ab3a4a5aaf185f0bb123f07f99.jpg',
          price: '38.00',
        },
        {
          desc: '夏日随性搭，时髦感飙升app',
          id: '3986520',
          name: '女式交叉绑带罗马角斗士凉鞋',
          orderNum: 9,
          picture: 'https://yanxuan-item.nosdn.127.net/28dedcc7805456a1f8f79b7baf8c46aa.png',
          price: '155.00',
        },
        {
          desc: '漏斗般吸水，一垫多用更省心app',
          id: '3986658',
          name: '快速吸水防回渗，宠物训导垫S码80片/袋',
          orderNum: 314,
          picture: 'https://yanxuan-item.nosdn.127.net/17f5a18b4125733023cad09d6b7852db.jpg',
          price: '35.80',
        },
        {
          desc: '差旅学习必备，离线翻译神器app',
          id: '3394027',
          name: '平台有道翻译王2.0pro',
          orderNum: 2,
          picture: 'https://yanxuan-item.nosdn.127.net/f4d16ea8149ae59cce203a73a61d3d50.png',
          price: '998.00',
        },
        {
          desc: '原肉盛宴，大粒可见app',
          id: '3406025',
          name: '多重口味，原肉蒸煮，清煮肉罐（猫）85克',
          orderNum: 45,
          picture: 'https://yanxuan-item.nosdn.127.net/4128d962f1d621d516c6b850cbb8abfe.png',
          price: '9.90',
        },
        {
          desc: '陈年朗姆，香味芬芳app',
          id: '1666009',
          name: '多米尼加陈年朗姆酒700毫升',
          orderNum: 10,
          picture: 'https://yanxuan-item.nosdn.127.net/e3f387109491d92c47179d029d340b1f.jpg',
          price: '238.00',
        },
        {
          desc: '智能红心键，一键交互云音乐app；高通蓝牙5.0强信号，aptX无损音质体验；26小时长续航；Hi-res专业高解析认证；极简滑触设计，柔软亲肤蛋白皮耳罩，佩戴舒适app',
          id: '3806013',
          name: '平台云音乐氧气立体声蓝牙头戴式触控耳机',
          orderNum: 181,
          picture: 'https://yanxuan-item.nosdn.127.net/d8764ae4cca84f15628d4d13797fad6e.png',
          price: '459.00',
        },
      ],
      page: 1,
      pageSize: 10,
      pages: 10,
    },
  }
}
