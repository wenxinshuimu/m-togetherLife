<template>
  <div class="hotel-wrapper">
    <hotel-title :homeTitle=searchTitle?searchTitleName:HotelTitle  v-show=showTitle></hotel-title>
    <div class="hotel-box">
      <hotel-sub 
        v-for="(item, index) of hotelDatas"
        :key="index"
        :viewInfo=item>
      </hotel-sub>
    </div>
    
  </div>
</template>
<script>
import HotelTitle from '../sub/HomeTitle'
import HotelSub from './Sub'
export default {
  name: 'HotelList',
  props: {
    hotelDatas: Array,
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
    HotelTitle,
    HotelSub
  },
  data () {
    return {
      HotelTitle: '推荐酒店',
      searchTitleName: '酒店结果：'
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '~styles/variables.scss';
  @import '~styles/mixins.scss';
  .hotel-wrapper {
    margin-top: .1rem;
    background-color: #fff;
    .hotel-box {
      display: flex;
      @include flex-column;
      border-top: 1px solid #ddd;
    }
  }
</style>