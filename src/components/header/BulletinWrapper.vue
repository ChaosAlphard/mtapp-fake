<template>
  <div class="bulletin-wrapper" v-if="poiInfo.discounts2">
    <img class="ico" :src="poiInfo.discounts2[0].icon_url">
    <span class="text">{{poiInfo.discounts2[0].info}}</span>
    <div class="detail" @click="showBulletin()">
      <span>{{poiInfo.discounts2.length}}个活动</span>
      <span class="icon icon-arrow-right"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class BulletinWrapper extends Vue {}
</script>

<style scoped>
.bulletin-wrapper {
  height: 16px;
  padding: 0 10px;
}

.bulletin-wrapper .ico {
  width: 16px;
  height: 16px;
  float: left;
  margin-right: 6px;
}

.bulletin-wrapper .text {
  font-size: 11px;
  color: white;
  float: left;
  line-height: 16px;
}

.bulletin-wrapper .detail {
  color: white;
  float: right;
  font-size: 11px;
  line-height: 16px;
}

.bulletin-wrapper .detail span {
  font-size: 16px;
  line-height: 16px;
  float: right;
}
</style>
