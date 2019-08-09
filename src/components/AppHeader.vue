<template>
  <div class="header bg-wrapper" :style="headBGStyle">
    <!-- 顶部通栏 -->
    <TopWrapper />

    <!-- 主题内容 -->
    <ContentWrapper :name="info?info.name:''" :logoStyle="headLogoStyle"/>

    <!-- 公告内容 -->
    <!-- <BulletinWrapper /> -->

    <!-- 背景内容 -->
    <!-- <div class="bg-wrapper" :style="headBGStyle"></div> -->

    <!-- 公告详情 -->
    <!-- <BulletinDetail :poiInfo="poiInfo"/> -->
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
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
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

  headBGStyle: string = ''
  headLogoStyle: string = ''
  detailBGStyle: string = ''

  private isShow: boolean = false

  showBulletin(): void {
    this.isShow = true
  }

  closeBulletin(): void {
    this.isShow = false
  }

  @Watch('info')
  onInfoChange(value: any) {
    this.headBGStyle = `background-image: url(${value.head_pic_url})`
    this.headLogoStyle = `background-image: url(${value.pic_url})`
    this.detailBGStyle = `background-image: url(${value.poi_back_pic_url})`
  }

  // private get poiInfo(): any {
  //   if(this.info&&this.info.poi_info) {
  //     return this.info.poi_info
  //   } else {
  //     // !!{} = true, !!'' = false
  //     // {}.unexist == ''.unexist == undefined
  //     return ''
  //   }
  // }
  // header背景图
  // private get headBGStyle(): string {
  //   return this.poiInfo ?
  //   `background-image: url(${this.poiInfo.head_pic_url})` : ''
  // }
  // header Logo
  // private get contentInfo(): object {
  //   return this.poiInfo ? {
  //     name: this.poiInfo.name,
  //     headLogoStyle: `background-image: url(${this.poiInfo.pic_url})`
  //   } : {}
  // }
  // detail背景图
  // private get detailBGStyle(): string {
  //   return this.poiInfo ?
  //   `background-image: url(${this.poiInfo.poi_back_pic_url})` : ''
  // }
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
  // private mounted(): void {
  //   console.log(this.info)
  // }
}
</script>

<style scoped>
.header {
  height: 160px;
  padding-top: 20px;
  position: relative;
}

.bg-wrapper {
  background-color: #251712;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: scroll;
}

.header div {
  outline: 1px solid red
}
</style>
