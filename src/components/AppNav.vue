<template>
  <div class="nav">
    <router-link class="nav-item" :to="{name: 'goods'}">点餐</router-link>
    <router-link class="nav-item" :to="{name: 'ratings'}">评价({{num}})</router-link>
    <router-link class="nav-item" :to="{name: 'seller'}">商家</router-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class AppNav extends Vue {
  @Prop({default: 0}) readonly num!: number
}
</script>

<style scoped>
.nav {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 2px solid #E4E4E4;
  box-sizing: border-box;
  background-color: #FFFFFF;
}
.nav-item {
  position: relative;
  flex: 1;
  text-align: center;
  text-decoration: none;
  color: #666666
}
/* 选中 */
.nav .active{
  color: #FFBB22
}
.nav .active::before {
  content: '';
  position: absolute;
  top:0; left:40%; right:40%; bottom:0;
  box-sizing: border-box;
  border-bottom: 2px solid #FFBB22
}
</style>
