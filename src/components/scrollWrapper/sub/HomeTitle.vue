<template>
  <div class="title-wrapper">
    <span>{{homeTitle}}</span>
  </div>
</template>
<script>
export default {
  name: 'HomeTitle',
  props: {
    homeTitle: String
  }
}
</script>
<style lang="scss" scoped>
  .title-wrapper {
    width: 100%;
    height: .45rem;
    line-height: .45rem;
    background-color: #fff;
    font-size: .16rem;
    font-weight: bold;
    padding-left: .12rem;
  }
</style>