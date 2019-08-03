<template>
  <div class="header bg-wrapper" :style="headBGStyle">
    <!-- 顶部通栏 -->
    <div class="top-wrapper">
      <div class="back-wrapper">
        <span class="icon icon-arrow-left"></span>
      </div>

      <form class="search-wrapper">
        <span class="search-icon"></span>
        <input type="text" class="search-bar" placeholder="搜索店内商品">
      </form>

      <div class="more-wrapper">
        <a href="#" class="spelling-bt">拼单</a>
        <div class="more-bt">
          <i class="s-radius"></i>
          <i class="s-radius"></i>
          <i class="s-radius"></i>
        </div>
      </div>
    </div>

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
    <transition name="bulletin-detail">
      <div class="bulletin-detail" v-show="isShow">

        <div class="detail-wrapper">
          <div class="main-wrapper" :style="detailBGStyle">
            <div class="class" :style="headLogoStyle">
              <!--  -->
            </div>
          </div>
        </div>

        <div class="close-wrapper">
          <span class="icon icon-close" @click="closeBulletin()"></span>
        </div>
      </div>

    </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Star from '@/components/Star.vue'

@Component({
  components: {
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
</style>
