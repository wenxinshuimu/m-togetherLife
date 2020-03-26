<template>
  <div class="detail-wrapper">
    <detail-name :name=ktvInfos.name></detail-name>
    <detail-star :name=ktvInfos.score :num=Number(ktvInfos.star)></detail-star>
    <detail-address :name=ktvInfos.address></detail-address>
    <detail-price :name=ktvInfos.default_price></detail-price>
    <detail-server :server=ktvInfos.service title='商家服务'></detail-server>
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
  name: 'DetailKtv',
  components: {
    DetailName,
    DetailStar,
    DetailAddress,
    DetailPrice,
    DetailIntro,
    DetailServer
  },
  props: {
    ktvInfos: {
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