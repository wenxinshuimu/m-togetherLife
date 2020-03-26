<template>
  <div class="detail-wrapper">
    <detail-name :name=hotelInfos.name></detail-name>
    <detail-star :name=hotelInfos.score :num=Number(hotelInfos.star)></detail-star>
    <detail-address :name=hotelInfos.address></detail-address>
    <detail-price :name=hotelInfos.default_price></detail-price>
    <detail-server :server=hotelInfos.service title='商家服务'></detail-server>
  </div>
</template>

<script>
import DetailName from './sub/Name'
import DetailStar from './sub/Star'
import DetailAddress from './sub/Address'
import DetailPrice from './sub/Price'
import DetailDateTime from './sub/DateTime'
import DetailIntro from './sub/Intro'
import DetailInfo from './sub/Info'
import DetailKeyWord from './sub/KeyWord'
import DetailServer  from './sub/Server'
export default {
  name: 'DetailHotel',
  components: {
    DetailName,
    DetailStar,
    DetailAddress,
    DetailPrice,
    DetailIntro,
    DetailServer
  },
  props: {
    hotelInfos: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>