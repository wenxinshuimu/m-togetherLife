<template>
  <div class="back" @click="onRouteBack">
    <span class="iconfont icon-header-arrow-left"></span>
  </div>
</template>
<script>
export default {
  name: 'BackWrad',
  methods: {
    onRouteBack() {
      this.$router.go(-1);
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '~styles/variables.scss';
  @import '~styles/mixins.scss';
  .back {
    @include flex-row;
    @include vh-center;
    position: absolute;
    top: 0;
    left: 0;
    height: $headerHeight;
    padding-left: .08rem;
  }
</style>