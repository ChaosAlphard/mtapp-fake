<template>
  <div class="header">
    <!-- 顶部通栏 -->
    <div class="top-wrapper">
      <div class="back-wrapper">
        <span class="icon icon-arrow-left"></span>
      </div>

      <form class="search-wrapper">
        <span class="search-cion"></span>
        <input type="text" class="search-bar">
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

    <!-- 公告内容 -->

    <!-- 背景内容 -->
    <div class="bg-wrapper" :style="headPicStyle"></div>

    <!-- 公告详情 -->
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class AppHeader extends Vue {
  @Prop() readonly info!: any

  private get headPicStyle(): string {
    if(this.info.poi_info) {
      return `background-image: url(${this.info.poi_info.head_pic_url})`
    } else {
      return ``
    }
  }
}
</script>

<style scoped>
.header {
  height: 160px;
  padding-top: 20px;
}

.bg-wrapper {
  height: 100px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: scroll;
}
</style>
