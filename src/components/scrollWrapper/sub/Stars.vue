<template>
  <div class="star-wrapper">
    <span class="iconfont icon-star" :class="{active: num >= 1}"></span>
    <span class="iconfont icon-star" :class="{active: num >= 2}"></span>
    <span class="iconfont icon-star" :class="{active: num >= 3}"></span>
    <span class="iconfont icon-star" :class="{active: num >= 4}"></span>
    <span class="iconfont icon-star" :class="{active: num >= 5}"></span>
  </div>
</template>
<script>
export default {
  name: 'Stars',
  props: {
    num: Number
  }
}
</script>
<style lang="scss" scoped>
  @import '~styles/variables.scss';
  .star-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    .iconfont {
      font-size: .14rem;
      color: #ccc;
      padding-right: .05rem;
      &.active {
        color: $starColor;
      }
    }
  }
  
</style>