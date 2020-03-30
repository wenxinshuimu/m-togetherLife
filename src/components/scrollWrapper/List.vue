<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <div v-if="!netWorkErrorShow">
        <view-list v-if="field == 'view'" :viewDatas=listDatas[cityId] :showTitle=Boolean(false)></view-list>
        <foods-list v-if="field == 'food'" :foodDatas=listDatas[cityId] :showTitle=Boolean(false)></foods-list>
        <hotel-list v-if="field == 'hotel'" :hotelDatas=listDatas[cityId] :showTitle=Boolean(false)></hotel-list>
        <massage-list v-if="field == 'massage'" :massageDatas=listDatas[cityId] :showTitle=Boolean(false)></massage-list>
        <ktv-list v-if="field == 'ktv'" :ktvDatas=listDatas[cityId] :showTitle=Boolean(false)></ktv-list>
        <loading :loadingShow=showLoading></loading>
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
import { ListModel } from 'models/list'
import ViewList from './viewList/Index'
import FoodsList from './foodsList/Index'
import HotelList from './hotelList/Index'
import MassageList from './MassageList/Index'
import KtvList from './KtvList/Index'
import NetworkError from './sub/NetworkError'
import Loading from './sub/Loading'
export default {
  name: 'ListScrollWrapper',
  data () {
    return {
      listDatas: [],
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
    Loading
  },
  computed: {
    ...mapState(['cityId','field'])
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper,{mouseWheel: true, click: true, tap: true});
    this.getListDatas(this.field,this.cityId);
    this.currentCityId = this.cityId
  },
  watch: {
    cityId () {
      this.getListDatas(this.field,this.cityId);
    }
  },
  methods: {
    getListDatas (field,cityId) {
      if (!this.listDatas[cityId]) {
        let listDatas = new ListModel();
        this.showLoading = true;
        listDatas.getListDatas(field,cityId).then((res) => {
          if (res && res.status === 0) {
            setTimeout(() => {
              this.listDatas[cityId] = res.data.data;
              this.showLoading = false;
            },500);
            console.log(this.listDatas[0])
          }else if(res.status === -1){
            this.netWorkErrorShow = true;
          }
        })
      }
    }
  }
}
</script>