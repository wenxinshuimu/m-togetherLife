<template>
  <div class="detail-wrapper">
    <detail-name :name=foodInfos.name></detail-name>
    <detail-star :name=foodInfos.score :num=Number(foodInfos.star)></detail-star>
    <detail-address :name=foodInfos.address></detail-address>
    <detail-price :name=foodInfos.default_price></detail-price>
    <detail-date-time :name=foodInfos.open_datetime></detail-date-time>
    <detail-info :content=foodInfos.recom title='推荐菜品'></detail-info>
    <detail-key-word :content=foodInfos.comment_keyword title='评论关键词'></detail-key-word>
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
export default {
  name: 'DetailFood',
  components: {
    DetailName,
    DetailStar,
    DetailAddress,
    DetailPrice,
    DetailDateTime,
    DetailIntro,
    DetailInfo,
    DetailKeyWord
  },
  props: {
    foodInfos: {
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