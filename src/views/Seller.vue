<template>
  <div class="seller" ref="sellerView">
    <div class="seller-wrapper">

      <!-- <div class="seller-view"> -->
      <!-- 商家 -->
      <div class="address-wrapper">
        <div class="address-left">
          <span class="icon mt-icon icon-address"></span>
          <span class="text">{{data.address}}</span>
        </div>
        <div class="address-right mt-icon icon-phone"></div>
      </div>

      <!-- 图片 -->
      <div class="pic-wrapper" v-if="data.poi_env" ref="picView">
        <ul class="pic-list" :style="picListStyle">
          <li class="pic-item"
          v-for="(url, index) in data.poi_env.thumbnails_url_list"
          :key="index" ref="picItem">
            <img class="img" :src="url">
          </li>
        </ul>
      </div>

      <div class="safety-wrapper">
        <span class="mt-icon icon-safe icon"></span>
        <span class="text">食品安全档案</span>
      </div>

      <div class="tip-wrapper">
        <div class="delivery-wrapper">
          <span class="icon mt-icon icon-moto"></span>
          <span class="text">配送服务：{{data.app_delivery_tip}}</span>
        </div>
        <div class="shipping-wrapper">
          <span class="icon mt-icon icon-timer"></span>
          <span class="text">配送时间：{{data.shipping_time}}</span>
        </div>
      </div>

      <div class="other-wrapper">
        <div class="server-wrapper">
          <span class="icon mt-icon icon-check-circle-outline"></span>
          <span class="text">商家服务</span>
          <div class="poi-server"
          v-for="(item, index) in data.poi_service"
          :key="index">
            <img class="img" :src="item.icon">
            <span class="text">{{item.content}}</span>
          </div>
        </div>

        <div class="discounts-wrapper">
          <div class="discounts-item"
          v-for="(item, index) in data.discounts2"
          :key="index">
            <img class="img" :src="item.icon_url">
            <span class="text">{{item.info}}</span>
          </div>
        </div>
      </div>
      <!-- </div> -->

    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Seller extends Vue {
  data: any = {}
  picListStyle: string = ''
  picScroll: any = {}
  sellerScroll: any = {}

  getSellerData(): void {
    this.$axios.get('/seller.json')
    .then(res => {
      if(res.data.code === 0) {
        this.data = res.data.data
        this.$nextTick(this.initScroll)
      } else {
        this.$evt.$emit('showMsg', 'Error: 请求数据失败')
      }
    }).catch(err => {
      this.$evt.$emit('showMsg', 'Error: 请求数据失败')
    })
  }

  initScroll(): void {
    if(this.data.poi_env.thumbnails_url_list) {
      // 图片宽度
      const width = (this.$refs as any).picItem[0].clientWidth
      // 图片间距
      const marginRight = 10

      const picList = this.$refs.picItem as Element[]
      const widthAmount = (width + marginRight) * picList.length - 10
      this.picListStyle = `width: ${widthAmount}px;`

      this.picScroll = new BScroll(this.$refs.picView, {
        scrollX: true,
        click: true
      })
    }

    this.sellerScroll = new BScroll(this.$refs.sellerView, {
      click: true
    })
  }

  private created(): void {
    this.getSellerData()
  }
}
</script>

<style scoped>
.seller {
  padding: 0 10px 0 10px;
  height: 100%;
  /* background-color: #EEE; */
}
.address-wrapper, .pic-wrapper, .safety-wrapper, .tip-wrapper, .other-wrapper {
  margin-top: 10px;
}

/* 地址 */
.address-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #FFF;
}
.address-wrapper .address-left {
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.address-wrapper .address-left .icon {
  flex-shrink: 0;
  width: 24px;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
}
.address-wrapper .address-right {
  flex-shrink: 0;
  width: 50px;
  height: 36px;
  font-size: 28px;
  text-align: center;
  line-height: 36px;
  box-sizing: border-box;
  border-left: 1px solid #CCC;
}

/* 图片 */
.pic-wrapper {
  padding: 10px 0;
  border-top: 1px solid #F2F2F2;
  border-bottom: 1px solid #F2F2F2;
  white-space: nowrap;
  overflow: hidden;
}
.pic-wrapper .pic-list .pic-item {
  display: inline-block;
  width: 100px;
  height: 80px;
}
/* 尾元素不添加margin */
.pic-wrapper .pic-list .pic-item:not(:nth-last-child(1)) {
  margin-right: 10px;
}
.pic-wrapper .pic-list .pic-item .img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}

.safety-wrapper {
  height: 40px;
  line-height: 40px;
}
.safety-wrapper .icon {
  color: #6A6;
  font-size: 24px;
}
.safety-wrapper .text {
  font-size: 18px;
}

/* tips */
.delivery-wrapper, .shipping-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 32px;
}
.delivery-wrapper .icon, .shipping-wrapper .icon {
  font-size: 24px;
}
.delivery-wrapper .text, .shipping-wrapper .text {
  margin-left: 4px;
  font-size: 14px;
}

/* 其他 */
.server-wrapper, .poi-server {
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
/* .server-wrapper .icon, .server-wrapper .text, .poi-server {
  display: inline-block;
} */
.server-wrapper .icon {
  font-size: 24px;
  color: #36F;
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
}
.poi-server .img {
  width: 22px;
  height: 22px;
  margin-left: 20px;
}
.poi-server .text {
  margin-left: 5px;
}

.discounts-item {
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.discounts-item .img {
  width: 20px;
  height: 20px;
  padding: 0 5px;
  flex-shrink: 0;
}
.discounts-item .text {
  font-size: 14px;
}
</style>
