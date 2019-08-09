<template>
  <div class="content-wrapper">
    <div class="logo" :style="logoStyle"></div>

    <span class="name">{{name}}</span>

    <div class="whitespace"></div>

    <div class="collect" @click="toggleFav()">
      <span class="mt-icon star" :class="favClass"></span>
      <span class="fav">收藏</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ContentWrapper extends Vue {
  @Prop() readonly name!: string
  @Prop() readonly logoStyle!: string

  private favClass = {
    'icon-star': true,
    'icon-star-full': false
  }

  private toggleFav(): void {
    this.favClass['icon-star'] = !this.favClass['icon-star']
    this.favClass['icon-star-full'] = !this.favClass['icon-star-full']
  }
}
</script>

<style scoped>
.content-wrapper {
  position: relative;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 10px;
  box-sizing: border-box;
}
.content-wrapper>div,.content-wrapper>span{
  margin: 0 5px;
}

.logo {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  background-size: cover;
  background-position: center center;
  border-radius: 8px;
}

.name {
  flex-shrink: 0;
  font-size: 18px;
  font-weight: bold;
  color: #FFF;
}

/* 占位撑开宽度 */
.whitespace {
  width: 100%;
}

.collect {
  flex-shrink: 0;
  width: 30px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #FFF;
}

.collect .star {
  display: block;
  width: 20px;
  height: 20px;
  font-size: 20px;
}

.collect .fav {
  display: block;
  font-size: 12px;
}
</style>