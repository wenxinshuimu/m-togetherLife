<template>
  <header class="header">
    <city-selector></city-selector>
    <false-input></false-input>
  </header>
</template>
<script>
import CitySelector from './sub/CitySelector';
import FalseInput from './sub/FalseInput';
export default {
  name: 'HomeHeader',
  components: {
    CitySelector,
    FalseInput
  }
}
</script>
<style lang="scss" scoped>
  @import '~styles/variables.scss';
  @import '~styles/mixins.scss';
  .header {
    @include flex-row;
    height: $headerHeight;
    background-color: $defaultBgColor;
  }
</style>