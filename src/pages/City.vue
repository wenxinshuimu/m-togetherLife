<template>
  <div class="container">
    <common-header :title=title></common-header>
    <city-scroll></city-scroll>
  </div>
</template>

<script>
import CommonHeader from 'components/header/Common'
import CityScroll from 'components/scrollWrapper/City'
export default {
  name: 'City',
  data() {
    return {
      title: '城市选择'
    }
  },
  components: {
    CommonHeader,
    CityScroll
  }
}
</script>
<style lang="scss" scoped>

</style>