<template>
  <div class="top-wrapper">
    <span class="mt-icon icon-arrow-left back"></span>

    <div class="search-wrapper">
      <span class="mt-icon icon-search search-icon"></span>
      <input type="text" class="search-bar" placeholder="搜索店内商品">
    </div>

    <div class="more-wrapper">
      <span class="spelling-bt">拼单</span>
      <div class="mt-icon icon-more more-bt">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class TopWrapper extends Vue {}
</script>

<style scoped>
.top-wrapper {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
}
.top-wrapper>div,.top-wrapper>span{
  margin: 0 5px;
}

.back {
  color: #FFFFFF;
  width: 30px;
  height: 30px;
  /* 设置不自适应压缩宽度 */
  flex-shrink: 0;
  line-height: 30px;
  text-align: center;
}

.search-wrapper {
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  background: #CCCCCC;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-wrapper .search-icon {
  width: 30px;
  height: 30px;
  /* 设置不自适应压缩宽度 */
  flex-shrink: 0;
  text-align: center;
  line-height: 30px;
  font-size: 18px;
  color: #424242;
}

.search-wrapper .search-bar {
  width: 100%;
  height: 30px;
  padding-left: 2px;
  padding-right: 10px;
  box-sizing: border-box;
  background-color: transparent;
  border: none;
  /* 去除选中时边框*/
  outline: none;
}

.more-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #FFF;
  width: 65px;
  height: 30px;
  /* 设置不自适应压缩宽度 */
  flex-shrink: 0;
}

.more-wrapper .spelling-bt {
  width: 30px;
  font-size: 10px;
  padding: 4px 4px;
  border: 1px solid #FFF;
  text-decoration: none;
  text-align: center;
}

.more-wrapper .more-bt {
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
}
</style>
