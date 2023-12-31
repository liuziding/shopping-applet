import type { GoodsResult } from '@/types/goods'
import { http } from '@/utils/http'

/**
 * 商品详情
 * @param id 商品id
 */
export const getGoodsByIdAPI = (id: string) => {
  return http<GoodsResult>({
    method: 'GET',
    url: '/goods',
    data: { id },
  })
}

/********************************************************************/

const getGoodsById = () => {
  return {
    code: '1',
    msg: '操作成功',
    result: {
      brand: {
        desc: null,
        id: 'spider99999999999',
        logo: 'https://yanxuan-item.nosdn.127.net/f6ddd429632de6170900dc2fbc541fd8.png?type=webp&imageView&thumbnail=78x78&quality=95',
        name: '传智自有品牌',
        nameEn: 'chuanzhi',
        picture:
          'https://yanxuan-item.nosdn.127.net/f6ddd429632de6170900dc2fbc541fd8.png?type=webp&imageView&thumbnail=78x78&quality=95',
        place: null,
        type: null,
      },
      categories: [
        {
          id: '109243046',
          layer: 2,
          name: '办公文具',
          parent: {
            id: '1043000',
            layer: 1,
            name: '数码',
            parent: null,
          },
        },
        {
          id: '1043000',
          layer: 1,
          name: '数码',
          parent: null,
        },
      ],
      collectCount: 0,
      commentCount: 0,
      desc: '生活的美，诗人的心↵4.16-4.19号停止发货app',
      details: {
        pictures: [
          'https://yanxuan-item.nosdn.127.net/55e1a5c70b89f5f17caaa22bb75d0834.jpg',
          'https://yanxuan-item.nosdn.127.net/a6e0d00bd2d663c7f07729aac6b18838.jpg',
          'https://yanxuan-item.nosdn.127.net/99f16a7cb9aaa33d70a9673dd0615531.jpg',
          'https://yanxuan-item.nosdn.127.net/12a667ea51519834256fee952d2c6420.jpg',
          'https://yanxuan-item.nosdn.127.net/3965f62f0770095e4e90b6d66edcc97f.jpg',
          'https://yanxuan-item.nosdn.127.net/3a45d61c14c75a1a74270dc1d1141cbd.jpg',
          'https://yanxuan-item.nosdn.127.net/6f9276bb05a31c3ab7e453ad43413373.jpg',
          'https://yanxuan-item.nosdn.127.net/3c3c86acce283dc381f9dd01f17f8f89.jpg',
          'https://yanxuan-item.nosdn.127.net/a0d3fd0057e0b7b3053c73dcf38ee543.jpg',
          'https://yanxuan-item.nosdn.127.net/b3606cf30d3bf63882bb24bd25c6135d.jpg',
          'https://yanxuan-item.nosdn.127.net/08916ec8e28e65f29858d0e7dcf48fdf.jpg',
          'https://yanxuan-item.nosdn.127.net/af866e123205766a253a271aeaa93c34.jpg',
          'https://yanxuan-item.nosdn.127.net/0b40dcda64cd105e893aff4190c05268.jpg',
          'https://yanxuan-item.nosdn.127.net/3db7576842f18d1aeb61585ed00b4d97.jpg',
          'https://yanxuan-item.nosdn.127.net/c7aa1ec20e6c71c527227120f06eaa27.jpg',
          'https://yanxuan-item.nosdn.127.net/40c101f0eebdeb4a2d08f248b04434dd.jpg',
          'https://yanxuan-item.nosdn.127.net/003bd7c1cc7132ad9353f884bdab51cc.jpg',
          'https://yanxuan-item.nosdn.127.net/62e74b4c1c3b8fb74cb2a09e880d75a0.jpg',
          'https://yanxuan-item.nosdn.127.net/fe504c0185f5f561a9ecddb4bfc8e5b2.jpg',
          'https://yanxuan-item.nosdn.127.net/c6054c44e06ad3d8753b61e75386c5ab.jpg',
          'https://yanxuan-item.nosdn.127.net/b5a9edfc6dd6f0135127fd52b4c63b53.jpg',
          'https://yanxuan-item.nosdn.127.net/d045b483025a5a34799cc04884ebcac5.jpg',
          'https://yanxuan-item.nosdn.127.net/a49bc60e6950594f1d69cff1bea7447b.jpg',
          'https://yanxuan-item.nosdn.127.net/2ac3ea586364dba7991659859c0b4a5a.jpg',
          'https://yanxuan-item.nosdn.127.net/6caf8b212bd6c2a8d366a6d549455e5a.jpg',
          'https://yanxuan-item.nosdn.127.net/0a63ef7db977e2e5e794af094fb24ee7.jpg',
          'https://yanxuan-item.nosdn.127.net/ff4b23b94661d6dff8463564ae8cb914.jpg',
          'https://yanxuan-item.nosdn.127.net/02d8938c5ac16dff9f626175fc66c165.jpg',
          'https://yanxuan-item.nosdn.127.net/1db36118c0e26ae2ea46fc25aa60da82.jpg',
          'https://yanxuan-item.nosdn.127.net/9215d8f44750b0f5205f32e82211e1a2.jpg',
          'https://yanxuan-item.nosdn.127.net/9dba430757e0a1e07141a642872258db.jpg',
          'https://yanxuan-item.nosdn.127.net/8a47ea4ad2265589ec8bbe44c44e5c7d.jpg',
          'https://yanxuan-item.nosdn.127.net/16f14bf84f095c126faaf8457e37c748.jpg',
          'https://yanxuan-item.nosdn.127.net/08797693bdbfd4627f6dcf707d61d458.jpg',
          'https://yanxuan-item.nosdn.127.net/c2e16a2f0511e598fb494bc9413f42ed.jpg',
          'https://yanxuan-item.nosdn.127.net/9ddf368fcc46d099d7839e48270afd05.jpg',
          'https://yanxuan-item.nosdn.127.net/1f481def6818e23d080b7d78ba9f9b20.jpg',
          'https://yanxuan-item.nosdn.127.net/eb200a47ef9288958ae159afc66cb726.jpg',
          'https://yanxuan-item.nosdn.127.net/911fb83b0aec0b0a7c97ac0a4e873e54.jpg',
          'https://yanxuan-item.nosdn.127.net/fd3e493a0176b107be75db1a470cfeb3.jpg',
          'https://yanxuan-item.nosdn.127.net/6676d4b8d995f82976ca8c2fea2eea69.jpg',
          'https://yanxuan-item.nosdn.127.net/a4466ccc68a53915e09980c584fb9aca.jpg',
          'https://yanxuan-item.nosdn.127.net/9f34461ab506811c4c5692174f5fd7cc.jpg',
          'https://yanxuan-item.nosdn.127.net/5b93466d697d92090e8add7a4f1d6d9c.jpg',
          'https://yanxuan-item.nosdn.127.net/49a8b9c0d15071a105c3fc8b18981b4b.jpg',
          'https://yanxuan-item.nosdn.127.net/43213b6b79c310ddf666943660c0c3d9.jpg',
          'https://yanxuan-item.nosdn.127.net/c35b741a894b49025ecbd94ec460faf7.jpg',
          'https://yanxuan-item.nosdn.127.net/af67a14c6d0cd56c2b45221228b02077.jpg',
          'https://yanxuan-item.nosdn.127.net/213bb609c04fd828e41daf202b5759c2.jpg',
          'https://yanxuan-item.nosdn.127.net/6e3e06257f7e774834d8dd84cd82fd3d.jpg',
          'https://yanxuan-item.nosdn.127.net/bbc11b88710f948778074d306e8ed96e.jpg',
          'https://yanxuan-item.nosdn.127.net/3d6243c5200792981155e42d9b4a79ac.jpg',
          'https://yanxuan-item.nosdn.127.net/0eafdd7f22e89a18d96b2d9f73f8818a.jpg',
          'https://yanxuan-item.nosdn.127.net/b9536145291eba5182233042a482da46.jpg',
          'https://yanxuan-item.nosdn.127.net/79ce79d9cc242b9c9cb30098ab18370a.jpg',
          'https://yanxuan-item.nosdn.127.net/80e4aaa3b294d715b19119842e6e5846.jpg',
          'https://yanxuan-item.nosdn.127.net/eafd2be170a4a3bb0d67756b710fd5df.jpg',
          'https://yanxuan-item.nosdn.127.net/375fd9a0641f1068b2726009c478ac3c.jpg',
          'https://yanxuan-item.nosdn.127.net/43b13ed64116857fdcbadfdb6563304d.jpg',
          'https://yanxuan-item.nosdn.127.net/51b230ed90e8f764f7c9f904ac4ceb0a.jpg',
          'https://yanxuan-item.nosdn.127.net/218fa63d5e91c8ac921e8775405a0162.jpg',
          'https://yanxuan-item.nosdn.127.net/fa4e38ac4e32d65e0a01182aec70b0a4.jpg',
          'https://yanxuan-item.nosdn.127.net/2938643151a8b67abf66786dd11b30ad.jpg',
          'https://yanxuan-item.nosdn.127.net/3ed633215f273b8a85d53cdba768744c.jpg',
          'https://yanxuan-item.nosdn.127.net/96b51bbadb5150d3081b213f1857ca57.jpg',
          'https://yanxuan-item.nosdn.127.net/80f5f3788a810c1defbf50227284765e.jpg',
          'https://yanxuan-item.nosdn.127.net/55b97af1b59c385e67fec54e27468295.jpg',
          'https://yanxuan-item.nosdn.127.net/4f969fa711674086b4cc7b640baa7f1d.jpg',
          'https://yanxuan-item.nosdn.127.net/a79fc134b1ade00f6d3818d59034a280.jpg',
          'https://yanxuan-item.nosdn.127.net/dc76b198823c5a35bb469cd930315d7b.jpg',
          'https://yanxuan-item.nosdn.127.net/4bdea1360bdd3f4d0de60b88483c2c02.jpg',
          'https://yanxuan-item.nosdn.127.net/19aea385d2912ac9e614d7c6d0ab39e1.jpg',
          'https://yanxuan-item.nosdn.127.net/8d26acdf61945d70606e8b62537ec16b.jpg',
          'https://yanxuan-item.nosdn.127.net/d72bf469e5fccc72c1812d29403d19d2.jpg',
          'https://yanxuan-item.nosdn.127.net/04a42206cca8020579dc993cb85c48e2.jpg',
          'https://yanxuan-item.nosdn.127.net/df8ad54906a7257ea7135ef91eb6e2e5.jpg',
          'https://yanxuan-item.nosdn.127.net/cf3d86922328812ffa23647ed3a30d2c.jpg',
          'https://yanxuan-item.nosdn.127.net/85098f6dc8ccc8c053b0d5fe7b1ec36f.jpg',
          'https://yanxuan-item.nosdn.127.net/48143e6aaf5ee5e091c5c9e0edbc5ff2.jpg',
          'https://yanxuan-item.nosdn.127.net/abf2bff59e6df2d07c080a2743a29f6c.jpg',
          'https://yanxuan-item.nosdn.127.net/cf178bede857c6b76ddafebbc06f197b.jpg',
          'https://yanxuan-item.nosdn.127.net/0ee35ee2528077d1186598ec57194928.jpg',
          'https://yanxuan-item.nosdn.127.net/7e9226d22822f0f655d05a2a7b4f64f7.jpg',
          'https://yanxuan-item.nosdn.127.net/1e1eec6c3a376fef3435298cdc33e506.jpg',
          'https://yanxuan-item.nosdn.127.net/2bb6e5fdc16e46736c113eb0522fb0d9.jpg',
          'https://yanxuan-item.nosdn.127.net/77378dcb42da6e3756e2ee6b5a114f01.jpg',
          'https://yanxuan-item.nosdn.127.net/db3addbef201f1cbf30ccec3285fc724.jpg',
          'https://yanxuan-item.nosdn.127.net/e8d1a8a6fc7b045895d07764d380b2fa.jpg',
          'https://yanxuan-item.nosdn.127.net/709f1ccebb9bbfdeda7a7b4068692bbf.jpg',
          'https://yanxuan-item.nosdn.127.net/bcbc1b4b622069fb8f010190bc814a71.jpg',
          'https://yanxuan-item.nosdn.127.net/cf3e6ebe6a65081c7525bc8d1b648979.jpg',
          'https://yanxuan-item.nosdn.127.net/464984eb6f01fcbcd474adb4abf1ec54.jpg',
          'https://yanxuan-item.nosdn.127.net/eaa0cd1fe64f63ac6e50d40ea6e6b3af.jpg',
          'https://yanxuan-item.nosdn.127.net/244c32196d8e8ba1d58660848086fc4b.jpg',
          'https://yanxuan-item.nosdn.127.net/f0d0455fad4be9d0c996da47342258ef.jpg',
          'https://yanxuan-item.nosdn.127.net/709652b789fd241dedb9af6ce87e5c80.jpg',
          'https://yanxuan-item.nosdn.127.net/5630f459811ca7d47895a46561f63a8d.jpg',
          'https://yanxuan-item.nosdn.127.net/05fa1456462c939beaf12df242414d2c.jpg',
          'https://yanxuan-item.nosdn.127.net/01bea70199a59499cdfcf2510c4a3600.jpg',
          'https://yanxuan-item.nosdn.127.net/78d29fed8441e7f8e45499840c09a760.jpg',
          'https://yanxuan-item.nosdn.127.net/08b5ed4c8ced1ce04a10f174161c66f3.jpg',
          'https://yanxuan-item.nosdn.127.net/9cd151aac0e793907f706166916d4127.jpg',
          'https://yanxuan-item.nosdn.127.net/bde6d50466bd46e2e0480d8a5af4b952.jpg',
          'https://yanxuan-item.nosdn.127.net/832abe1aaad4f49e56c408f4065e6273.jpg',
          'https://yanxuan-item.nosdn.127.net/7974f7983784cf07e64f3572d431a697.jpg',
          'https://yanxuan-item.nosdn.127.net/038097517859bd8598e700bb1310ed67.jpg',
          'https://yanxuan-item.nosdn.127.net/8b858153ce14d600b0c25a73636195f9.jpg',
          'https://yanxuan-item.nosdn.127.net/8052095d5fdc2f5cdb860c83ca00573a.jpg',
          'https://yanxuan-item.nosdn.127.net/8284f3ae2a6a789996bbb40f051e6d8f.jpg',
          'https://yanxuan-item.nosdn.127.net/cb8530264db85e972c05402ea7e5f50d.jpg',
        ],
        properties: [
          {
            name: '礼盒内容物',
            value: '小时光便携钢笔*1支，台历*1份，烫金信封信纸*1份，墨囊*1盒',
          },
          {
            name: '定制说明',
            value:
              '定制仅限一个字母；↵字母样式如下方详情页展示，没有大小写区分，不支持选择字体；↵若订单没有备注，则默认发常规版圆球笔头；',
          },
          {
            name: '墨囊说明',
            value: '钢笔为墨囊上墨，不支持吸墨器；↵配套墨胆为施耐德欧标通用墨囊；',
          },
        ],
      },
      discount: 1,
      evaluationInfo: null,
      hotByDay: [
        {
          desc: '简约纹理时尚“潮&#34;”你而来app',
          id: '3996616',
          name: '保暖系列-女式饼干板鞋加毛款',
          orderNum: 244,
          picture: 'https://yanxuan-item.nosdn.127.net/01f0260802ef8bba164e7c8e1ba8ae20.jpg',
          price: '174.00',
        },
        {
          desc: '茅台飘香，正品溯源app',
          id: '3995885',
          name: '飞天53%vol500ml贵州茅台酒（带杯）',
          orderNum: 1539,
          picture: 'https://yanxuan-item.nosdn.127.net/d46e005025a5d3b73c4781d31b327558.jpg',
          price: '1499.00',
        },
        {
          desc: '全棉面料，高支高密底布，手感柔软舒适，贴身穿着亲肤透气；经典娃娃衫，泡泡袖设计，增添可爱蓬松感；后背全开门襟，方便穿脱。app',
          id: '4007498',
          name: 'ins风小碎花泡泡袖衬110-160cm',
          orderNum: 2006,
          picture: 'https://yanxuan-item.nosdn.127.net/c07edde1047fa1bd0b795bed136c2bb2.jpg',
          price: '99.00',
        },
        {
          desc: '4层180g升级款过渡期随机发货！app',
          id: '1077003',
          name: '谷风一木3层180g卷纸10卷/提',
          orderNum: 155,
          picture: 'https://yanxuan-item.nosdn.127.net/544dc93575aca22f9d3ef614ebf1e362.jpg',
          price: '27.90',
        },
      ],
      id: '3468024',
      inventory: 687619,
      isCollect: false,
      isPreSale: false,
      mainPictures: [
        'https://yanxuan-item.nosdn.127.net/cc1c57b701f202bc585d8fff3b65571e.png',
        'https://yanxuan-item.nosdn.127.net/145f851297a619d1a21b2bd91c915b8b.jpg',
        'https://yanxuan-item.nosdn.127.net/88ddd893a15902fe5048852ceb3b291d.jpg',
        'https://yanxuan-item.nosdn.127.net/2ef4041a0ac5c9313515182b31e1eb36.jpg',
        'https://yanxuan-item.nosdn.127.net/41a5aac6b5f2a8e6144afc936f52954a.png',
      ],
      mainVideos: ['https://yanxuan-item.nosdn.127.net/0a6cb99dc458ea1fd67052cf442c6e11.mp4'],
      name: '意外设计便携钢笔花信礼盒',
      oldPrice: '398.00',
      price: '398.00',
      recommends: null,
      salesCount: 126,
      similarProducts: [
        {
          desc: '凤舞龙翔呈现华丽视觉app',
          id: '3499024',
          name: '创意金属立体拼酷模型',
          orderNum: 4,
          picture: 'https://yanxuan-item.nosdn.127.net/f3784ed01706f2f2722f12410a6429c9.png',
          price: '158.00',
        },
        {
          desc: '精致与优雅随身藏↵4.16-4.19号停止发货app',
          id: '3506005',
          name: '意外设计小时光便携钢笔',
          orderNum: 181,
          picture: 'https://yanxuan-item.nosdn.127.net/f3636b063dad944aa527e4652392a553.png',
          price: '328.00',
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
          desc: '轻薄设计，简约大方app',
          id: '1111002',
          name: '剪出精致感，金致圆柄复古剪刀',
          orderNum: 5,
          picture: 'https://yanxuan-item.nosdn.127.net/4c6a9c8a579b00e5e9c7b002d15a33a2.jpg',
          price: '9.90',
        },
      ],
      skus: [
        {
          id: '3681067',
          inventory: 8485,
          oldPrice: '398.00',
          picture: 'https://yanxuan-item.nosdn.127.net/5e515b44be4fa0c4db4005036cc40f64.png',
          price: '398.00',
          skuCode: '3681067',
          specs: [{ name: '规格', valueName: '红色礼盒黑檀木' }],
        },
        {
          id: '3681068',
          inventory: 3343,
          oldPrice: '398.00',
          picture: 'https://yanxuan-item.nosdn.127.net/814b64dfc13a479c0cb4ff2cd2cdacd5.png',
          price: '398.00',
          skuCode: '3681068',
          specs: [{ name: '规格', valueName: '红色礼盒红花梨木' }],
        },
      ],
      specs: [
        {
          id: '1482379530549198849',
          name: '规格',
          values: [
            {
              desc: '办公文具-销售属性规格-红色礼盒黑檀木-规格属性图片',
              name: '红色礼盒黑檀木',
              picture:
                'https://yanxuan-item.nosdn.127.net/5e515b44be4fa0c4db4005036cc40f64.png?quality=95&imageView',
            },
            {
              desc: '办公文具-销售属性规格-红色礼盒红花梨木-规格属性图片',
              name: '红色礼盒红花梨木',
              picture:
                'https://yanxuan-item.nosdn.127.net/814b64dfc13a479c0cb4ff2cd2cdacd5.png?quality=95&imageView',
            },
          ],
        },
      ],
      spuCode: '3468024',
      userAddresses: [
        {
          address: '13',
          addressTags: null,
          cityCode: '110100',
          contact: '18314730364',
          countyCode: '110101',
          fullLocation: '北京市 北京市 东城区',
          id: '1701768493562597377',
          isDefault: 1,
          postalCode: null,
          provinceCode: '110000',
          receiver: '1213',
        },
        {
          address: '灯辉路银春小区202室',
          addressTags: null,
          cityCode: '310100',
          contact: '18627791111',
          countyCode: '310112',
          fullLocation: '上海市 上海市 闵行区',
          id: '1701498380338860033',
          isDefault: 0,
          postalCode: null,
          provinceCode: '310000',
          receiver: '刘先生',
        },
        {
          address: '1',
          addressTags: null,
          cityCode: '110100',
          contact: '1',
          countyCode: '110101',
          fullLocation: '北京市 北京市 东城区',
          id: '1701559681077481473',
          isDefault: 0,
          postalCode: null,
          provinceCode: '110000',
          receiver: '1',
        },
        {
          address: '33',
          addressTags: null,
          cityCode: '110100',
          contact: '22',
          countyCode: '110101',
          fullLocation: '北京市 北京市 东城区',
          id: '1701604759321972738',
          isDefault: 0,
          postalCode: null,
          provinceCode: '110000',
          receiver: '11',
        },
        {
          address: '444',
          addressTags: null,
          cityCode: '110100',
          contact: '13512345678',
          countyCode: '110101',
          fullLocation: '北京市 北京市 东城区',
          id: '1701604948111790082',
          isDefault: 0,
          postalCode: null,
          provinceCode: '110000',
          receiver: '1110',
        },
        {
          address: '13213',
          addressTags: null,
          cityCode: '110100',
          contact: '1313',
          countyCode: '110101',
          fullLocation: '北京市 北京市 东城区',
          id: '1701748937469202434',
          isDefault: 0,
          postalCode: null,
          provinceCode: '110000',
          receiver: '心头宝',
        },
      ],
      videoScale: 1,
    },
  }
}
