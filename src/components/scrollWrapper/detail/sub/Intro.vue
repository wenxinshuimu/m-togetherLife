<template>
  <div class="intro-wrap">
    <span class="iconfont icon-tip"></span>
    <span class="intro-text">{{name}}</span>
  </div>
</template>
<script>
export default {
  name: 'DetailIntro',
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
  .intro-wrap {
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
    .intro-text {
      font-size: .14rem;
    }
  }
</style>