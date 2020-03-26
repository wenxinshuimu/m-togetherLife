<template>
  <div class="detail-wrapper">
    <detail-name :name=massageInfos.name></detail-name>
    <detail-star :name=massageInfos.score :num=Number(massageInfos.star)></detail-star>
    <detail-address :name=massageInfos.address></detail-address>
    <detail-price :name=massageInfos.default_price></detail-price>
    <detail-date-time :name=massageInfos.open_datetime></detail-date-time>
    <detail-key-word :content=massageInfos.comment_keyword title='评论关键词'></detail-key-word>
    <detail-server :server=massageInfos.service title='商家服务'></detail-server>
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
  name: 'DetailMassage',
  components: {
    DetailName,
    DetailStar,
    DetailAddress,
    DetailPrice,
    DetailIntro,
    DetailServer,
    DetailKeyWord,
    DetailDateTime
  },
  props: {
    massageInfos: {
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