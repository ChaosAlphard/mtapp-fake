<template>
  <div id="app">
    <!-- 头部 -->
    <AppHeader class="header" :info="info"/>
    <!-- 导航 -->
    <AppNav class="nav" :num="commentCount"/>
    <!-- 内容 -->
    <div class="content">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
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
  commentCount: number = 0

  getIntro(): void {
    this.$axios.get('/intro.json')
    .then(res => {
      if(res.data.code === 0) {
        this.info = res.data.data.poi_info
        this.commentCount = res.data.data.comment_num
      } else {
        this.$evt.$emit('showMsg', 'Error: 请求数据失败')
      }
    }).catch(err => {
      this.$evt.$emit('showMsg', 'Error: 网络异常')
    })
  }

  private created(): void {
    this.getIntro()
  }

  errorCaptured(err: Error, vm: any, info: string): void|boolean {
    console.log('%cErrorCaptured:','color:#F44',)
    console.warn(err, vm, info)
    // 返回false 以阻止继续向上传播
    return false
  }
}
</script>

<style scoped>
#app {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: column;
}

.header, .nav {
  flex-shrink: 0;
}

.content {
  flex-grow: 1;
  position: relative;
  overflow: hidden;
}
</style>
