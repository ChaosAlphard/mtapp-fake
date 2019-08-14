<template>
  <div class="header bg-wrapper" :style="headBGStyle">
    <!-- 顶部通栏 -->
    <!-- v-once: 只渲染该元素一次 -->
    <!-- v-pre: 跳过这个元素和它的子元素的编译过程 -->
    <TopWrapper v-pre/>

    <!-- 主题内容 -->
    <ContentWrapper :name="info?info.name:''" :logoStyle="headLogoStyle"/>

    <!-- 公告内容 -->
    <BulletinWrapper :discounts="info?info.discounts2:''"/>

    <!-- 公告详情 -->
    <BulletinDetail :info="info?info:''"
    :logoStyle="headLogoStyle" :detailBg="detailBGStyle"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import TopWrapper from './header/TopWrapper.vue'
import ContentWrapper from './header/ContentWrapper.vue'
import BulletinWrapper from './header/BulletinWrapper.vue'
import BulletinDetail from './header/BulletinDetail.vue'

@Component({
  components: {
    TopWrapper,
    ContentWrapper,
    BulletinWrapper,
    BulletinDetail
  }
})
export default class AppHeader extends Vue {
  @Prop() readonly info!: any

  headBGStyle: string = ''
  headLogoStyle: string = ''
  detailBGStyle: string = ''

  @Watch('info')
  onInfoChange(value: any) {
    this.headBGStyle = `background-image: url(${value.head_pic_url})`
    this.headLogoStyle = `background-image: url(${value.pic_url})`
    this.detailBGStyle = `background-image: url(${value.poi_back_pic_url})`
  }
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
</style>
