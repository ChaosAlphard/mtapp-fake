<template>
  <div class="ratings" ref="ratingView">

    <div class="ratings-wrapper">
      <div class="overview">

        <div class="overview-left">
          <div class="comment-score">
            <p class="score">{{ratings.comment_score}}</p>
            <p class="text">Rating</p>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Ratings extends Vue {
  scroll: any = null
  ratings = {}
  
  private created(): void {
    this.$axios.get('/ratings.json')
    .then( res => {
      if(res.data.code === 0) {
        this.ratings = res.data.data
        this.$nextTick(() => {
          if(this.scroll) {
            this.scroll.refresh()
          } else {
            this.scroll = new BScroll( this.$refs.ratingView, {
              click: true
            })
          }
        })
      }
    })
  }
}
</script>

<style scoped>

</style>
