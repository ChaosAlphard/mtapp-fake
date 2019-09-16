<template>
  <div class="goods">
    <!-- 分类列表 -->
    <div class="menu-wrapper" ref="menu">
      <ul class="menu-list">
        <!-- 专场 -->
        <li class="menu-item" @click="selectMenu(0)">
          <img class="icon" :src="container.tag_icon" v-if="container.tag_icon"><!--
          -->{{container.tag_name}}
        </li>

        <!-- 其他 -->
        <li class="menu-item" v-for="(item, i) in goods" :key="i+item.name"
        @click="selectMenu(i+1)">
          <img class="icon" :src="item.icon" v-if="item.icon"><!--
          -->{{item.name}}
          <span class="num" v-if="item.spus.length !== 0">
            {{item.spus.length}}
          </span>
        </li>

      </ul>
    </div>

    <!-- 商品列表 -->
    <div class="foods-wrapper" ref="food">

      <ul class="food-list">
        <!-- 专场 -->
        <li class="food-item">
          <div v-for="(item, i) in container.operation_source_list" :key="i">
            <img class="img" :src="item.pic_url">
          </div>
        </li>

        <!-- 具体分类 -->
        <li class="food-classify" v-for="(item, i) in goods" :key="i">
          <ul class="food-classify-list">
            <span class="title">{{item.name}}</span>
            <!-- 具体商品 -->
            <li class="food-item" v-for="(food, fi) in item.spus" :key="fi">
              <img class="icon" :src="food.picture" :alt="food.name">
              <div class="content">
                <span class="name">{{food.name}}</span>
                <p class="description" v-if="food.description">
                  {{food.description}}
                </p>

                <div class="extra">
                  <span class="saled">{{food.month_saled_content}}</span>
                  <span class="praise">{{food.praise_content}}</span>
                </div>

                <img class="product" :src="food.product_label_picture">
                <p class="price">
                  <span class="text">￥{{food.min_price}}</span>
                  <span class="unit">/{{food.unit}}</span>
                </p>
              </div>

              <!-- <div class="cart-control-wrapper"> -->
              <!-- 数量 -->
              <ItemControl class="item-control" :food="food"/>
              <!-- </div> -->
              <!-- {{food.picture}} -->
            </li>
          </ul>
        </li>

      </ul>

    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ItemControl from '@/components/shopcart/ItemControl.vue'

@Component({
  components: {
    ItemControl
  }
})
export default class Goods extends Vue {
  goods: any = {}
  container: any = {}
  menuScroll: any = {}
  foodScroll: any = {}

  initScroll(): void {
    this.menuScroll = new BScroll(this.$refs.menu, {
      click: true
    })

    this.foodScroll = new BScroll(this.$refs.food, {
      click: true
    })

    this.foodScroll.on('scroll', (pos: any) => {
      console.log(pos)
    })
  }

  getGoodsData(): void {
    this.$axios.get('/goods.json')
    .then(res => {
      if(res.data.code === 0) {
        this.goods = res.data.data.food_spu_tags
        this.container = res.data.data.container_operation_source
        this.$nextTick(this.initScroll)
      } else {
        this.$evt.$emit('showMsg', 'Error: 请求数据失败')
      }
    }).catch(err => {
      this.$evt.$emit('showMsg', 'Error: 网络异常')
    })
  }

  private activated(): void {
    // 进入组件时设置初始滚动位置
    scrollTo(0,0)
  }

  private created(): void {
    this.getGoodsData()
  }
}
</script>

<style scoped>
.goods {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  position: relative;
  height: 100%;
}

.menu-wrapper {
  width: 85px;
  flex-shrink: 0;
  flex-basis: 85px;
  /* background-color: #EEE; */
  /* overflow: auto; */
}

.foods-wrapper {
  min-width: 240px;
  flex-grow: 1;
  /* background-color: #ADF; */
  /* overflow: auto; */
}

.menu-item {
  display: block;
  border: 1px solid #EEE;
  padding: 15px 8px;
  position: relative;
  font-size: 16px;
  overflow: hidden;
  /* 文本不换行 */
  white-space: nowrap;
  /* 溢出部分省略 */
  text-overflow: ellipsis;
}
.menu-item .icon {
  width: 18px;
  height: 18px;
  vertical-align: middle;
}
.menu-item .num {
  position: absolute;
  top: 0; left: 0;
  font-size: 8px;
  width: 15px;
  height: 15px;
  background-color: #FAA;
  border-radius: 15px;
  text-align: center;
}

.food-list {
  position: relative;
}
.food-item {
  width: 100%;
}
.food-item .img {
  width: 100%;
  object-fit: cover;
}

.food-classify .title {
  display: block;
  padding: 5px 10px;
  background-color: #FB2;
  overflow: hidden;
  /* 文本不换行 */
  white-space: nowrap;
  /* 溢出部分省略 */
  text-overflow: ellipsis;
}
.food-classify .food-item {
  position: relative;
  display: flex;
  justify-content: flex-start;
  border: 1px solid #FAA;
  box-sizing: border-box;
}
.food-classify .icon {
  width: 64px;
  height: 64px;
  object-fit: cover;
}

.item-control {
  position: absolute;
  right: 5px;
  bottom: 5px;
}
</style>
