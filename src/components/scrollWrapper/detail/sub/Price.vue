<template>
  <div class="price-wrap">
    <span class="iconfont icon-price"></span>
    <span class="price-text">￥<em>{{name}}元</em>起</span>
  </div>
</template>
<script>
export default {
  name: 'DetailPrice',
  props: {
    name: {
      type: String,
      default() {
        return '价格'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '~styles/variables.scss';
  .price-wrap {
    display: flex;
    align-items: center;
    height: .44rem;
    padding: .03rem .15rem 0;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    .iconfont {
      font-size: .18rem;
      color: #999;
      padding-right: .1rem;
    }
    .price-text {
      font-size: .16rem;
      color: $defaultOrange;
      margin-right: .03rem;
    }
  }
</style>