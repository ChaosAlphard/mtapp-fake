<template>
  <div class="goods">
    <!-- 分类列表 -->
    <div class="menu-wrapper">
      <ul class="menu-list">
        <!-- 专场 -->
        <li class="menu-item">
          <img class="icon" :src="container.tag_icon" v-if="container.tag_icon">
          <span>{{container.tab_name}}</span>
        </li>
        <!-- 其他 -->
        <li class="menu-item" v-for="(item, i) in goods" :key="i+item.name"
        @click="selectMenu(i)">
          <img class="icon" :src="item.icon" v-if="item.icon">
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <!-- 商品列表 -->
    <div class="foods-wrapper">
      <ul class="food-list">
        <!-- 专场 -->
        <li class="food-item">
          <div v-for="(item, i) in container.operation_source_list" :key="i">
            <img :src="item.pic_url">
          </div>
        </li>
        <!-- 具体分类 -->
        <li class="food-item" v-for="(item, i) in goods" :key="i">
          <ul>
            <span class="title">{{item.name}}</span>
            <!-- 具体商品 -->
            <li v-for="(food, fi) in item.spus" :key="fi">
              {{food.picture}}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

@Component
export default class Goods extends Vue {
  @Prop() readonly info!: any

  private get goods(): any {
    return this.info?this.info.food_spu_tags:''
  }

  private get container(): any {
    return this.info?this.info.container_operation_source:''
  }

  private activated(): void {
    // 进入组件时设置初始滚动位置
    scrollTo(0,0)
  }
}
</script>

<style scoped>
.goods {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  position: relative;
  /* height: 100%; */
}

.menu-wrapper {
  width: 85px;
  /* height: 100%; */
  flex-shrink: 0;
  flex-basis: 85px;
  background-color: #FAA;
}

.foods-wrapper {
  min-width: 240px;
  /* height: 100%; */
  flex-grow: 1;
  background-color: #ADF
}

.menu-item {
  border: 1px solid red;
}
</style>
