<template>
  <div class="city">
    <back-ward></back-ward>
    <h1 class="city-title">{{title}}</h1>
  </div>
</template>
<script>
import BackWard from './sub/BackWard'
export default {
  name: 'CommonHeader',
  components: {
    BackWard
  },
  props: {
    title: {
      type: String,
      default() {
        return '一线生活通'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '~styles/variables.scss';
  @import '~styles/mixins.scss';
  .city {
    @include flex-row;
    @include vh-center;
    height: $headerHeight;
    background-color: $defaultBgColor;
    font-size: .16rem;
  }
</style>