<template>
  <div id="app">
    <!-- 头部 -->
    <AppHeader :info="info.poi_info"/>
    <!-- 导航 -->
    <AppNav/>
    <!-- 内容 -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import AppHeader from '@/components/AppHeader.vue'
import AppNav from '@/components/AppNav.vue'

@Component({
  components: {
    AppHeader,
    AppNav
  }
})
export default class App extends Vue {
  info: any = {}

  private created(): void {
    this.$axios.get('/goods.json')
    .then(res => {
      if(res.data.code === 0) {
        this.info = res.data.data
        console.log(this.info)
      }
    })
  }
}
</script>

<style>
</style>
