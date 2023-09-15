<script setup lang="ts">
import type { BannerItem } from '@/types/home'
import { ref } from 'vue'
const activeIndex = ref(0)

// 当 swiper 下标发生改变时触发
const onChange: UniHelper.SwiperOnChange = (ev) => {
  // ! 非空断言，主观上排除掉空置情况
  activeIndex.value = ev.detail!.current
}

// 定义 props 接收
defineProps<{ list: BannerItem[] }>()
</script>

<template>
  <view class="carousel">
    <swiper :autoplay="false" :circular="true" :interval="3000" @change="onChange">
      <swiper-item v-for="item in list" :key="item.id">
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="item.imgUrl" />
        </navigator>
      </swiper-item>
    </swiper>
    <view class="indicator">
      <text
        v-for="(item, index) in list"
        :key="item.id"
        class="dot"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>

<style lang="scss">
@import './styles/LzdSwiper.scss';
</style>
