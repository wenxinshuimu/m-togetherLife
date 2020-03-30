<template>
  <div class="view-wrapper">
    <view-title :homeTitle=searchTitle?searchTitleName:viewTitle v-show=showTitle></view-title>
    <div class="view-box">
      <view-sub 
        v-for="(item, index) of viewDatas"
        :key="index"
        :viewInfo=item>
      </view-sub>
    </div>
    
  </div>
</template>
<script>
import ViewTitle from '../sub/HomeTitle'
import ViewSub from './Sub'
export default {
  name: 'ViewList',
  props: {
    viewDatas: Array,
    showTitle: {
      type: Boolean,
      default() {
        return true
      }
    },
    searchTitle: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  components: {
    ViewTitle,
    ViewSub
  },
  data () {
    return {
      viewTitle: '推荐景点',
      searchTitleName: '景点结果：'
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '~styles/variables.scss';
  @import '~styles/mixins.scss';
  .view-wrapper {
    margin-top: .1rem;
    background-color: #fff;
    .view-box {
      display: flex;
      @include flex-row;
      border-top: 1px solid #ddd;
      flex-wrap: wrap;
    }
  }
</style>