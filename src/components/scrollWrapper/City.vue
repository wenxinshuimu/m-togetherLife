<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <current-city></current-city>
      <city-list></city-list>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import CurrentCity from './cityList/CurrentCity'
import CityList from './cityList/Index'
export default {
  name: 'CityScrollWrapper',
  components: {
    CityList,
    CurrentCity
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper);
  }
}
</script>