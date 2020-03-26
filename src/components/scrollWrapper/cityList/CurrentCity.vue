<template>
  <router-link class="current-city" :to="{name: path}" tag="div">
    <span>当前城市:</span>
    <span class="iconfont icon-positioning"></span>
    <span class="city">{{cityName}}</span>
  </router-link>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CurrentCity',
  data() {
    return {
      path: 'index'
    }
  },
  computed: {
    ...mapState(['cityName'])
  }
}
</script>
<style lang="scss" scoped>
  @import '~styles/variables.scss';
  @import '~styles/mixins.scss';
  .current-city {
    @include flex-row;
    text-align: center;
    height: .5rem;
    line-height: .5rem;
    font-size: .14rem;
    padding-left: .14rem;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    .iconfont {
      color: $defaultBgColor;
      font-size: .10rem;
      padding: 0 .02rem 0 .06rem;
    }
  }
</style>