<template>
  <div class="seller" ref="sellerView">
    <div class="seller-wrapper">

      <div class="seller-view">
        <!-- 商家 -->
        <div class="address-wrapper">
          <div class="address-left">
            <span class="mt-icon icon-address">{{data.address}}</span>
          </div>
          <div class="address-right">
            <div class="mt-icon icon-phone"></div>
          </div>
        </div>

        <!-- 图片 -->
        <div class="pic-wrapper" v-if="data.poi_env" ref="picView">
          <ul class="pic-list" :style="picListStyle">
            <li class="pic-item"
            v-for="(url, index) in data.poi_env.thumbnails_url_list"
            :key="index" ref="picItem">
              <img :src="url">
            </li>
          </ul>
        </div>

        <div class="safety-wrapper">
          <span>查看食品安全档案</span>
          <span class="mt-icon icon-arrow-right"></span>
        </div>

        <div class="split"></div>

        <div class="tip-wrapper">
          <div class="delivery-wrapper">
            <span>配送服务：{{data.app_delivery_tip}}</span>
          </div>
          <div class="shipping-wrapper">
            <span>配送时间：{{data.shipping_time}}</span>
          </div>
        </div>

        <div class="split"></div>

        <div class="other-wrapper">
          <div class="server-wrapper">
            <span>商家服务</span>
            <div class="poi-server"
            v-for="(item, index) in data.poi_service"
            :key="index">
              <img :src="item.icon">
              <span>{{item.content}}</span>
            </div>
          </div>

          <div class="discounts-wrapper">
            <div class="discounts-item"
            v-for="(item, index) in data.discounts2"
            :key="index">
              <img :src="item.icon_url">
              <span>{{item.info}}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Seller extends Vue {
  data: any = {}
  picListStyle: string = ''
  scroll: any = {}
  sellerScroll: any = {}

  getSellerData(): void {
    this.$axios.get('/seller.json')
    .then(res => {
      if(res.data.code === 0) {
        console.log(1)
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
      const width = (this.$refs as any).picItem[0].clientWidth
      const marginRight = 10
      const picList = this.$refs.picItem as Element[]
      const widthAmount = (width + marginRight) * picList.length

      console.log('%cIlirus:\n','color:#609',
        this.$refs.picItem, width, widthAmount
      );

      this.picListStyle = `width: ${widthAmount}px`

      this.scroll = new BScroll(this.$refs.picView, {
        scrollX: true
      })
    }

    this.sellerScroll = new BScroll(this.$refs.sellerView)
  }

  private created(): void {
    this.getSellerData()
  }
}
</script>

<style scoped>
.seller-view .address-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 50px;
}
.address-wrapper .adress-left {
  flex-grow: 1;
}
.address-wrapper .address-right {
  flex-shrink: 0;
  width: 50px;
  border: #F4F4F4 1px solid
}

.seller .seller-wrapper .seller-view .pic-wrapper {
  padding: 10px 0;
  overflow: hidden;
  border-bottom: 1px solid #F4F4F4;
  white-space: nowrap;
}

/* .seller .seller-wrapper .seller-view .pic-wrapper .pic-list {} */

.seller .seller-wrapper .seller-view .pic-wrapper .pic-list .pic-item {
  display: inline-block;
  margin-right: 11px;
  width: 93px;
  height: 75px;
}

.seller .seller-wrapper .seller-view .pic-wrapper .pic-list .pic-item img {
  width: 100%;
  height: 100%;
  border-radius: 2px;
}
</style>