<template>
  <h1>AppHeader{{info}}</h1>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class AppHeader extends Vue {
  @Prop({default: {poi_info: '没有活动'}}) readonly info!: Object
}
</script>

<style scoped>

</style>
