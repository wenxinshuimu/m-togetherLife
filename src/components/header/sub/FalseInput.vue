<template>
    <router-link  
      to="Search" 
      tag="div"
      class="false-input">
        <span class="iconfont icon-header-search"></span>
        <span class="false-text">美食 / 景点 / 酒店 / 按摩 / KTV</span>
    </router-link>
</template>

<script>
export default {
  nmae: 'FalseInput'
}
</script>

<style lang="scss" scoped>
  @import '~styles/variables.scss';
  @import '~styles/mixins.scss';
  .false-input {
    flex: 1;
    @include vh-center;
    background-color: #fff;
    box-sizing: border-box;
    margin: .06rem;
    border-radius: .08rem;
    .false-text {
      font-size: .14rem;
      color: #999;
      padding-left: .06rem;
    }
  }
</style>