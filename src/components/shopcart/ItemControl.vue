<template>
  <div class="control">
    <transition name="move">
      <div class="decrease mt-icon icon-remove-circle-outline"
      @click.stop.prevent="decreaseItem()" v-show="!!food.count">
      </div>
    </transition>

    <div class="count">
      <span v-show="!!food.count">{{food.count}}</span>
    </div>

    <div class="increase mt-icon icon-add-circle"
    @click.stop.prevent="increaseItem()">
      <span class="bg"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ItemControl extends Vue {
  @Prop({ default:()=>({}) }) food!: any

  private increaseItem(): void {
    if(!this.food.count) {
      // Vue基于Object.defineProperty 实现数据绑定
      // 直接向对象添加属性不会更新数据
      // this.food.count = 1
      // Object.assign(this.food, {count:1})
      this.$set(this.food,"count",1)
    } else {
      this.food.count++
    }
  }

  private decreaseItem(): void {
    this.food.count--
  }
}
</script>

<style scoped>
.control {
  width: 75px;
  height: 25px;
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  border-radius: 25px;
  background-color: antiquewhite;
}

.increase, .count, .decrease {
  display: inline-block;
  width: 25px;
  height: 25px;
  line-height: 25px;
  text-align: center;
}

.increase {
  font-size: 25px;
  color: #FB2;
  z-index: 1;
}

.count {
  font-size: 16px;
}

.decrease {
  font-size: 25px;
  color: #AAA;
}

/* 过渡动画 */
.move-enter, .move-leave-active {
  opacity: 0;
  transform: translateX(50px) rotate(360deg);
}
.move-enter-active, .move-leave-active {
  transition: opacity .5s ease-in-out, transform .5s ease-in-out;
}
</style>