<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <div v-if="!searchDatas.status">
        <no-data v-show="
	        (!searchDatas.viewDatas || searchDatas.viewDatas.length <= 0) &&
	        (!searchDatas.foodDatas || searchDatas.foodDatas.length <= 0) &&
	        (!searchDatas.hotelDatas || searchDatas.hotelDatas.length <= 0) &&
	        (!searchDatas.massageDatas || searchDatas.massageDatas.length <= 0) &&
	        (!searchDatas.ktvDatas || searchDatas.ktvDatas.length <= 0)
	      "></no-data>
        <div v-if="searchDatas.viewDatas && searchDatas.viewDatas.length > 0">
          <view-list :viewDatas=searchDatas.viewDatas :searchTitle=Boolean(true)></view-list>
        </div>
        <div v-if="searchDatas.foodDatas && searchDatas.foodDatas.length > 0">
          <foods-list :foodDatas=searchDatas.foodDatas :searchTitle=Boolean(true)></foods-list>
        </div>
        <div v-if="searchDatas.hotelDatas && searchDatas.hotelDatas.length > 0">
          <hotel-list :hotelDatas=searchDatas.hotelDatas :searchTitle=Boolean(true)></hotel-list>
        </div>
        <div v-if="searchDatas.massageDatas && searchDatas.massageDatas.length > 0">
          <massage-list :massageDatas=searchDatas.massageDatas :searchTitle=Boolean(true)></massage-list>
        </div>
        <div v-if="searchDatas.ktvDatas && searchDatas.ktvDatas.length > 0">
        <ktv-list :ktvDatas=searchDatas.ktvDatas :searchTitle=Boolean(true)></ktv-list>
        </div>
      </div>
      <div v-if="searchDatas.status == -1">
        <network-error :netWorkErrorShow=netWorkErrorShow></network-error>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import ViewList from './viewList/Index'
import FoodsList from './foodsList/Index'
import HotelList from './hotelList/Index'
import MassageList from './MassageList/Index'
import KtvList from './KtvList/Index'
import NetworkError from './sub/NetworkError'
import Loading from './sub/Loading'
import SearchTitle from './sub/HomeTitle'
import NoData from '../scrollWrapper/sub/NodataTip'
export default {
  name: 'SearchScrollWrapper',
  props: {
    searchDatas: Object
  },
  data () {
    return {
      netWorkErrorShow: false,
      currentCityId: 0,
      showLoading: false
    }
  },
  components: {
    ViewList,
    FoodsList,
    HotelList,
    MassageList,
    KtvList,
    NetworkError,
    Loading,
    SearchTitle,
    NoData
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper);
  }
}
</script>