<template>
  <div class="massage-wrapper">
    <massage-title :homeTitle=searchTitle?searchTitleName:massageTitle  v-show=showTitle></massage-title>
    <div class="massage-box">
      <massage-sub 
        v-for="(item, index) of massageDatas"
        :key="index"
        :viewInfo=item>
      </massage-sub>
    </div>
    
  </div>
</template>
<script>
import MassageTitle from '../sub/HomeTitle'
import MassageSub from './Sub'
export default {
  name: 'FoodsList',
  props: {
    massageDatas: Array,
    showTitle: {
      type: Boolean,
      default() {
        return true
      }
    },
    searchTitle: {
      type: Boolean,
      default() {
        return true
      }
    }
  },
  components: {
    MassageTitle,
    MassageSub
  },
  data () {
    return {
      massageTitle: '推荐按摩',
      searchTitleName: '按摩结果：'
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '~styles/variables.scss';
  @import '~styles/mixins.scss';
  .massage-wrapper {
    margin-top: .1rem;
    background-color: #fff;
    .massage-box {
      display: flex;
      @include flex-column;
      border-top: 1px solid #ddd;
    }
  }
</style>