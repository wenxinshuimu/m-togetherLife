<template>
  <router-link to="City" class="city" tag="div">
      <span class="city-name">{{cityName}}</span>
      <span class="iconfont icon-header-arrow"></span> 
  </router-link>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'CitySelector',
  computed: {
    ...mapState(['cityName'])
  }
}
</script>
<style lang="scss" scoped>
  @import '~styles/variables.scss';
  @import '~styles/mixins.scss';
  .city {
    min-width: .6rem;
    height: $headerHeight;
    @include flex-row;
    @include vh-center;
    .city-name {
      font-size: .16rem
    }
    .iconfont {
      font-size: .14rem;
    }
  }
</style>