<template>
  <div class="name-wrap">
    <span class="iconfont icon-name"></span>
    <span class="name-text">{{name}}</span>
  </div>
</template>
<script>
export default {
  name: 'DetailName',
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
  .name-wrap {
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
    .name-text {
      font-size: .14rem;
    }
  }
</style>