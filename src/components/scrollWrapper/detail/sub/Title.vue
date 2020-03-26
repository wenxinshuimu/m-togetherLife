<template>
  <div class="title-wrap">
    <span :class="['iconfont', icon]"></span>
    <span class="title-text">{{title}}</span>
  </div>
</template>
<script>
export default {
  name: 'DetailTitle',
  props: {
    title: String,
    icon: String
  }
}
</script>
<style lang="scss" scoped>
  @import '~styles/variables.scss';
  .title-wrap {
    display: flex;
    align-items: center;
    height: .44rem;
    padding: .03rem .15rem 0;
      color: $defaultGreen;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    .iconfont {
      font-size: .18rem;
      padding-right: .1rem;
    }
    .title-text {
      font-size: .16rem;

    }
  }
</style>