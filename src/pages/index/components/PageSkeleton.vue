<template name="skeleton">
  <view class="skeleton-top"></view>
  <view is="components/LzdSwiper">
    <view class="carousel LzdSwiper--carousel">
      <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
        <swiper-item
          style="
            position: absolute;
            width: 100%;
            height: 100%;
            transform: translate(0%, 0px) translateZ(0px);
          "
        >
          <navigator class="navigator LzdSwiper--navigator" hover-class="none">
            <image class="image LzdSwiper--image sk-image" mode="aspectFill"></image>
          </navigator>
        </swiper-item>
      </swiper>
      <view class="indicator LzdSwiper--indicator">
        <text class="dot LzdSwiper--dot active LzdSwiper--active"></text>
        <text class="dot LzdSwiper--dot"></text>
        <text class="dot LzdSwiper--dot"></text>
        <text class="dot LzdSwiper--dot"></text>
        <text class="dot LzdSwiper--dot"></text>
      </view>
    </view>
  </view>
  <view is="pages/index/components/CategoryPanel">
    <view class="categroy CategoryPanel--categroy">
      <navigator class="categroy-item CategoryPanel--categroy-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-879 sk-text"
          >居家</text
        >
      </navigator>
      <navigator class="categroy-item CategoryPanel--categroy-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-747 sk-text"
          >锦鲤</text
        >
      </navigator>
      <navigator class="categroy-item CategoryPanel--categroy-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-112 sk-text"
          >服饰</text
        >
      </navigator>
      <navigator class="categroy-item CategoryPanel--categroy-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-355 sk-text"
          >母婴</text
        >
      </navigator>
      <navigator class="categroy-item CategoryPanel--categroy-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-182 sk-text"
          >个护</text
        >
      </navigator>
      <navigator class="categroy-item CategoryPanel--categroy-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-601 sk-text"
          >严选</text
        >
      </navigator>
      <navigator class="categroy-item CategoryPanel--categroy-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-236 sk-text"
          >数码</text
        >
      </navigator>
      <navigator class="categroy-item CategoryPanel--categroy-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-680 sk-text"
          >运动</text
        >
      </navigator>
      <navigator class="categroy-item CategoryPanel--categroy-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-158 sk-text"
          >杂项</text
        >
      </navigator>
      <navigator class="categroy-item CategoryPanel--categroy-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-190 sk-text"
          >品牌</text
        >
      </navigator>
    </view>
  </view>
  <view is="pages/index/components/HotPanel">
    <view class="panel HotPanel--panel hot HotPanel--hot">
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-404 sk-text"
            >特惠推荐</text
          >
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-974 sk-text"
            >精选全攻略</text
          >
        </view>
        <navigator class="cards HotPanel--cards">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-757 sk-text"
            >爆款推荐</text
          >
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-106 sk-text"
            >最受欢迎</text
          >
        </view>
        <navigator class="cards HotPanel--cards">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-59 sk-text"
            >一站买全</text
          >
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-617 sk-text"
            >精心优选</text
          >
        </view>
        <navigator class="cards HotPanel--cards">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-6 sk-text"
            >新鲜好物</text
          >
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-635 sk-text"
            >生活加分项</text
          >
        </view>
        <navigator class="cards HotPanel--cards">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
    </view>
  </view>
  <view is="components/LzdGuess" class="r">
    <view class="caption LzdGuess--caption">
      <text
        class="text LzdGuess--text sk-transparent sk-text-0-0000-618 sk-text sk-pseudo sk-pseudo-circle"
        >猜你喜欢</text
      >
    </view>
  </view>
</template>

<style>
.skeleton-top {
  height: 280rpx;
  width: 100%;
  background: #efefef !important;
}
.sk-transparent {
  color: transparent !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
