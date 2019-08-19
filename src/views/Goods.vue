<template>
  <div class="goods">
    <!-- 分类列表 -->
    <div class="menu-wrapper">
      <ul class="menu-list">
        <!-- 专场 -->
        <li class="menu-item">
          <img src="" alt="">
          <span>{{goods}}</span>
        </li>
      </ul>
    </div>
    <!-- 商品列表 -->
    <div class="foods-wrapper">
      <ul class="food-list">
        <!-- 专场 -->
        <li class="food-item"></li>
        <!-- 具体分类 -->
        <li class="food-item"></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

@Component
export default class Goods extends Vue {
  @Prop() readonly info!: any

  // container: any = {}
  // goods: any[] = []

  // @Watch('info')
  // onInfoChange(value: any): void {
  //   this.container = value.container_operation_source
  //   this.goods = value.food_spu_tags
  // }

  private get goods(): any {
    return this.info?this.info.food_spu_tags:''
  }

  private get container(): any {
    return this.info?this.info.container_operation_source:''
  }

  private mounted(): void {
    // if(this.goods.length < 1 || this.container.length < 1) {
    //   this.$axios.get('/goods.json')
    //   .then(res=>{
    //     if(res.data.code === 0) {
    //       this.container = res.data.data.container_operation_source
    //       this.goods = res.data.data.food_spu_tags
    //       console.log("======================")
    //       console.log(this.container)
    //       console.log(this.goods)
    //     }
    //   })
    // }
  }

  private activated(): void {
    // 进入组件时设置初始值
    scrollTo(0,0)
  }
}
</script>

<style scoped>
.goods {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.menu-wrapper {
  width: 85px;
  flex-shrink: 0;
  flex-basis: 85px;
  background-color: #FAA;
}

.foods-wrapper {
  min-width: 240px;
  flex-grow: 1;
  background-color: #ADF
}
</style>
