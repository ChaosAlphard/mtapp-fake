<template>
  <transition-group name="fade" class="alert-group">
    <span class="alert-msg" v-for="msg in msgQueue" :key="msg.id">{{msg.text}}</span>
  </transition-group>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ShowMsg extends Vue {
  private msgQueue: any[] = []

  private pushMsg(msg: string): void {
    // 使用随机数作为v-for 的key
    this.msgQueue.push({
      id: Math.random().toString(36),
      text: msg
    })
    setTimeout(() => {
      this.msgQueue.shift()
    }, 1500);
  }

  private mounted(): void {
    this.$evt.$on("showMsg", this.pushMsg)
  }
}
</script>

<style scoped>
.fade-enter {
  opacity: 0;
  transform: translateY(30px);
}
.fade-leave-active {
  opacity: 0;
  transform: translateY(-30px);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s, transform .2s;
}

.alert-group {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20%; left: 50%;
  transform: translate(-50%, -50%);
}
.alert-msg {
  font-size: 18px;
  padding: 5px 10px;
  color: #FFF;
  background: #0008;
  border-radius: 8px;
  position: absolute;
}
</style>