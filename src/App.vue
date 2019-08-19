<template>
  <div id="app">
    <!-- 头部 -->
    <AppHeader :info="info.poi_info"/>
    <!-- 导航 -->
    <AppNav/>
    <!-- 内容 -->
    <div class="content">
      <keep-alive>
        <router-view :info="info"></router-view>
      </keep-alive>
    </div>
    <!-- 提示 -->
    <div id="tip-content" ref="tip"></div>
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

  private showMessage(msg: string): void {
    const tip = this.$refs.tip as HTMLDivElement
    const inner = document.createElement('span')
    inner.classList.add('tip-text')
    inner.innerText = msg
    inner.style.opacity = '0'
    tip.appendChild(inner)
    setTimeout(() => {
      inner.style.opacity = '1'
    }, 0);
    setTimeout(()=>{
      inner.style.opacity = '0'
    },1500)
    setTimeout(() => {
      tip.removeChild(inner)
    }, 2000);
  }

  private created(): void {
    this.$axios.get('/goods.json')
    .then(res => {
      if(res.data.code === 0) {
        this.info = res.data.data
        console.log(this.info)
      } else {
        this.showMessage('Error: 请求数据失败')
      }
    }).catch(err => {
      this.showMessage('Error: 网络异常')
    })
  }
}
</script>

<style>
#tip-content {
  position: fixed;
  bottom: 10vh; left: 50%;
  transform: translateX(-50%);
  color: #FFF;
  font-size: 16px;
}
#tip-content > .tip-text {
  display: inline-block;
  background-color: #0008;
  border-radius: 5px;
  padding: 5px 10px;
  transition: opacity .5s;
}
</style>
