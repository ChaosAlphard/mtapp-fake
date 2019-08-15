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
          <div class="tip">
            <div class="tip-price">
              {{info.min_price_tip}} |
              {{info.shipping_fee_tip}} |
              {{info.delivery_time_tip}}
            </div>
            <div class="tip-time">
              配送时间: {{info.shipping_time}}
            </div>
          </div>

          <div class="discounts-wrapper"
          v-if="info.discounts2&&info.discounts2.length>0">
            <div class="discounts-info" v-for="(item,i) in info.discounts2" :key="i+item.info">
              <img class="icon" :src="item.icon_url" >
              <span>{{item.info}}</span>
            </div>
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

.main-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;
}

.main-wrapper .icon {
  width: 60px;
  height: 60px;
  background-size: cover;
  background-position: center center;
  border-radius: 5px;
}

.main-wrapper .name {
  color: white;
  margin-top: 10px;
  margin-bottom: 5px;
}

.main-wrapper .score {
  margin-bottom: 5px;
}

.main-wrapper .score > span:nth-last-child(1) {
  color: #FFF;
  font-size: 10px;
  margin-left: 5px;
}

.main-wrapper .tip {
  font-size: 12px;
  color: #FFF;
  text-align: center;
}

.main-wrapper .tip .tip-price {
  margin-bottom: 5px;
}

.main-wrapper .discounts-wrapper {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px 10px 0;
  border-top: 1px solid #FFF;
}

.discounts-wrapper .discounts-info {
  color: #FFF;
  font-size: 12px;
  color: white;
  font-size: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.discounts-info .icon {
  width: 16px;
  height: 16px;
  border-radius: 3px;
  margin-right: 5px;
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
