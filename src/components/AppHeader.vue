<template>
  <div class="header bg-wrapper" :style="headBGStyle">
    <!-- 顶部通栏 -->
    <TopWrapper />

    <!-- 主题内容 -->
    <ContentWrapper />

    <!-- 公告内容 -->
    <BulletinWrapper />

    <!-- 背景内容 -->
    <!-- <div class="bg-wrapper" :style="headBGStyle"></div> -->

    <!-- 公告详情 -->
    <BulletinDetail :poiInfo="poiInfo"/>
    <!-- <transition name="bulletin-detail">
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

    </transition> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import TopWrapper from './header/TopWrapper.vue'
import ContentWrapper from './header/ContentWrapper.vue'
import BulletinWrapper from './header/BulletinWrapper.vue'
import BulletinDetail from './header/BulletinDetail.vue'
import Star from './Star.vue'

@Component({
  components: {
    TopWrapper,
    ContentWrapper,
    BulletinWrapper,
    BulletinDetail,
    Star
  }
})
export default class AppHeader extends Vue {
  @Prop() readonly info!: any

  private isShow: boolean = false

  showBulletin(): void {
    this.isShow = true
  }

  closeBulletin(): void {
    this.isShow = false
  }

  private get poiInfo(): any {
    if(this.info&&this.info.poi_info) {
      return this.info.poi_info
    } else {
      // !!{} = true, !!'' = false
      // {}.unexist == ''.unexist == undefined
      return ''
    }
  }
  // header背景图
  private get headBGStyle(): string {
    return this.poiInfo ?
    `background-image: url(${this.poiInfo.head_pic_url})` : ''
  }
  // header Logo
  private get headLogoStyle(): string {
    return this.poiInfo ?
    `background-image: url(${this.poiInfo.pic_url})` : ''
  }
  // detail背景图
  private get detailBGStyle(): string {
    return this.poiInfo ?
    `background-image: url(${this.poiInfo.poi_back_pic_url})` : ''
  }
  // 活动数统计
  // private get poiCount(): string|number {
  //   const poi = this.info.poi_info
  //   if(poi&&poi.discounts2) {
  //     return poi.discounts2.length
  //   } else {
  //     return 0
  //   }
  // }

  // 生命周期钩子函数
  private mounted(): void {
    this.$evt
    console.warn(this.info)
  }
}
</script>

<style scoped>
.header {
  height: 160px;
  padding-top: 20px;
}

.bg-wrapper {
  /* height: 100px; */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: scroll;
}


/* 背景图片样式 */ 
/* .header .bg-wrapper {
    width: 100%;
    height: 150px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    background-size: 100% 135%;
    background-position: center -12px;
} */
</style>
