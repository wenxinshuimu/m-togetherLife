<template>
  <div class="container">
    <common-header :title=title></common-header>
    <detail-scroll :title=title></detail-scroll>
  </div>
</template>

<script>
import CommonHeader from 'components/header/Common'
import DetailScroll from 'components/scrollWrapper/Detail'
export default {
  name: 'Detail',
  data() {
    return {
      title: '详情'
    }
  },
  components: {
    CommonHeader,
    DetailScroll
  }
}
</script>
<style lang="scss" scoped>

</style>