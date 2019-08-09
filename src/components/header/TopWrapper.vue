<template>
  <div class="top-wrapper">
    <span class="back icon icon-arrow-left"></span>

    <div class="search-wrapper">
      <span class="mt-icon icon-search search-icon"></span>
      <input type="text" class="search-bar" placeholder="搜索店内商品">
    </div>

    <div class="more-wrapper">
      <span class="spelling-bt">拼单</span>
      <div class="more-bt">
        <span class="s-radius"></span>
        <span class="s-radius"></span>
        <span class="s-radius"></span>
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
  /* background: url("../../static/search.png") no-repeat center center; */
  /* background-size: 15px 15px; */
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
  width: 75px;
  height: 30px;
  /* 设置不自适应压缩宽度 */
  flex-shrink: 0;
}

.more-wrapper .spelling-bt {
  width: 30px;
  font-size: 10px;
  padding: 4px 4px;
  color: #FFF;
  border: 1px solid #FFF;
  text-decoration: none;
  text-align: center;
}

.more-wrapper .more-bt {
  width: 30px;
  height: 20px;
  line-height: 15px;
  text-align: center;
}

.more-wrapper .more-bt .s-radius {
  display: inline-block;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  border: 1px solid white;
  margin: 1px;
}
</style>
