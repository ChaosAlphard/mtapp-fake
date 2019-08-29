<template>
  <div id="app">
    <!-- 头部 -->
    <AppHeader class="header" :info="info.poi_info"/>
    <!-- 导航 -->
    <AppNav class="nav"/>
    <!-- 内容 -->
    <div class="content">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"
        :info="info.food_spu_tags?info:''">
        </router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"
      :info="info.food_spu_tags?info:''">
      </router-view>
    </div>
    <!-- 提示 -->
    <ShowMsg />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import AppHeader from '@/components/AppHeader.vue'
import AppNav from '@/components/AppNav.vue'
import ShowMsg from '@/components/ShowMsg.vue'

@Component({
  components: {
    AppHeader,
    AppNav,
    ShowMsg
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
      } else {
        this.$evt.$emit('showMsg', 'Error: 请求数据失败')
      }
    }).catch(err => {
      this.$evt.$emit('showMsg', 'Error: 网络异常')
    })
  }

  errorCaptured(err: Error, vm: any, info: string): void|boolean {
    console.warn(err, vm, info)
    // 返回false 以阻止继续向上传播
    return false
  }
}
</script>

<style scoped>
#app {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100vw;
}
.header, .nav, .content {
  width: 100%;
}
.header, .nav {
  flex-shrink: 0;
}
.nav {
  position: sticky;
  top: 0;
}
.content {
  flex-grow: 1;
  /* overflow: auto; */
}
</style>
