<template>
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
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ContentWrapper extends Vue {}
</script>

<style scoped>
.content-wrapper {
  padding: 17px 10px 11px;
  height: 50px;
}

.content-wrapper .ico {
  width: 50px;
  height: 50px;
  background-size: 135% 100%;
  background-position: center;
  border-radius: 5px;
  float: left;
}

.content-wrapper .name {
  float: left;
  padding: 18px 0 0 12px;
}

.content-wrapper .name h3 {
  font-size: 16px;
  font-weight: bold;
  color: white;
}

.content-wrapper .collect {
  width: 25px;
  height: 37px;
  float: right;
  text-align: center;
  padding-top: 6px;
}

.content-wrapper .collect img {
  width: 20px;
  height: 20px;
}

.content-wrapper .collect span {
  margin-top: 7px;
  color: white;
  font-size: 11px;
}
</style>