<template>
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
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

// @Component
export default class TopWrapper extends Vue {}
</script>

<style scoped>
.top-wrapper {
  position: relative;
}

.top-wrapper .back-wrapper {
  position: absolute;
  left: 0; top: 0;
  width: 50px;
  height: 31px;
  padding: 15px;
  /* text-align: center; */
  /* line-height: 31px; */
}

.top-wrapper .back-wrapper span {
  display: inline-block;
  color: white;
}

.top-wrapper .search-wrapper {
  width: 100%;
  height: 31px;
  /* background: pink; */
  padding: 0 104px 0 50px;
  /* 设置盒子从边框开始计算*/
  box-sizing: border-box;
}

.top-wrapper .search-wrapper .search-icon {
  width: 28px;
  height: 31px;
  background: url(/static/star.png) no-repeat 11px center;
  background-size: 13px 13px;
  position: absolute;
}

.top-wrapper .search-wrapper .search-bar {
  width: 100%;
  height: 31px;
  border: 0;
  /* 设置盒子从边框开始计算*/
  box-sizing: border-box;
  background: #cdcdcc;
  border-radius: 25px;
  padding-left: 28px;
  /* 去除选中时蓝色边框*/
  outline: none;
}

.top-wrapper .more-wrapper {
  width: 65px;
  height: 24px;
  /* background: orange; */
  position: absolute;
  right: 0;
  top: 0;
  padding: 7px 15px 0 24px;
}

.top-wrapper .more-wrapper .spelling-bt {
  width: 30px;
  height: 17px;
  color: white;
  line-height: 17px;
  border: 1px solid white;
  text-align: center;
  float: left;
  text-decoration: none;
  font-size: 10px;
}

.top-wrapper .more-wrapper .more-bt {
  float: right;
  width: 20px;
  height: 24px;
  margin-left: 13px;
  margin-top: 6px;
}

.top-wrapper .more-wrapper .more-bt .s-radius {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  border: 1px solid white;
  display: block;
  float: left;
  margin-right: 1px;
}
</style>
