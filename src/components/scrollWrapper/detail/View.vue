<template>
  <div class="detail-wrapper">
    <detail-name :name=viewInfos.name></detail-name>
    <detail-star :name=viewInfos.score :num=Number(viewInfos.star)></detail-star>
    <detail-address :name=viewInfos.address></detail-address>
    <detail-price :name=viewInfos.default_price></detail-price>
    <detail-date-time :name=viewInfos.open_datetime></detail-date-time>
    <detail-intro :name=viewInfos.tip></detail-intro>
    <detail-info :content=viewInfos.intro title='详细介绍'></detail-info>
    <detail-info :content=viewInfos.ticket_info title='购票信息'></detail-info>
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
export default {
  name: 'DetailView',
  components: {
    DetailName,
    DetailStar,
    DetailAddress,
    DetailPrice,
    DetailDateTime,
    DetailIntro,
    DetailInfo
  },
  props: {
    viewInfos: {
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