<template>
  <div :class="['sub-wrap', {active: cityInfo.cityId == this.cityId}]" @click="onClickTab(cityInfo)">
    <span class="sub-text">{{cityInfo.cityName}}</span>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'TabSub',
  props: {
    cityInfo: Object
  },
  computed: {
    ...mapState(['cityId'])
  },
  methods: {
    ...mapMutations(['selectCity']),
    onClickTab(cityInfo) {
      this.selectCity(cityInfo);
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '~styles/variables.scss';
  @import '~styles/mixins.scss';
  .sub-wrap {
    @include vh-center;
    flex: 1;
    height: 100%;
    font-size: .16rem;
    box-sizing: border-box;
    border-bottom: 2px solid #fff;
    &.active {
      color: $defaultGreen;
      border-bottom: 2px solid $defaultGreen;
    }
  }
</style>