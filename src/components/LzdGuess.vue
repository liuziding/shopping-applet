<script setup lang="ts">
import { getHomeGoodsGuessLikeAPI } from '@/services/home'
import type { PageParams } from '@/types/global'
import type { GuessItem } from '@/types/home'
import { onMounted, ref } from 'vue'

// 分页参数
const pageParams: Required<PageParams> = {
  page: 1,
  pageSize: 10,
}

// 获取猜你喜欢数据
const guessList = ref<GuessItem[]>([])
// 是否分页结束
const isFinish = ref(false)
// 是否加载中标记，用于防止滚动触底触发多次请求
const isLoading = ref(false)
// 获取猜你喜欢数据
const getHomeGoodsGuessLikeData = async () => {
  // 如果数据出于加载中，退出函数
  if (isLoading.value) return
  // 退出判断
  if (isFinish.value === true) {
    return uni.showToast({ icon: 'none', title: '没有更多数据～' })
  }
  // 发送请求前，标记为加载中
  isLoading.value = true
  // 发送请求
  const res = await getHomeGoodsGuessLikeAPI(pageParams)
  // 发送请求后，重置标记
  isLoading.value = false
  // 数组追加
  guessList.value.push(...res.result.items)
  if (pageParams.page < res.result.pages) {
    // 页码累加
    pageParams.page++
  } else {
    // 分页已结束
    isFinish.value = true
  }
}

// 重置数据
const resetData = () => {
  pageParams.page = 1
  guessList.value = []
  isFinish.value = false
}

// 组件挂载完毕
onMounted(() => {
  getHomeGoodsGuessLikeData()
})

// 暴露方法
defineExpose({
  resetData,
  getMore: getHomeGoodsGuessLikeData,
})
</script>

<template>
  <!-- 猜你喜欢 -->
  <view class="caption">
    <i class="iconfont icon-xihuan"></i>
    <text class="text">猜你喜欢</text>
    <i class="iconfont icon-xihuan"></i>
  </view>
  <view class="guess">
    <navigator
      class="guess-item"
      v-for="item in guessList"
      :key="item.id"
      :url="`/pages/goods/goods?id=${item.id}`"
    >
      <image class="image" mode="aspectFill" :src="item.picture" />
      <view class="name">{{ item.name }}</view>
      <view class="price">
        <text class="small">¥</text>
        <text>{{ item.price }}</text>
      </view>
    </navigator>
  </view>
  <view class="loading-text">{{ isFinish ? '到底了～' : '正在加载...' }}</view>
</template>

<style lang="scss">
:host {
  display: block;
}
/* 分类标题 */
.caption {
  display: flex;
  justify-content: center;
  line-height: 1;
  padding: 36rpx 0 40rpx;
  font-size: 32rpx;
  color: #262626;
  .icon-xihuan {
    color: #f99144;
  }
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16rpx 0 16rpx;
  }
}

/* 猜你喜欢 */
.guess {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx;

  .guess-item {
    width: 345rpx;
    padding: 24rpx 20rpx 20rpx;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
    overflow: hidden;
    background-color: #fff;
  }
  .image {
    width: 304rpx;
    height: 260rpx;
  }
  .name {
    height: 75rpx;
    margin: 10rpx 0;
    font-size: 26rpx;
    color: #262626;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price {
    line-height: 1;
    padding-top: 4rpx;
    color: #cf4444;
    font-size: 26rpx;
  }
  .small {
    font-size: 80%;
  }
}
// 加载提示文字
.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0;
}
</style>
