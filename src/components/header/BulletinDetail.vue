<template>
  <transition name="fade">
    <div class="bulletin-detail" v-if="isShow">

      <div class="detail-wrapper bg-wrapper" :style="detailBg">
        <div class="main-wrapper">
          <div class="icon" :style="logoStyle"></div>
          <span class="name">{{info.name}}</span>
          <!-- 星级评价 -->
          <div class="score">
            <Star :score="info.wm_poi_score"/>
            <span>{{info.wm_poi_score}}</span>
          </div>
          <!-- Tips -->
          <div class="top">
            {{info.min_price_tip}} |
            {{info.shipping_fee_tip}} |
            {{info.delivery_time_tip}}
          </div>

          <div>
            配送时间: {{info.shipping_time}}
          </div>
        </div>

        <span class="mt-icon icon-close-circle-outline close"
        @click="toggleBulletinShowing(false)"></span>
      </div>

    </div>
  </transition>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Star from '@/components/Star.vue'

@Component({
  components: {
    Star
  }
})
export default class BulletinDetail extends Vue {
  @Prop() readonly info!: any
  @Prop() readonly logoStyle!: string
  @Prop() readonly detailBg!: string

  private isShow = false

  private toggleBulletinShowing(flag: boolean): void {
    this.isShow = flag
  }

  mounted(): void {
    this.$evt.$on("showBulletin", this.toggleBulletinShowing)
  }
}
</script>

<style scoped>
.bulletin-detail {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0; left: 0;
  right: 0; bottom: 0;
  background: #626262CC;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 450;
}

.detail-wrapper {
  position: relative;
  width: 80vw;
  height: 85vh;
  box-sizing: border-box;
  border-radius: 20px;
}

.bg-wrapper {
  background-color: #9A3B38;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: scroll;
}

/* TODO */
.detail-wrapper .main-wrapper {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  border-radius: 10px;
  text-align: center;
}

.detail-wrapper .main-wrapper .icon {
  width: 60px;
  height: 60px;
  background-size: 135% 100%;
  background-position: center;
  border-radius: 5px;
  display: inline-block;
  margin-top: 40px;
}

.detail-wrapper .main-wrapper .name {
  font-size: 15px;
  color: white;
  margin-top: 13px;
}

.detail-wrapper .main-wrapper .score {
  height: 10px;
  margin-top: 6px;
  text-align: center;
  font-size: 0;
}

.detail-wrapper .main-wrapper .score .star {
  display: inline-block;
  margin-right: 7px;
}

.detail-wrapper .main-wrapper .score span {
  display: inline-block;
  font-size: 10px;
  color: white;
}

.detail-wrapper .main-wrapper .tip {
  font-size: 11px;
  color: #bababc;
  margin-top: 8px;
}

.detail-wrapper .main-wrapper .tip i {
  margin: 0 7px;
}

.detail-wrapper .main-wrapper .time {
  font-size: 11px;
  color: #bababc;
  margin-top: 13px;
}

.detail-wrapper .main-wrapper .discounts {
  margin-top: 20px;
  padding: 0 20px;
}

.detail-wrapper .main-wrapper .discounts p {
  padding-top: 20px;
  border-top: 1px solid #BABABC;
}

.detail-wrapper .main-wrapper .discounts img {
  width: 16px;
  height: 16px;
  vertical-align: middle;
}

.detail-wrapper .main-wrapper .discounts span {
  font-size: 11px;
  line-height: 16px;
  color: white;
}

/* 关闭按钮 */
.detail-wrapper .close {
  position: absolute;
  top: -15px; right: -15px;
  font-size: 40px;
  color: #FFF;
}

/* 动画效果 */ 
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease-in-out;
}
</style>
