<template>
  <div class="header bg-wrapper" :style="headBGStyle">
    <!-- 顶部通栏 -->
    <TopWrapper />

    <!-- 主题内容 -->
    <div class="content-wrapper">
      <div class="ico" :style="headLogoStyle"></div>
      <div class="name">
        <h3>{{poiInfo.name}}</h3>
      </div>
      <div class="collect">
        <img src="@/static/star.png">
        <span>收藏</span>
      </div>
    </div>

    <!-- 公告内容 -->
    <div class="bulletin-wrapper" v-if="poiInfo.discounts2">
      <img class="ico" :src="poiInfo.discounts2[0].icon_url">
      <span class="text">{{poiInfo.discounts2[0].info}}</span>
      <div class="detail" @click="showBulletin()">
        <span>{{poiInfo.discounts2.length}}个活动</span>
        <span class="icon icon-arrow-right"></span>
      </div>
    </div>

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
.header .bg-wrapper {
    width: 100%;
    height: 150px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    background-size: 100% 135%;
		background-position: center -12px;
}

/* 主题内容 样式 */ 
.header .content-wrapper {
  padding: 17px 10px 11px;
  height: 50px;
}

.header .content-wrapper .ico {
  width: 50px;
  height: 50px;
  background-size: 135% 100%;
  background-position: center;
  border-radius: 5px;
  float: left;
}

.header .content-wrapper .name {
  float: left;
  padding: 18px 0 0 12px;
}

.header .content-wrapper .name h3 {
  font-size: 16px;
  font-weight: bold;
  color: white;
}

.header .content-wrapper .collect {
  width: 25px;
  height: 37px;
  float: right;
  text-align: center;
  padding-top: 6px;
}

.header .content-wrapper .collect img {
  width: 20px;
  height: 20px;
}

.header .content-wrapper .collect span {
  margin-top: 7px;
  color: white;
  font-size: 11px;
}

/* 公告内容样式 */
.header .bulletin-wrapper {
  height: 16px;
  padding: 0 10px;
}

.header .bulletin-wrapper .ico {
  width: 16px;
  height: 16px;
  float: left;
  margin-right: 6px;
}

.header .bulletin-wrapper .text {
  font-size: 11px;
  color: white;
  float: left;
  line-height: 16px;
}

.header .bulletin-wrapper .detail {
  color: white;
  float: right;
  font-size: 11px;
  line-height: 16px;
}

.header .bulletin-wrapper .detail span {
  font-size: 16px;
  line-height: 16px;
  float: right;
}
</style>
