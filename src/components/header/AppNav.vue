<template>
  <div class="nav">
    <router-link class="nav-item" :to="{name: 'goods'}">点餐</router-link>
    <router-link class="nav-item" :to="{name: 'ratings'}">评价</router-link>
    <router-link class="nav-item" :to="{name: 'seller'}">商家</router-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class AppNav extends Vue {
}
</script>

<style scoped>
.nav {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 1;
}
.nav-item {
  flex: 1;
  text-align: center;
}
</style>
