// 订单列表(包括全部)
export const ALL_ORDER_TYPEDS = [
  { orderState: 0, title: '全部', isRender: false },
  { orderState: 1, title: '待付款', isRender: false },
  { orderState: 2, title: '待发货', isRender: false },
  { orderState: 3, title: '待收货', isRender: false },
  { orderState: 4, title: '待评价', isRender: false },
]

// 订单列表（不包括全部）
export const ORDER_TYPEDS = [
  { type: '1', text: '待付款', icon: 'icon-daizhifu' },
  { type: '2', text: '待发货', icon: 'icon-daifahuo' },
  { type: '3', text: '待收货', icon: 'icon-daishouhuo' },
  { type: '4', text: '待评价', icon: 'icon-daipingjia' },
]
