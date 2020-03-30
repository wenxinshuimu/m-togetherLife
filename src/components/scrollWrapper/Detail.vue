<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <div v-if="!netWorkErrorShow">
        <detail-swiper :picInfos = detailInfos.pics></detail-swiper>
        <detail-view v-if="field == 'view'" :viewInfos=detailInfos></detail-view>
        <detail-food v-if="field == 'food'" :foodInfos=detailInfos></detail-food>
        <detail-hotel v-if="field == 'hotel'" :hotelInfos=detailInfos></detail-hotel>
        <detail-massage v-if="field == 'massage'" :massageInfos=detailInfos></detail-massage>
        <detail-ktv v-if="field == 'ktv'" :ktvInfos=detailInfos></detail-ktv>
      </div>
      <div v-else>
        <network-error :netWorkErrorShow=netWorkErrorShow></network-error>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import { DetailModel } from 'models/detail'
import tools from 'utils/tools'
import DetailSwiper from './sub/Swiper'
import DetailView from './detail/View'
import DetailFood from './detail/Food'
import DetailHotel from './detail/Hotel'
import DetailMassage from './detail/Massage'
import DetailKtv from './detail/Ktv'
import NetworkError from './sub/NetworkError'
export default {
  name: 'DetailScroll',
  components: {
    DetailSwiper,
    DetailView,
    DetailFood,
    DetailHotel,
    DetailMassage,
    DetailKtv,
    NetworkError
  },
  data () {
    return {
      field: '',
      id: 0,
      detailInfos: {},
      netWorkErrorShow: false,
    }
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper,{mouseWheel: true, click: true, tap: true});
    this.field = this.$route.query.field;
    this.id = this.$route.query.id;
    this.getDetail(this.field, this.id);
  },
  activated() {
    this.currentField = this.$route.query.field;
    this.currentId = this.$route.query.id;
    if (this.currentField !== this.field || this.currentId !== this.id) {
      	this.field = this.currentField;
      	this.id = this.currentId;
        this.getDetail(this.field, this.id);
    }
  },
  methods: {
    getDetail (field, id) {
      let detailInfo = new DetailModel();
      detailInfo.getDetail(this.field,this.id).then((res) => {
        if (res && res.status === 0) {
          const data = res.data.data;
          data.pics && (data.pics = tools.jsonToArr(data.pics));
          data.comment_keyword && (data.comment_keyword = tools.strToArr(data.comment_keyword));
          data.service && (data.service = tools.jsonToArr(data.service));
          this.detailInfos = data;
        }else if(res.status === -1){
          this.netWorkErrorShow = true;
        }
        console.log(this.detailInfos)
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>