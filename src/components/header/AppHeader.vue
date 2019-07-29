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
    <div class="bg-wrapper" :style="headPicture"></div>

    <!-- 公告详情 -->
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class AppHeader extends Vue {
  @Prop(Object) readonly info!: Object

  private get headPicture(): string {
    return `background-image: url(${this.info})`
  }
}
</script>

<style scoped>
.header {
  height: 160px;
  padding-top: 20px;
}
</style>
