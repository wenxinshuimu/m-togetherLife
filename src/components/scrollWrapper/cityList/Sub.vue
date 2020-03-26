<template>
  <div class="city" @click="changeCity(cityInfo)">
    <span>{{cityInfo.cityName}}</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'CitySub',
  props: {
    cityInfo: {
      type: Object,
      default() {
        return {
          cityId: '0',
          cityName: '11'
        }
      }
    }
  },
  methods: {
    ...mapMutations(['selectCity']),
    changeCity(cityInfo) {
      this.selectCity(cityInfo);
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/variables.scss';
  @import '~styles/mixins.scss';
  .city {
    @include flex-row;
    text-align: center;
    height: .5rem;
    line-height: .5rem;
    font-size: .14rem;
    padding-left: .14rem;
    background-color: #fff;
    border-bottom: 1px solid #eee;
  }
</style>