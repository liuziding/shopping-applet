import type { PageParams, GoodsItem } from './global'

/** 热门推荐-子嘞选项 */
export type SubTypeItem = {
  /** 子类 id */
  id: string
  /** 子类标题 */
  title: string
  /** 子类对应的商品集合 */
  goodsItems: PageResult<GoodsItem>
}

/** 热门推荐 */
export type HotResult = {
  /** id 信息 */
  id: string
  /** 活动图片 */
  bannerPicture: string
  /** 活动标题 */
  title: string
  /** 子类选项 */
  subTypes: SubTypeItem[]
}
