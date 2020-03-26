<template>
  <div class="key-word-wrap">
    <detail-title :title=title :icon=icon></detail-title>
    <div class="detail-content">
      <span class="key-text" v-for="(item, index) of content" :key="index">{{item}}</span>
      </div>
  </div>
</template>
<script>
import DetailTitle from './Title'
export default {
  name: 'DetailKeyWord',
  data () {
    return {
      icon: 'icon-haoping'
    }
  },
  components: {
    DetailTitle
  },
  props: {
    content: {
      type: Array,
      default() {
        return []
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
  @import '~styles/variables.scss';
  @import '~styles/mixins.scss';
  .key-word-wrap {
    @include flex-column;
    background-color: #fff;
    border-top: .08rem solid #eee;
    border-bottom: .01rem solid #ddd;
    .detail-content {
      @include flex-row;
      flex-wrap: wrap;
      font-size: .14rem;
      padding: .15rem .1rem;
      box-sizing: border-box;
      .key-text {
        @include vh-center;
        height: .25rem;
        color: $defaultGreen;
        border: .01rem solid $defaultGreen;
        border-radius: .03rem;
        padding: 0 .05rem;
  		  margin: 0 .05rem .05rem 0;
      }
    }
  }
</style>