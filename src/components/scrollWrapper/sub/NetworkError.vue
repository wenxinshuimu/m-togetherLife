<template>
  <div class="error-wrapper" v-show="netWorkErrorShow">
    <span class="iconfont icon-error"></span>
    <p class="error-text">网络走丢啦~</p>
  </div>
</template>
<script>
export default {
  name: 'NetworkError',
  props: {
    netWorkErrorShow: {
      type: Boolean,
      defalut() {
        return false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  @import 'styles/mixins.scss';
  .error-wrapper {
    @include flex-column;
    @include vh-center;
    height: 3rem;
    color: rgba(105, 105, 105, 0.795);
    .iconfont {
      font-size: .8rem;
    }
    .error-text {
      font-size: .16rem;
    }
  }
</style>