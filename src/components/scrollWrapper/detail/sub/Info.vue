<template>
  <div class="info-wrap">
    <detail-title :title=title :icon=icon></detail-title>
    <div class="detail-content">{{content}}</div>
  </div>
</template>
<script>
import DetailTitle from './Title'
export default {
  name: 'DetailInfo',
  data () {
    return {
      icon: 'icon-recom'
    }
  },
  components: {
    DetailTitle
  },
  props: {
    content: {
      type: String,
      default() {
        return '加载中'
      }
    },
    title: {
      type: String,
      default() {
        return '标题'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .info-wrap {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-top: .08rem solid #eee;
    border-bottom: .01rem solid #ddd;
    .detail-content {
      font-size: .14rem;
      text-indent: .2rem;
      padding: .15rem .1rem;
      line-height: .2rem;
    }
  }
</style>