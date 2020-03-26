<template>
  <div class="stars-wrap">
    <span class="iconfont icon-smile"></span>
    <stars class="stars-num" :num=num></stars>
    <span class="stars-text">{{name}}分</span>
  </div>
</template>
<script>
import Stars from '../../sub/Stars'
export default {
  name: 'DetailStar',
  components: {
    Stars
  },
  props: {
    name: {
      type: String,
      default() {
        return '名称'
      }
    },
    num: {
      type: Number,
      default() {
        return 0
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .stars-wrap {
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
    .stars-num {
      align-items: center;
    }
    .stars-text {
      font-size: .14rem;
      margin-left: .1rem;
    }
  }
</style>