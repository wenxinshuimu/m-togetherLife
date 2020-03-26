<template>
  <div class="info-wrap">
    <detail-title :title=title :icon=icon></detail-title>
    <div class="detail-content">
      <span>停车场：{{server && server.parking ? '有': '无'}}</span>
      <span>WIFI：{{server && server.wifi ? '有': '无'}}</span>
    </div>
  </div>
</template>
<script>
import DetailTitle from './Title'
export default {
  name: 'DetailServer',
  data () {
    return {
      icon: 'icon-service'
    }
  },
  components: {
    DetailTitle
  },
  props: {
    server: {
      type: Object,
      default() {
        return {}
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
    background-color: #fff;
    border-top: .08rem solid #eee;
    border-bottom: .01rem solid #ddd;
    .detail-content {
    display: flex;
    flex-direction: column;
      font-size: .14rem;
      text-indent: .1rem;
      padding: .15rem .1rem;
      line-height: .2rem;
    }
  }
</style>