<template>
  <div class="ktv-wrapper">
    <ktv-title :homeTitle=searchTitle?searchTitleName:KtvTitle  v-show=showTitle></ktv-title>
    <div class="ktv-box">
      <ktv-sub 
        v-for="(item, index) of ktvDatas"
        :key="index"
        :viewInfo=item>
      </ktv-sub>
    </div>
    
  </div>
</template>
<script>
import KtvTitle from '../sub/HomeTitle'
import KtvSub from './Sub'
export default {
  name: 'KtvList',
  props: {
    ktvDatas: Array,
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
    KtvTitle,
    KtvSub
  },
  data () {
    return {
      KtvTitle: '推荐KTV',
      searchTitleName: 'KTV结果：'
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '~styles/variables.scss';
  @import '~styles/mixins.scss';
  .ktv-wrapper {
    margin-top: .1rem;
    background-color: #fff;
    .ktv-box {
      display: flex;
      @include flex-column;
      border-top: 1px solid #ddd;
    }
  }
</style>