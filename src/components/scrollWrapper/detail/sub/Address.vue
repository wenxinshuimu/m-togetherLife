<template>
  <div class="address-wrap">
    <span class="iconfont icon-positioning"></span>
    <span class="address-text">{{name}}</span>
  </div>
</template>
<script>
export default {
  name: 'DetailAddress',
  props: {
    name: {
      type: String,
      default() {
        return '名称'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .address-wrap {
    display: flex;
    align-items: center;
    min-height: .44rem;
    line-height: .44rem;
    padding: .03rem .15rem 0;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    .iconfont {
      font-size: .18rem;
      color: #999;
      padding-right: .1rem;
    }
    .address-text {
      font-size: .14rem;
      line-height: .2rem;
    }
  }
</style>