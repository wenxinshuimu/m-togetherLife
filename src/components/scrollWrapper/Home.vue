<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <div v-if="!netWorkErrorShow">
        <view-list :viewDatas=homeDatas.viewDatas></view-list>
        <foods-list :foodDatas=homeDatas.foodDatas></foods-list>
        <hotel-list :hotelDatas=homeDatas.hotelDatas></hotel-list>
        <massage-list :massageDatas=homeDatas.massageDatas></massage-list>
        <ktv-list :ktvDatas=homeDatas.ktvDatas></ktv-list>
      </div>
      <div v-else>
        <network-error :netWorkErrorShow=netWorkErrorShow></network-error>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BetterScroll from 'better-scroll'
import { IndexModel } from 'models/index'
import ViewList from './viewList/Index'
import FoodsList from './foodsList/Index'
import HotelList from './hotelList/Index'
import MassageList from './MassageList/Index'
import KtvList from './KtvList/Index'
import NetworkError from './sub/NetworkError'
export default {
  name: 'HomeScrollWrapper',
  data () {
    return {
      homeDatas: {
        foodDatas: [],
        ktvDatas: [],
        viewDatas: [],
        hotelDatas: [],
        massageDatas: [],
      },
      netWorkErrorShow: false,
      currentCityId: 0
    }
  },
  components: {
    //CategoryIcons,
    ViewList,
    FoodsList,
    HotelList,
    MassageList,
    KtvList,
    NetworkError
  },
  computed: {
    ...mapState(['cityId'])
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper, {mouseWheel: true, click: true, tap: true});
    this.getHomeDatas(this.cityId);
    this.currentCityId = this.cityId
  },
  // 是否重新加载页面
  activated() {
    if (this.currentCityId != this.cityId) {
      this.currentCityId = this.cityId;
      this.getHomeDatas(this.currentCityId);
    }
  },
  methods: {
    getHomeDatas (cityId) {
      let homeDatas = new IndexModel();
      homeDatas.getHomeDatas(cityId).then((res) => {
        console.log(res);
        if (res && res.status === 0) {
          const data = res.data.data;
          this.homeDatas.foodDatas = data.foodDatas;
          this.homeDatas.ktvDatas = data.ktvDatas;
          this.homeDatas.viewDatas = data.viewDatas;
          this.homeDatas.hotelDatas = data.hotelDatas;
          this.homeDatas.massageDatas = data.massageDatas;
        }else if(res.status === -1){
          this.netWorkErrorShow = true;
        }
      })
      
    }
  }
}
</script>