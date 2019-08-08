<template>
  <transition name="fade">
    <div class="bulletin-detail" v-show="isShow">

      <div class="detail-wrapper">
        <div class="main-wrapper" :style="detailBGStyle">
          <div class="ico" :style="headLogoStyle">
            <h3 class="name">{{poiInfo.name}}</h3>
          </div>
        </div>
      </div>

      <div class="close-wrapper">
        <span class="icon icon-close" @click="closeBulletin()"></span>
      </div>
    </div>

  </transition>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class BulletinDetail extends Vue {}
</script>

<style scoped>
/* 公告详情 样式 */ 
.bulletin-detail {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(98, 98, 98, 0.8);
  z-index: 999;
}

.bulletin-detail .detail-wrapper {
  width: 100%;
  height: 100%;
  padding: 43px 20px 125px;
  box-sizing: border-box;
}

.bulletin-detail .detail-wrapper .main-wrapper {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  border-radius: 10px;
  text-align: center;
}

.bulletin-detail .detail-wrapper .main-wrapper .ico {
  width: 60px;
  height: 60px;
  background-size: 135% 100%;
  background-position: center;
  border-radius: 5px;
  display: inline-block;
  margin-top: 40px;
}

.bulletin-detail .detail-wrapper .main-wrapper .name {
  font-size: 15px;
  color: white;
  margin-top: 13px;
}

.bulletin-detail .detail-wrapper .main-wrapper .score {
  height: 10px;
  margin-top: 6px;
  text-align: center;
  font-size: 0;
}

.bulletin-detail .detail-wrapper .main-wrapper .score .star {
  display: inline-block;
  margin-right: 7px;
}

.bulletin-detail .detail-wrapper .main-wrapper .score span {
  display: inline-block;
  font-size: 10px;
  color: white;
}

.bulletin-detail .detail-wrapper .main-wrapper .tip {
  font-size: 11px;
  color: #bababc;
  margin-top: 8px;
}

.bulletin-detail .detail-wrapper .main-wrapper .tip i {
  margin: 0 7px;
}

.bulletin-detail .detail-wrapper .main-wrapper .time {
  font-size: 11px;
  color: #bababc;
  margin-top: 13px;
}

.bulletin-detail .detail-wrapper .main-wrapper .discounts {
  margin-top: 20px;
  padding: 0 20px;
}

.bulletin-detail .detail-wrapper .main-wrapper .discounts p {
  padding-top: 20px;
  border-top: 1px solid #BABABC;
}

.bulletin-detail .detail-wrapper .main-wrapper .discounts img {
  width: 16px;
  height: 16px;
  vertical-align: middle;
}

.bulletin-detail .detail-wrapper .main-wrapper .discounts span {
  font-size: 11px;
  line-height: 16px;
  color: white;
}

.bulletin-detail .detail-wrapper .close-wrapper {
  padding-top: 20px;
  height: 40px;
  text-align: center;
}

.bulletin-detail .detail-wrapper .close-wrapper span {
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  font-size: 14px;
  color: white;
  display: inline-block;
  background: rgba(118, 118, 118, 0.7);
  border: 1px solid rgba(140, 140, 140, 0.9);
}

/* 动画效果 */ 
.fade-enter-active,
.fade-leave-active {
  transition: .5s all;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>
