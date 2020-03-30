<template>
  <div class="foods-wrapper">
    <foods-title :homeTitle=searchTitle?searchTitleName:foodsTitle  v-show=showTitle></foods-title>
    <div class="foods-box">
      <foods-sub 
        v-for="(item, index) of foodDatas"
        :key="index"
        :dataInfo=item>
      </foods-sub>
    </div>
    
  </div>
</template>
<script>
import FoodsTitle from '../sub/HomeTitle'
import FoodsSub from './Sub'
export default {
  name: 'FoodsList',
  props: {
    foodDatas: Array,
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
    FoodsTitle,
    FoodsSub
  },
  data () {
    return {
      foodsTitle: '推荐美食',
      searchTitleName: '美食结果：'
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '~styles/variables.scss';
  @import '~styles/mixins.scss';
  .foods-wrapper {
    margin-top: .1rem;
    background-color: #fff;
    .foods-box {
      display: flex;
      @include flex-column;
      border-top: 1px solid #ddd;
    }
  }
</style>