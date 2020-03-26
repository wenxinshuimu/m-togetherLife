<template>
  <nav class="tab-wrap">
    <tab-sub 
    v-for="item of cityDatas" 
    :key="item.cityId"
    :cityInfo=item></tab-sub>
  </nav>
</template>
<script>
import TabSub from './Sub'
import cityDatas from 'data/cities';
export default {
  name: 'Tab',
  data() {
    return {
      cityDatas
    }
  },
  components: {
    TabSub
  }
}
</script>
<style lang="scss" scoped>
  @import '~styles/variables.scss';
  @import '~styles/mixins.scss';
  .tab-wrap {
    @include flex-row;
	  flex-wrap: no-wrap;
    width: 100%;
    height: .44rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
  }
</style>