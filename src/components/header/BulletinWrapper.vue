<template>
  <div class="bulletin-wrapper" v-if="discounts">
    <div class="info" @click="showBulletin()">
      <span>{{discounts.length?discounts.length:0}}个活动</span>
      <span class="mt-icon icon-arrow-right more"></span>
    </div>
    <div class="detail">
      <img class="icon" :src="discounts[0].icon_url">
      <span class="text">{{discounts[0].info}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class BulletinWrapper extends Vue {
  @Prop() readonly discounts!: any

  showBulletin(): void {
    this.$evt.$emit("showBulletin", true)
  }
}
</script>

<style scoped>
.bulletin-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 45px;
  padding: 0 10px;
}

.info {
  color: #FFF;
}

.info .more {
  font-size: 14px;
}

.detail {
  color: white;
  font-size: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.detail .icon {
  width: 16px;
  height: 16px;
  border-radius: 3px;
  margin-right: 5px;
}
</style>
