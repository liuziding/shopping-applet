<script setup lang="ts">
import type { CategoryItem } from '@/types/home'
// 定义 props 接收
defineProps<{ list: CategoryItem[] }>()
</script>

<template>
  <view class="categroy">
    <navigator
      url="/pages/index/index"
      class="categroy-item"
      hover-class="none"
      v-for="item in list"
      :key="item.id"
    >
      <image class="icon" :src="item.icon" />
      <text class="text">{{ item.name }}</text>
    </navigator>
  </view>
</template>

<style lang="scss">
/* 前台类目 */
.categroy {
  margin: 20rpx 0 0;
  padding: 10rpx 0;
  display: flex;
  flex-wrap: wrap;
  min-height: 328rpx;
  .categroy-item {
    width: 20%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    .icon {
      width: 100rpx;
      height: 100rpx;
    }
    .text {
      font-size: 26rpx;
      color: #666;
    }
  }
}
</style>
