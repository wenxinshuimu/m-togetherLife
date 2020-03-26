<template>
  <div class="date-time-wrap">
    <span class="iconfont icon-datetime"></span>
    <span class="date-time-text">{{name}}</span>
  </div>
</template>
<script>
export default {
  name: 'DetailDateTime',
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
  .date-time-wrap {
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
    .date-time-text {
      font-size: .14rem;
    }
  }
</style>