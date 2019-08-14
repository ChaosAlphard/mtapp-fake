<template>
  <div class="star">
    <span class="star-item mt-icon" v-for="(star, i) in starClasses" :key="i"
    :class="star"></span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Star extends Vue {
  @Prop({default: 0}) readonly score!: number

  private get starClasses(): Array<string> {
    const maxLength = 5
    const fullStarCount = this.score|0    //Math.floor(value)
    const hasHalfStar = (this.score - fullStarCount) > 0 ? true : false

    let result: Array<string> = []
    // 全星
    for(let i=0;i<fullStarCount;i++) {
      result.push('icon-star')
    }
    // 半星
    if(hasHalfStar) {
      result.push('icon-star-half')
    }
    // 补齐
    while(result.length < maxLength) {
      result.push('icon-star-outline')
    }
    return result
  }
}
</script>

<style scoped>
.star {
  position: relative;
  display: inline-block;
  font-size: 12px;
  color: #FFBB22
}
</style>
